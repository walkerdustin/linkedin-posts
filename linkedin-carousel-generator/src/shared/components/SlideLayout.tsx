import React from "react";
import { Slide, SlideHeader, PageIndicator, Watermark } from ".";

type SlideLayoutProps = {
  children: React.ReactNode;
  title?: string; // Optional header title override
  slideNumber?: number; // Current slide index (1-based)
  totalSlides?: number; // Total slides count
  header?: boolean; // Show standard header?
  footer?: boolean; // Show page indicator?
  watermark?: string; // Watermark text (e.g. "02")
  style?: React.CSSProperties;
};

export const SlideLayout: React.FC<SlideLayoutProps> = ({
  children,
  title,
  slideNumber,
  totalSlides,
  header = true,
  footer = true,
  watermark,
  style,
}) => {
  return (
    <Slide style={{ ...style }}>
      {/* Layer 0: Watermark (Background) */}
      {watermark && (
        <Watermark
          number={watermark}
          style={{ zIndex: 0 }} // Explicitly lower
        />
      )}

      {/* Layer 1: Content Structure */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          zIndex: 1, // Content above watermark
        }}
      >
        {header && <SlideHeader name={title ? title : undefined} />}

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          {children}
        </div>

        {footer && slideNumber && totalSlides && (
          <PageIndicator current={slideNumber} total={totalSlides} />
        )}
      </div>
    </Slide>
  );
};
