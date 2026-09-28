const https = require('https');

https.get({
  hostname: 'api.github.com',
  path: '/repos/goldenlegacy295-create/golden-legacy-corporate-service-website-v2/actions/runs',
  headers: {
    'User-Agent': 'Node.js'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const runs = JSON.parse(data).workflow_runs;
    if (runs && runs.length > 0) {
      const latestRunId = runs[0].id;
      console.log('Latest run ID:', latestRunId);
      
      // Get the jobs for this run
      https.get({
        hostname: 'api.github.com',
        path: `/repos/goldenlegacy295-create/golden-legacy-corporate-service-website-v2/actions/runs/${latestRunId}/jobs`,
        headers: {
          'User-Agent': 'Node.js'
        }
      }, (res2) => {
        let data2 = '';
        res2.on('data', chunk => data2 += chunk);
        res2.on('end', () => {
          const jobs = JSON.parse(data2).jobs;
          if (jobs && jobs.length > 0) {
             const jobId = jobs[0].id;
             console.log('Job URL:', jobs[0].html_url);
             console.log('Steps:', JSON.stringify(jobs[0].steps.filter(s => s.conclusion === 'failure'), null, 2));
             
             // Get the logs
             https.get({
               hostname: 'api.github.com',
               path: `/repos/goldenlegacy295-create/golden-legacy-corporate-service-website-v2/actions/jobs/${jobId}/logs`,
               headers: { 'User-Agent': 'Node.js' }
             }, (res3) => {
               if (res3.statusCode === 302 || res3.statusCode === 301) {
                 https.get(res3.headers.location, (res4) => {
                   let logs = '';
                   res4.on('data', c => logs += c);
                   res4.on('end', () => console.log('Logs:\n', logs));
                 });
               } else {
                 let logs = '';
                 res3.on('data', c => logs += c);
                 res3.on('end', () => console.log('Logs:\n', logs));
               }
             });
          }
        });
      });
    } else {
      console.log('No runs found', JSON.parse(data));
    }
  });
}).on('error', err => console.log(err));
