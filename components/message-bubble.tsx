import type React from "react"

interface Tapback {
  type: "heart" | "thumbsup" | "thumbsdown" | "haha" | "exclamation" | "question"
  isFromMe: boolean
}

interface LinkPreview {
  url: string
  title: string
  image?: string
  domain: string
}

interface MessageBubbleProps {
  message?: string
  sender: "me" | "other"
  tapbacks?: Tapback[]
  isFirstMessage?: boolean
  isLastInSeries?: boolean
  isNextInSeries?: boolean
  children?: React.ReactNode
  linkPreview?: LinkPreview
}

function LinkPreviewEmbed({ preview }: { preview: LinkPreview }) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#3b3b3d] w-full max-w-[280px] flex flex-col">
      {preview.image && (
        <div className="aspect-square w-full">
          <img
            src={preview.image || "/placeholder.svg"}
            alt={preview.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
      )}
      <div className="p-2 space-y-0.5 flex-grow">
        <div 
          className="text-white font-medium truncate" 
          style={{ 
            fontSize: "calc(var(--cell-font-size) * 1.1)",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            lineHeight: "1.1"
          }}
        >
          {preview.title}
        </div>
        <div 
          className="text-white/60 truncate" 
          style={{ 
            fontSize: "var(--cell-font-size)",
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            lineHeight: "1.1"
          }}
        >
          {preview.domain}
        </div>
      </div>
    </div>
  )
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  sender,
  tapbacks = [],
  isFirstMessage = false,
  isLastInSeries = true,
  isNextInSeries = false,
  children,
  linkPreview,
}) => {
  const isMe = sender === "me"
  const bubbleColor = isMe ? "bg-[#1888FE]" : "bg-[#3b3b3d]"
  const textColor = isMe ? "text-[#e1e1e1]" : "text-[#e1e1e1]"
  const alignment = isMe ? "self-end" : "self-start"

  // When tapbacks exist, add extra space (margin-top) so the gap from the previous message is larger.
  const extraTopMargin = tapbacks.length > 0 ? "mt-3" : ""

  const hasTapbacks = tapbacks.length > 0
  // You already have internal top padding for the first message with tapbacks; you can keep or adjust it.
  const topPadding = isFirstMessage && hasTapbacks ? "pt-4" : ""
  const tapbackTopPosition = isFirstMessage && hasTapbacks ? "-top-2" : "-top-4"

  const cornerRadius = isLastInSeries ? (isMe ? "rounded-br-md" : "rounded-bl-md") : ""

  const showArrow = isLastInSeries && (!linkPreview || (linkPreview && message))

  const marginBottom = isNextInSeries ? "mb-0.5" : "mb-2"

  return (
    <div
      className={`relative max-w-[80%] ${alignment} ${extraTopMargin} ${topPadding} ${marginBottom} ${
        message && message.length <= 10 && !linkPreview ? "max-w-[80%]" : ""
      }`}
    >
      {hasTapbacks && (
        <div className={`absolute ${tapbackTopPosition} ${isMe ? "-left-4" : "-right-4"} flex gap-0.5`}>
          {tapbacks.map((tapback, index) => (
            <div key={index} className="relative">
              <svg
                className="w-8 h-8"
                viewBox="360.244 94.115 116 114"
                style={{
                  transform: isMe ? "scaleX(-1)" : "none",
                }}

              >
                <path
                  d="M 461.244 144.615 C 461.244 153.366 459.018 161.596 455.102 168.772 C 459.937 171.262 463.244 176.303 463.244 182.115 C 463.244 190.4 456.528 197.115 448.244 197.115 C 442.431 197.115 437.39 193.808 434.9 188.974 C 427.725 192.89 419.494 195.115 410.744 195.115 C 382.853 195.115 360.244 172.506 360.244 144.615 C 360.244 116.725 382.853 94.115 410.744 94.115 C 438.634 94.115 461.244 116.725 461.244 144.615 Z M 468.244 208.115 C 463.826 208.115 460.244 204.533 460.244 200.115 C 460.244 195.697 463.826 192.115 468.244 192.115 C 472.662 192.115 476.244 195.697 476.244 200.115 C 476.244 204.533 472.662 208.115 468.244 208.115 Z"
                  fill={tapback.isFromMe ? "#1888FE" : "#3b3b3d"}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M 393.448 129.63 C 392.532 130.188 391.273 131.155 390.649 131.779 C 390.025 132.403 389.111 133.529 388.618 134.283 C 388.124 135.036 387.5 136.6 387.232 137.757 C 386.963 138.915 386.744 140.649 386.744 141.612 C 386.744 142.574 386.959 144.262 387.222 145.362 C 387.484 146.462 388.409 148.757 389.275 150.462 C 390.31 152.498 392.355 155.076 395.231 157.971 C 397.641 160.396 400.399 162.931 401.362 163.604 C 402.324 164.278 403.418 165.126 403.792 165.49 C 404.166 165.853 405.565 166.705 406.9 167.381 C 408.236 168.058 409.639 168.612 410.018 168.612 C 410.397 168.612 412.148 167.683 413.909 166.548 C 415.671 165.413 417.224 164.333 417.362 164.149 C 417.499 163.965 418.399 163.265 419.362 162.593 C 420.324 161.922 422.262 160.226 423.667 158.823 C 425.073 157.42 427.329 154.605 428.68 152.567 C 430.032 150.529 431.451 147.962 431.835 146.862 C 432.218 145.762 432.522 143.467 432.51 141.763 C 432.498 140.059 432.181 137.626 431.806 136.356 C 431.431 135.087 430.442 133.303 429.608 132.393 C 428.774 131.482 427.308 130.259 426.352 129.676 C 424.987 128.844 423.803 128.615 420.862 128.615 C 417.932 128.615 416.735 128.845 415.388 129.666 C 414.44 130.244 413.029 131.398 412.251 132.23 C 411.474 133.062 410.618 134.107 410.35 134.552 C 409.913 135.277 409.77 135.251 408.987 134.306 C 408.506 133.726 407.662 132.684 407.112 131.992 C 406.562 131.3 405.324 130.257 404.362 129.675 C 402.992 128.845 401.797 128.615 398.862 128.615 C 395.974 128.615 394.729 128.849 393.448 129.63 Z"
                  fill={tapback.isFromMe ? "#fff" : "#808080"}
                />
              </svg>
            </div>
          ))}
        </div>
      )}
      <div
        className={`${bubbleColor} ${textColor} rounded-2xl ${cornerRadius} ${
          linkPreview ? "p-0 overflow-hidden" : "py-1.5 px-2"
        } inline-block ${message && message.length <= 10 && !linkPreview ? "whitespace-nowrap" : "break-words"}`}
      >
        {linkPreview && <LinkPreviewEmbed preview={linkPreview} />}
        {message && (
          <div 
            className={linkPreview ? "p-2" : ""} 
            style={{ 
              fontSize: "var(--cell-font-size)",
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              lineHeight: "1.1"
            }}
          >
            {message}
          </div>
        )}
        {children}
      </div>
      {showArrow && (
        <svg
          className={`absolute ${isMe ? "-bottom-[0px] -right-[7px]" : "-bottom-[0px] -left-[7px]"} w-[14px] h-[12px]`}
          viewBox="336.817 134.6523 18.359 15.0817"
          fill={isMe ? "#1888FE" : "#3b3b3d"}
          style={{
            transform: isMe ? "scaleX(-1) scaleY(-1)" : "scaleY(-1)",
          }}
        >
          <path d="M 336.817 134.994 C 345.919 133.339 352.849 138.097 355.176 140.683 L 354.918 148.441 C 352.418 147.924 347.005 147.458 345.35 149.734 C 345.609 140.425 338.627 135.77 336.817 134.994 Z" />
        </svg>
      )}
    </div>
  )
}