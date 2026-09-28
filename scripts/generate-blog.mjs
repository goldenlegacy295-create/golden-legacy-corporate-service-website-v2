import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure OpenAI API key is present
if (!process.env.OPENAI_API_KEY) {
  console.error('ERROR: OPENAI_API_KEY environment variable is missing.');
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));
      }
    });
  });
}

async function generateBlog() {
  const blogsDir = path.join(process.cwd(), 'content/blogs');
  
  // Read existing blogs to avoid duplicates
  let existingTitles = [];
  let existingSlugs = [];
  
  if (fs.existsSync(blogsDir)) {
    const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.json'));
    for (const file of files) {
      const content = JSON.parse(fs.readFileSync(path.join(blogsDir, file), 'utf-8'));
      existingTitles.push(content.title);
      existingSlugs.push(content.slug);
    }
  } else {
    fs.mkdirSync(blogsDir, { recursive: true });
  }

  console.log(`Found ${existingTitles.length} existing articles.`);

  const prompt = \`
You are an expert business consultant and copywriter based in Dubai. 
You write professional, highly practical, and SEO-friendly articles for "Golden Legacy Corporate Services".
Their website is https://www.goldenlegacy.ae/.

We need a completely original, high-quality article (approx 1200-1800 words) about setting up a business in Dubai/UAE.
Prioritize official sources (e.g., u.ae, invest.dubai.ae, tax.gov.ae). Do not invent any regulations, fees, or deadlines.
Do not use generic AI phrasing. Make it sound trustworthy, clear, and practical for entrepreneurs, investors, and SMEs.

Existing articles (DO NOT DUPLICATE THESE TOPICS):
\${existingTitles.map(t => '- ' + t).join('\\n')}

Focus on one of these areas:
- Dubai mainland company setup
- Free zone vs mainland
- Corporate tax / VAT
- Business visas / Golden Visa
- E-commerce / Tech AI businesses
- Real estate, F&B, Logistics

Output the result EXACTLY as a JSON object with the following structure (no markdown wrappers, just valid JSON):
{
  "slug": "url-friendly-slug-here",
  "title": "SEO Optimized Title (Max 60 chars)",
  "excerpt": "Meta description and short excerpt (Max 160 chars)",
  "category": "e.g., Business Setup, Taxation, Immigration",
  "keywords": ["dubai business", "mainland", "etc"],
  "imagePrompt": "A highly detailed prompt for DALL-E 3 to generate an abstract, professional corporate blog cover image related to this topic. Do not include text in the image.",
  "content": "HTML formatted content. Include <h2> and <h3> tags, <ul>/<ol> lists, and practical examples. Do not include the main <h1> title in the content. Use professional styling. Add a 'Conclusion' section. Make it detailed and long enough."
}
\`;

  console.log('Generating article content via OpenAI...');
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' }
  });

  const rawContent = completion.choices[0].message.content;
  let articleData;
  try {
    articleData = JSON.parse(rawContent);
  } catch (error) {
    console.error('Failed to parse OpenAI response as JSON:', rawContent);
    process.exit(1);
  }

  // Verification checks
  if (!articleData.title || !articleData.slug || !articleData.content || !articleData.excerpt) {
    console.error('ERROR: Missing required fields in generated article.');
    process.exit(1);
  }

  if (existingSlugs.includes(articleData.slug)) {
    console.error(`ERROR: Generated slug already exists: ${articleData.slug}`);
    process.exit(1);
  }

  // Generate Image
  console.log(`Generating image for prompt: ${articleData.imagePrompt}...`);
  let imageUrl = '/blog/default.png'; // Fallback
  try {
    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt: "Professional corporate aesthetic, Golden Legacy brand style (black and gold colors). " + articleData.imagePrompt + " No text in the image.",
      n: 1,
      size: "1024x1024",
    });
    
    const remoteUrl = imageResponse.data[0].url;
    const imageFilename = `${articleData.slug}.png`;
    const imageFilepath = path.join(process.cwd(), 'public/blog', imageFilename);
    
    // Ensure public/blog directory exists
    fs.mkdirSync(path.join(process.cwd(), 'public/blog'), { recursive: true });
    
    console.log(`Downloading image to ${imageFilepath}...`);
    await downloadImage(remoteUrl, imageFilepath);
    imageUrl = `/blog/${imageFilename}`;
  } catch (imgError) {
    console.warn('WARNING: Failed to generate or download image. Using fallback.', imgError.message);
  }

  const date = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const finalArticle = {
    slug: articleData.slug,
    title: articleData.title,
    excerpt: articleData.excerpt,
    date: date,
    author: "Golden Legacy Experts",
    image: imageUrl,
    category: articleData.category,
    keywords: articleData.keywords || [],
    content: articleData.content
  };

  const articlePath = path.join(blogsDir, `${finalArticle.slug}.json`);
  fs.writeFileSync(articlePath, JSON.stringify(finalArticle, null, 2));
  
  console.log(`Successfully created new article: ${articlePath}`);
}

generateBlog().catch(err => {
  console.error("Fatal Error generating blog:", err);
  process.exit(1);
});
