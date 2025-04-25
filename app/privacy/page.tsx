import Link from "next/link";
import { X } from "lucide-react";
import BackgroundScene from "@/components/BackgroundScene";

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundScene />
      <div className="relative z-10">
        {/* Back to home button */}
        <Link href="/" className="absolute top-6 left-6 z-20">
          <div className="glassmorphism p-3 rounded-full hover:bg-gray-500/20 transition-colors">
            <X className="h-6 w-6 text-white" />
          </div>
        </Link>
        
        <div className="container mx-auto px-4 py-20">
          <div className="glassmorphism p-8 md:p-12 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: May 1, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                At hi.xyz, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website and use our services.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Account information (name, email address, password)</li>
                <li>Profile information (profile picture, bio, preferences)</li>
                <li>Communication data (messages, feedback)</li>
                <li>Usage data (how you interact with our services)</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing Your Information</h2>
              <p>
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>With service providers who perform services on our behalf</li>
                <li>In connection with a business transfer (e.g., merger, acquisition)</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
                being sent.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect 
                personal information from children under 13.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@hi.xyz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 