import Link from "next/link";
import { X } from "lucide-react";
import BackgroundScene from "@/components/BackgroundScene";

export default function TermsPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: May 1, 2025</p>
              
              
              <h2 id="agreement" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">AGREEMENT TO OUR LEGAL TERMS</h2>
              <p className="mb-6">
                We are Hi.xyz LLC (&quot;<b>Company</b>&quot;, &quot;<b>we</b>&quot;, &quot;<b>us</b>&quot;, &quot;<b>our</b>&quot;).
              </p>
              <p className="mb-6">
                We operate the website <Link href="https://hi.xyz" className="text-primary">https://hi.xyz</Link> (the &quot;<b>Site</b>&quot;), the mobile application Hi (the &quot;<b>App</b>&quot;), 
                as well as any other related products and services that refer or link to these legal terms (the &quot;<b>Legal Terms</b>&quot;) 
                (collectively, the &quot;<b>Services</b>&quot;).
              </p>
              <p className="mb-6">
                You can contact us by email at <Link href="mailto:contact@hi.xyz" className="text-primary">contact@hi.xyz</Link>.
              </p>
              <p className="mb-6">
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity 
                (&quot;<b>you</b>&quot;), and Hi.xyz LLC, concerning your access to and use of the Services. You agree that by accessing the Services, 
                you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, 
                THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
              <p className="mb-6">
                Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly 
                incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these 
                Legal Terms from time to time. We will alert you about any changes by updating the &quot;Last updated&quot; date of these Legal Terms, 
                and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review 
                these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and 
                to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised 
                Legal Terms are posted.
              </p>
              <p className="mb-6">
                The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use 
                or register for the Services.
              </p>
              <p className="mb-8">
                We recommend that you print a copy of these Legal Terms for your records.
              </p>
              {/* Table of Contents */}
              <div className="glassmorphism p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                <nav className="space-y-2">
                  <a href="#services" className="block hover:text-primary transition-colors">1. OUR SERVICES</a>
                  <a href="#intellectual-property" className="block hover:text-primary transition-colors">2. INTELLECTUAL PROPERTY RIGHTS</a>
                  <a href="#user-representations" className="block hover:text-primary transition-colors">3. USER REPRESENTATIONS</a>
                  <a href="#user-registration" className="block hover:text-primary transition-colors">4. USER REGISTRATION</a>
                  <a href="#purchases" className="block hover:text-primary transition-colors">5. PURCHASES AND PAYMENT</a>
                  <a href="#subscriptions" className="block hover:text-primary transition-colors">6. SUBSCRIPTIONS</a>
                  <a href="#prohibited-activities" className="block hover:text-primary transition-colors">7. PROHIBITED ACTIVITIES</a>
                  <a href="#user-contributions" className="block hover:text-primary transition-colors">8. USER GENERATED CONTRIBUTIONS</a>
                  <a href="#contribution-license" className="block hover:text-primary transition-colors">9. CONTRIBUTION LICENSE</a>
                  <a href="#review-guidelines" className="block hover:text-primary transition-colors">10. GUIDELINES FOR REVIEWS</a>
                  <a href="#mobile-license" className="block hover:text-primary transition-colors">11. MOBILE APPLICATION LICENSE</a>
                  <a href="#services-management" className="block hover:text-primary transition-colors">12. SERVICES MANAGEMENT</a>
                  <a href="#privacy-policy" className="block hover:text-primary transition-colors">13. PRIVACY POLICY</a>
                  <a href="#copyright" className="block hover:text-primary transition-colors">14. COPYRIGHT INFRINGEMENTS</a>
                  <a href="#term-termination" className="block hover:text-primary transition-colors">15. TERM AND TERMINATION</a>
                  <a href="#modifications" className="block hover:text-primary transition-colors">16. MODIFICATIONS AND INTERRUPTIONS</a>
                  <a href="#governing-law" className="block hover:text-primary transition-colors">17. GOVERNING LAW</a>
                  <a href="#dispute-resolution" className="block hover:text-primary transition-colors">18. DISPUTE RESOLUTION</a>
                  <a href="#corrections" className="block hover:text-primary transition-colors">19. CORRECTIONS</a>
                  <a href="#disclaimer" className="block hover:text-primary transition-colors">20. DISCLAIMER</a>
                  <a href="#limitations" className="block hover:text-primary transition-colors">21. LIMITATIONS OF LIABILITY</a>
                  <a href="#indemnification" className="block hover:text-primary transition-colors">22. INDEMNIFICATION</a>
                  <a href="#user-data" className="block hover:text-primary transition-colors">23. USER DATA</a>
                  <a href="#electronic-communications" className="block hover:text-primary transition-colors">24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a>
                  <a href="#california" className="block hover:text-primary transition-colors">25. CALIFORNIA USERS AND RESIDENTS</a>
                  <a href="#miscellaneous" className="block hover:text-primary transition-colors">26. MISCELLANEOUS</a>
                  <a href="#contact-us" className="block hover:text-primary transition-colors">27. CONTACT US</a>
                </nav>
              </div>

              <h2 id="services" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">1. OUR SERVICES</h2>
              <p className="mb-6">The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
              <p className="mb-6">The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>

              <h2 id="intellectual-property" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">2. INTELLECTUAL PROPERTY RIGHTS</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Our Intellectual Property</h3>
              <p className="mb-6">
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, 
                functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the &quot;<b>Content</b>&quot;),
                as well as the trademarks, service marks, and logos contained therein (&quot;<b>Marks</b>&quot;).
              </p>
              <p className="mb-6">
                Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair
                competition laws) and treaties in the United States and around the world.
              </p>
              <p className="mb-6">
                The Content and Marks are provided in or through the Services &quot;AS IS&quot; for your personal, non-commercial use only.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Your Use of Our Services</h3>
              <p className="mb-6">
                Subject to your compliance with these Legal Terms, including the &quot;<a href="#prohibited-activities" className="text-primary">PROHIBITED ACTIVITIES</a>&quot; section below, we grant you a non-exclusive, non-transferable, revocable license to:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>access the Services; and</li>
                <li>download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use</li>
              </ul>
              <p className="mb-6">
                Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied,
                reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold,
                licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
              </p>
              <p className="mb-6">
                If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: <Link href="mailto:contact@hi.xyz" className="text-primary">contact@hi.xyz</Link>. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.
              </p>
              <p className="mb-6">
                We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.
              </p>
              <p className="mb-6">
                Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
              </p>

              <h4 className="text-lg font-semibold mt-6 mb-3">2.2.1 Your submissions and contributions</h4>
              <p className="mb-6">
                Please review this section and the &quot;<a href="#prohibited-activities" className="text-primary">PROHIBITED ACTIVITIES</a>&quot; section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.
              </p>
              <p className="mb-6">
                <b>Submissions:</b> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services (&quot;Submissions&quot;), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.
              </p>
              <p className="mb-6">
                <b>Contributions:</b> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services, including but not limited to text, writings, video, audio, photographs, music, graphics, comments, reviews, rating suggestions, personal information, or other material (&quot;Contributions&quot;). Any Submission that is publicly posted shall also be treated as a Contribution.
              </p>
              <p className="mb-6">
                You understand that Contributions may be viewable by other users of the Services.
              </p>
              <p className="mb-6">
                <b>When you post Contributions, you grant us a license (including use of your name, trademarks, and logos):</b> By posting any Contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to: use, copy, reproduce, distribute, sell, resell, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt (in whole or in part), and exploit your Contributions (including, without limitation, your image, name, and voice) for any purpose, commercial, advertising, or otherwise, to prepare derivative works of, or incorporate into other works, your Contributions, and to sublicense the licenses granted in this section. Our use and distribution may occur in any media formats and through any media channels.
              </p>
              <p className="mb-6">
                This license includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide.
              </p>
              <p className="mb-6">
                <b>You are responsible for what you post or upload:</b> By sending us Submissions and/or posting Contributions through any part of the Services or making Contributions accessible through the Services by linking your account through the Services to any of your social networking accounts, you:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>confirm that you have read and agree with our &quot;<a href="#prohibited-activities" className="text-primary">PROHIBITED ACTIVITIES</a>&quot; and will not post, send, publish, upload, or transmit through the Services any Submission nor post any Contribution that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
                <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission and/or Contribution;</li>
                <li>warrant that any such Submission and/or Contributions are original to you or that you have the necessary rights and licenses to submit such Submissions and/or Contributions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions and/or Contributions; and</li>
                <li>warrant and represent that your Submissions and/or Contributions do not constitute confidential information.</li>
              </ul>
              <p className="mb-6">
                You are solely responsible for your Submissions and/or Contributions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party&apos;s intellectual property rights, or (c) applicable law.
              </p>
              <p className="mb-6">
                We may remove or edit your Content: Although we have no obligation to monitor any Contributions, we shall have the right to remove or edit any Contributions at any time without notice if in our reasonable opinion we consider such Contributions harmful or in breach of these Legal Terms. If we remove or edit any such Contributions, we may also suspend or disable your account and report you to the authorities.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Copyright Infringement</h3>
              <p className="mb-6">
                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately refer to the &quot;<a href="#copyright" className="text-primary">COPYRIGHT INFRINGEMENTS</a>&quot; section below.
              </p>

              <h2 id="user-representations" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">3. USER REPRESENTATIONS</h2>
              <p className="mb-6">
                By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Legal Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.
              </p>
              <p className="mb-6">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
              </p>

              <h2 id="user-registration" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">4. USER REGISTRATION</h2>
              <p className="mb-6">
                You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
              </p>

              <h2 id="purchases" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">5. PURCHASES AND PAYMENT</h2>
              <p className="mb-6">
                We accept the following forms of payment:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>Discover</li>
              </ul>
              <p className="mb-6">
                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
              </p>
              <p className="mb-6">
                You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
              </p>
              <p className="mb-6">
                We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.
              </p>

              <h2 id="subscriptions" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">6. SUBSCRIPTIONS</h2>
              <p className="mb-6">
                Billing and Cancellation. The subscription period will be as indicated at the time of purchase. You agree to pay all fees in accordance with the subscription plan you select. You can cancel your subscription at any time by contacting us using the contact information provided below. Your cancellation will take effect at the end of the current paid period.
              </p>
              <p className="mb-6">
                Fee Changes. We may, from time to time, make changes to any subscription fee and will communicate any price changes to you in advance and, if applicable, how to accept those changes. Price changes for subscriptions will take effect at the start of the next subscription period following the date of the price change. As permitted by local law, you accept the new price by continuing to use the subscription after the price change takes effect. If you do not agree with the price changes, you have the right to reject the change by canceling your subscription before the price change goes into effect. Please therefore make sure you read any such notification of price changes carefully.
              </p>
              <p className="mb-6">
                Payments. You will be charged in advance on a recurring basis for each period, depending on the subscription plan you select. If you fail to make any payment when due, we may suspend or terminate your subscription and your access to the Services.
              </p>

              <h2 id="prohibited-activities" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">7. PROHIBITED ACTIVITIES</h2>
              <p className="mb-6">
                You may not access or use the Services for any purpose other than that for which we make them available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
              <p className="mb-6">
                As a user of the Services, you agree not to:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party&apos;s uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (&quot;gifs&quot;), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as &quot;spyware&quot; or &quot;passive collection mechanisms&quot; or &quot;pcms&quot;).</li>
                <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
                <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.</li>
                <li>Copy or adapt the Services&apos; software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
                <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or using or launching any unauthorized script or other software.</li>
                <li>Use a buying agent or purchasing agent to make purchases on the Services.</li>
                <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
                <li>Use the Services to advertise or offer to sell goods and services.</li>
                <li>Sell or otherwise transfer your profile.</li>
              </ul>

              <h2 id="user-contributions" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">8. USER GENERATED CONTRIBUTIONS</h2>
              <p className="mb-6">
                The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, &quot;Contributions&quot;). Contributions may be viewable by other users of the Services and through third-party websites. As such, any Contributions you transmit may be treated as non-confidential and non-proprietary. When you create or make available any Contributions, you thereby represent and warrant that:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Terms of Service.</li>
                <li>You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Terms of Service.</li>
                <li>Your Contributions are not false, inaccurate, or misleading.</li>
                <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
                <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
                <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
                <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
                <li>Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
                <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Service, or any applicable law or regulation.</li>
              </ul>
              <p className="mb-6">
                Any use of the Services in violation of the foregoing violates these Terms of Service and may result in, among other things, termination or suspension of your rights to use the Services.
              </p>


              <h2 id="contribution-license" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">9. CONTRIBUTION LICENSE</h2>
              <p className="mb-6">
                By posting your Contributions to any part of the Services, you automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute such Contributions (including, without limitation, your image and voice) for any purpose, commercial, advertising, or otherwise, and to prepare derivative works of, or incorporate into other works, such Contributions, and grant and authorize sublicenses of the foregoing. The use and distribution may occur in any media formats and through any media channels.
              </p>
              <p className="mb-6">
                This license will apply to any form, media, or technology now known or hereafter developed, and includes our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service marks, trade names, logos, and personal and commercial images you provide. You waive all moral rights in your Contributions, and you warrant that moral rights have not otherwise been asserted in your Contributions.
              </p>
              <p className="mb-6">
                We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.
              </p>
              <p className="mb-6">
                We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations on the Services; and (3) to pre-screen or delete any Contributions at any time and for any reason, without notice. We have no obligation to monitor your Contributions.
              </p>

              <h2 id="review-guidelines" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">10. GUIDELINES FOR REVIEWS</h2>
              <p className="mb-6">
                We may provide you areas on the Services to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hateful language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.
              </p>
              <p className="mb-6">
                We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.
              </p>

              <h2 id="mobile-license" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">11. MOBILE APPLICATION LICENSE</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Use License</h3>
              <p className="mb-6">
                If you access the Services via the App, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the App on wireless electronic devices owned or controlled by you, and to access and use the App on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Legal Terms. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the App; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the App; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the App; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the App; (5) use the App for any revenue-generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the App available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the App for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the App; (8) use the App to send automated queries to any website or to send any unsolicited commercial email; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the App.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Apple and Android Devices</h3>
              <p className="mb-6">
                The following terms apply when you use the App obtained from either the Apple Store or Google Play (each an &quot;App Distributor&quot;) to access the Services: (1) the license granted to you for our App is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor&apos;s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the App as specified in the terms and conditions of this mobile application license contained in these Legal Terms or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the App; (3) in the event of any failure of the App to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price, if any, paid for the App, and to the maximum extent permitted by applicable law, the App Distributor will have no other warranty obligation whatsoever with respect to the App; (4) you represent and warrant that (i) you are not located in a country that is subject to a US government embargo, or that has been designated by the US government as a &quot;terrorist supporting&quot; country and (ii) you are not listed on any US government list of prohibited or restricted parties; (5) you must comply with applicable third-party terms of agreement when using the App, e.g., if you have a VoIP application, then you must not be in violation of their wireless data service agreement when using the App; and (6) you acknowledge and agree that the App Distributors are third-party beneficiaries of the terms and conditions in this mobile application license contained in these Legal Terms, and that each App Distributor will have the right (and will be deemed to have accepted the right) to enforce the terms and conditions in this mobile application license contained in these Legal Terms against you as a third-party beneficiary thereof.
              </p>

              <h2 id="services-management" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">12. SERVICES MANAGEMENT</h2>
              <p className="mb-6">
                We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
              </p>

              <h2 id="privacy-policy" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">13. PRIVACY POLICY</h2>
              <p className="mb-6">
                We care about data privacy and security. By using the Services, you agree to be bound by our Privacy Policy posted on the Services, which is incorporated into these Legal Terms. Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
              </p>

              <h2 id="copyright" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">14. COPYRIGHT INFRINGEMENTS</h2>
              <p className="mb-6">
                We respect the intellectual property rights of others. If you believe that any material available on or through the Services infringes upon any copyright you own or control, please immediately notify us using the contact information provided below (a &quot;Notification&quot;). A copy of your Notification will be sent to the person who posted or stored the material addressed in the Notification. Please be advised that pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a Notification. Thus, if you are not sure that material located on or linked to by the Services infringes your copyright, you should consider first contacting an attorney.
              </p>

              <h2 id="term-termination" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">15. TERM AND TERMINATION</h2>
              <p className="mb-6">
                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </p>
              <p className="mb-6">
                If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
              </p>

              <h2 id="modifications" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">16. MODIFICATIONS AND INTERRUPTIONS</h2>
              <p className="mb-6">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
              </p>
              <p className="mb-6">
                We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
              </p>

              <h2 id="governing-law" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">17. GOVERNING LAW</h2>
              <p className="mb-6">
                These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Texas applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.
              </p>

              <h2 id="dispute-resolution" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">18. DISPUTE RESOLUTION</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Informal Negotiations</h3>
              <p className="mb-6">
                To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a &quot;Dispute&quot; and collectively, the &quot;Disputes&quot;) brought by either you or us (individually, a &quot;Party&quot; and collectively, the &quot;Parties&quot;), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Binding Arbitration</h3>
              <p className="mb-6">
                If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (&quot;AAA&quot;) and, where appropriate, the AAA&apos;s Supplementary Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the <a href="https://www.adr.org/" target="_blank" rel="noopener noreferrer">American Arbitration Association (AAA) website</a>. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Consumer Rules and, where appropriate, limited by the AAA Consumer Rules. The arbitration may be conducted in person, through the submission of documents, by phone, or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by either Party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except where otherwise required by the applicable AAA rules or applicable law, the arbitration will take place in New York County, New York. Except as otherwise provided herein, the Parties may litigate in court to compel arbitration, stay proceedings pending arbitration, or to confirm, modify, vacate, or enter judgment on the award entered by the arbitrator.
              </p>
              <p className="mb-6">
                If for any reason, a Dispute proceeds in court rather than arbitration, the Dispute shall be commenced or prosecuted in the state and federal courts located in New York County, New York, and the Parties hereby consent to, and waive all defenses of lack of personal jurisdiction, and forum non conveniens with respect to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are excluded from these Legal Terms.
              </p>
              <p className="mb-6">
                In no event shall any Dispute brought by either Party related in any way to the Services be commenced more than one (1) years after the cause of action arose. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Restrictions</h3>
              <p className="mb-6">
                The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">Exceptions to Informal Negotiations and Arbitration</h3>
              <p className="mb-6">
                The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.
              </p>

              <h2 id="corrections" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">19. CORRECTIONS</h2>
              <p className="mb-6">
                There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
              </p>

              <h2 id="disclaimer" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">20. DISCLAIMER</h2>
              <p className="mb-6">
                THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
              </p>

              <h2 id="limitations" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">21. LIMITATIONS OF LIABILITY</h2>
              <p className="mb-6">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
              </p>

              <h2 id="indemnification" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">22. INDEMNIFICATION</h2>
              <p className="mb-6">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys&apos; fees and expenses, made by any third party due to or arising out of: (1) your Contributions; (2) use of the Services; (3) breach of these Legal Terms; (4) any breach of your representations and warranties set forth in these Legal Terms; (5) your violation of the rights of a third party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.
              </p>

              <h2 id="user-data" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">23. USER DATA</h2>
              <p className="mb-6">
                We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
              </p>

              <h2 id="electronic-communications" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">24. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
              <p className="mb-6">
                Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.
              </p>

              <h2 id="california" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">25. CALIFORNIA USERS AND RESIDENTS</h2>
              <p className="mb-6">
                If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
              </p>

              <h2 id="miscellaneous" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">26. MISCELLANEOUS</h2>
              <p className="mb-6">
                These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
              </p>

              <h2 id="contact-us" className="text-2xl font-bold mt-8 mb-4 scroll-mt-20">27. CONTACT US</h2>
              <p className="mb-6">
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
              </p>
              <p className="mb-6">
                Hi.xyz LLC
              </p>
              <p className="mb-6">
                United States
              </p>
              <p className="mb-6">
                <Link href="mailto:contact@hi.xyz" className="text-primary">contact@hi.xyz</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 