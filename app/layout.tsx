import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import LeadModal from "@/components/LeadModal";
import SmoothScroll from "@/components/SmoothScroll";
import { Inter, Roboto_Slab, Roboto_Condensed } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoSlab = Roboto_Slab({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-slab",
});

const robotoCondensed = Roboto_Condensed({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-roboto-condensed",
});

export const metadata = {
  title: "Legacy - Corporate Services Provider Dubai",
  description: "Premier business setup consultancy in Dubai, UAE. We specialize in Mainland, Free Zone, and Offshore company formation.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WLDKDGLB');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} ${robotoSlab.variable} ${robotoCondensed.variable} font-sans antialiased bg-background text-foreground`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLDKDGLB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SmoothScroll>
          <Navbar />
          <SocialSidebar />
          <MobileBottomNav />
          <LeadModal />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
