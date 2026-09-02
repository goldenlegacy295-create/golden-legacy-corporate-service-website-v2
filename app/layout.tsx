import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import MobileBottomNav from "@/components/MobileBottomNav";
import LeadModal from "@/components/LeadModal";
import WhatsAppFloat from "@/components/WhatsAppFloat";
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
    icon: "/golden-logo.png",
    shortcut: "/golden-logo.png",
    apple: "/golden-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoSlab.variable} ${robotoCondensed.variable} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <SocialSidebar />
        <MobileBottomNav />
        <WhatsAppFloat />
        <LeadModal />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
