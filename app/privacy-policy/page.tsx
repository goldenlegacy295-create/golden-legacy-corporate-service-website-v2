import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy | Golden Legacy Corporate Services",
  description: "Privacy Policy for Golden Legacy Corporate Services in Dubai, UAE.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#030303] min-h-screen pt-32 pb-24 relative">
      {/* Decorative Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Privacy Policy</h1>
        <div className="w-24 h-1 bg-gold mb-12 rounded-full"></div>

        <div className="prose prose-invert prose-gold max-w-none text-gray-400 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At Golden Legacy Corporate Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us when accessing our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="leading-relaxed mb-4">
              We may collect personal identification information from you in various ways, including but not limited to when you visit our site, fill out a form, and in connection with other activities, services, features, or resources we make available. The information collected may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (email address, phone number)</li>
              <li>Company and business information</li>
              <li>Financial and identification documents necessary for corporate services</li>
              <li>IP addresses and browser information (automatically collected)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">
              Golden Legacy Corporate Services collects and uses your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide requested corporate services (company formation, PRO services, etc.)</li>
              <li>To improve customer service and respond to your inquiries efficiently</li>
              <li>To send periodic emails regarding your order or other products and services</li>
              <li>To comply with UAE legal and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
            <p className="leading-relaxed">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Sharing Your Personal Information</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners, trusted affiliates, and advertisers. We may also share necessary information with UAE government authorities solely for the purpose of executing the corporate services you have requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              Golden Legacy Corporate Services has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contacting Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <br/><br/>
              <strong>Golden Legacy Corporate Services</strong><br/>
              Email: info@goldenlegacy.ae<br/>
              Phone: +971 55 665 6007
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
