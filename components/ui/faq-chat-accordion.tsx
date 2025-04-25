"use client"

import * as React from "react"
import { motion, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useInView } from "react-intersection-observer"

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FaqChatAccordionProps {
  data: FAQItem[]
  className?: string
  questionClassName?: string
  answerClassName?: string
}

export function FaqChatAccordion({ data, className, questionClassName, answerClassName }: FaqChatAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Fixed dark mode colors
  const questionActiveColor = "#1888FE"
  const questionInactiveColor = "hsl(var(--muted))"
  const answerBgColor = "#e6e5eb"
  const questionTextColor = "#e9e9eb"
  const answerTextColor = "#26252A"

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 80,
        duration: 0.6
      }
    },
  }

  return (
    <div className={cn("p-4", className)} ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <Accordion
          type="single"
          collapsible
          value={openItem || ""}
          onValueChange={(value) => setOpenItem(value)}
          className="border-none"
        >
          {data.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              custom={index}
            >
              <AccordionItem value={item.id.toString()} className="mb-2 border-none">
                <AccordionTrigger
                  className="flex w-full items-center justify-start gap-x-4 p-0 hover:no-underline"
                  iconClassName={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                    openItem === item.id.toString() && "text-[#1888FE]",
                  )}
                >
                  <div className="flex-grow flex justify-end">
                    <div
                      className={cn(
                        "relative rounded-2xl py-1.5 px-3 text-left inline-block whitespace-normal break-words",
                        questionClassName,
                      )}
                      style={{
                        backgroundColor: openItem === item.id.toString() ? questionActiveColor : questionInactiveColor,
                        color: openItem === item.id.toString() ? "#e1e1e1" : questionTextColor,
                        width: "fit-content",
                        maxWidth: "75%",
                        marginRight: "10px" // Add space for the bubble tail
                      }}
                    >
                      <span className="font-medium">{item.question}</span>
                      <svg
                        className="absolute -bottom-[0px] -right-[6px] w-[14px] h-[12px]"
                        viewBox="336.817 134.6523 18.359 15.0817"
                        fill={openItem === item.id.toString() ? questionActiveColor : questionInactiveColor}
                        style={{
                          transform: "scaleX(-1) scaleY(-1)",
                        }}
                      >
                        <path d="M 336.817 134.994 C 345.919 133.339 352.849 138.097 355.176 140.683 L 354.918 148.441 C 352.418 147.924 347.005 147.458 345.35 149.734 C 345.609 140.425 338.627 135.77 336.817 134.994 Z" />
                      </svg>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-0">
                  <motion.div
                    initial="collapsed"
                    animate={openItem === item.id.toString() ? "open" : "collapsed"}
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-1">
                      <div
                        className={cn(
                          "relative rounded-2xl py-1.5 px-3 inline-block whitespace-normal break-words",
                          answerClassName,
                        )}
                        style={{
                          backgroundColor: answerBgColor,
                          color: answerTextColor,
                          width: "fit-content",
                          maxWidth: "75%",
                          marginLeft: "10px" // Add space for the bubble tail
                        }}
                      >
                        {item.answer}
                        <svg
                          className="absolute -bottom-[0px] -left-[6px] w-[14px] h-[12px]"
                          viewBox="336.817 134.6523 18.359 15.0817"
                          fill={answerBgColor}
                          style={{
                            transform: "scaleY(-1)",
                          }}
                        >
                          <path d="M 336.817 134.994 C 345.919 133.339 352.849 138.097 355.176 140.683 L 354.918 148.441 C 352.418 147.924 347.005 147.458 345.35 149.734 C 345.609 140.425 338.627 135.77 336.817 134.994 Z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  )
}