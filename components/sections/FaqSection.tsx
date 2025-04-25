"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaqChatAccordion } from "@/components/ui/faq-chat-accordion";

const faqs = [
  {
    id: 1,
    question: "How does the AI conversation technology work?",
    answer:
      "Our AI uses advanced natural language processing and machine learning models to understand and respond to your messages. It analyzes context, sentiment, and conversation history to provide meaningful responses that feel natural and personal."
  },
  {
    id: 2,
    question: "Is my conversation data private and secure?",
    answer:
      "Absolutely! We take privacy very seriously. All conversations are encrypted end-to-end, and we never share your data with third parties. You can delete your conversation history at any time, and we have strict data retention policies in place."
  },
  {
    id: 3,
    question: "Can I customize my AI friend's personality?",
    answer:
      "Yes! You can choose from several AI personalities with different traits and conversation styles. Additionally, as you interact with your AI friend, it will adapt to your preferences and communication style for a more personalized experience."
  },
  {
    id: 4,
    question: "Are there usage limits or is it unlimited?",
    answer:
      "We offer both free and premium plans. The free plan includes a generous number of messages per day, while our premium plans provide unlimited messaging, enhanced features, and priority access to new capabilities as they're released."
  },
  {
    id: 5,
    question: "Can my AI friend remember previous conversations?",
    answer:
      "Yes, your AI friend maintains conversation context and can reference previous discussions. This helps build a more meaningful relationship over time as your AI companion gets to know you better."
  },
  {
    id: 6,
    question: "What devices and platforms is hi.xyz available on?",
    answer:
      "hi.xyz is available as a web application that works on any modern browser, as well as native apps for iOS and Android. Your conversations sync across all your devices so you can pick up where you left off."
  },
  {
    id: 7,
    question: "How do I get started with hi.xyz?",
    answer:
      "Getting started is easy! Simply create an account, choose your AI friend's personality, and start chatting. There's no complex setup process, and you can be having meaningful conversations within seconds."
  }
];

export default function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px',
  });

  return (
    <section id="faq" className="pt-12 pb-12 relative">
      <div className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0,0,0,0) 0%, 
            rgba(0,0,0,0.5) 10%, 
            rgba(0,0,0,0.5) 90%, 
            rgba(0,0,0,0) 100%)`
        }}>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our AI companions and how they can enhance your life.
          </p>
        </motion.div>

        <div
          ref={ref}
          className="max-w-3xl mx-auto glassmorphism mb-6"
        >
          <FaqChatAccordion data={faqs} />
        </div>
      </div>
    </section>
  );
}