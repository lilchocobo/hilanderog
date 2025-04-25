import Link from "next/link";
import { X } from "lucide-react";
import BackgroundScene from "@/components/BackgroundScene";

export default function CookiesPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: May 1, 2025</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how hi.xyz uses cookies and similar technologies to recognize you 
                when you visit our website. It explains what these technologies are and why we use them, as well 
                as your rights to control our use of them.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">2. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a 
                website. Cookies are widely used by website owners to make their websites work, or to work more 
                efficiently, as well as to provide reporting information.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">3. Why Do We Use Cookies?</h2>
              <p>
                We use cookies for several reasons. Some cookies are required for technical reasons in order for 
                our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. 
                Other cookies enable us to track and target the interests of our users to enhance the experience 
                on our website. Third parties serve cookies through our website for analytics and other purposes.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">4. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Essential Cookies</h3>
              <p>
                These cookies are strictly necessary to provide you with services available through our website 
                and to use some of its features, such as access to secure areas.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Performance Cookies</h3>
              <p>
                These cookies are used to enhance the performance and functionality of our website but are non-essential 
                to their use. However, without these cookies, certain functionality may become unavailable.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Analytics Cookies</h3>
              <p>
                These cookies collect information that is used either in aggregate form to help us understand how 
                our website is being used or how effective our marketing campaigns are, or to help us customize our 
                website for you.
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Advertising Cookies</h3>
              <p>
                These cookies are used to make advertising messages more relevant to you and your interests. They also 
                perform functions like preventing the same ad from continuously reappearing, ensuring that ads are 
                properly displayed, and in some cases selecting advertisements that are based on your interests.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">5. How Can You Control Cookies?</h2>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
                preferences by clicking on the appropriate opt-out links provided in the cookie banner or by 
                adjusting your browser settings.
              </p>
              <p className="mt-4">
                Please note that if you choose to reject cookies, you may still use our website, but your access 
                to some functionality and areas of our website may be restricted. As the means by which you can 
                refuse cookies through your web browser controls vary from browser-to-browser, you should visit 
                your browser&apos;s help menu for more information.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">6. Do Not Track</h2>
              <p>
                Some browsers have incorporated &quot;Do Not Track&quot; (DNT) features that can send a signal to the 
                websites you visit indicating you do not wish to be tracked. Because there is not yet a common 
                understanding of how to interpret the DNT signal, our website does not currently respond to browser 
                DNT signals.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect, for example, changes to 
                the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit 
                this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies or other technologies, please contact us at 
                privacy@hi.xyz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 