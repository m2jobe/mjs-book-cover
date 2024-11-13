// components/BookPreviewCard.tsx
import React from "react";
import { Card } from "@nextui-org/react";
import { RotateCcw } from "lucide-react";

interface BookPreviewCardProps {
  title: string;
  subtitle: string;
  author: string;
  blurb: string;
  isFlipped: boolean;
  selectedStyle: any;
  aspectRatio: string;
  isTransitioning: boolean;
  getPositionClasses: () => string;
}

const BookPreviewCard: React.FC<BookPreviewCardProps> = ({
  title,
  subtitle,
  author,
  blurb,
  isFlipped,
  selectedStyle,
  aspectRatio,
  isTransitioning,
  getPositionClasses,
}) => (
  <Card className="bg-white dark:bg-black border-4 border-black dark:border-white p-8 flex items-center justify-center min-h-[700px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
    <div className="perspective-1000 w-full">
      <div
        className={`
          relative w-full max-w-[800px] mx-auto
          transition-all duration-600 ease-in-out
          ${isTransitioning ? "scale-95" : "scale-100"}
        `}
        style={{ aspectRatio }}
      >
        <div
          className={`
            absolute w-full h-full
            transform-style-preserve-3d transition-transform duration-600
            ${isFlipped ? "rotate-y-180" : "rotate-y-0"}
          `}
        >
          {/* Front Cover */}
          <div
            className={`
              absolute w-full h-full backface-hidden
              border-8 border-black dark:border-white
              shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]
              overflow-hidden
              ${selectedStyle.gradient}
              flex flex-col ${getPositionClasses()}
            `}
          >
            <div className="space-y-8 z-10">
              <h2
                className={`text-5xl ${selectedStyle.titleFont} text-black leading-tight`}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className={`text-2xl ${selectedStyle.subtitleFont} text-black/80`}
                >
                  {subtitle}
                </p>
              )}
              <p className="text-3xl text-black mt-auto font-bold">{author}</p>
            </div>
          </div>

          {/* Back Cover */}
          <div
            className={`
              absolute w-full h-full backface-hidden
              border-8 border-black dark:border-white
              shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]
              overflow-hidden
              ${selectedStyle.gradient}
              flex flex-col p-8 rotate-y-180
            `}
          >
            <div className="bg-white/90 dark:bg-black/90 border-4 border-black dark:border-white p-6 rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <p
                className={`text-xl ${selectedStyle.subtitleFont} leading-relaxed text-black dark:text-white`}
              >
                {blurb}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
);

export default BookPreviewCard;
