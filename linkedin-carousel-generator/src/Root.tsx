import React from "react";
import { Composition } from "remotion";
import { SLIDE_WIDTH, SLIDE_HEIGHT } from "./shared/theme";
import { ExampleCarousel, EXAMPLE_SLIDE_COUNT } from "./carousels/example/Carousel";
import { LlmGrundlagenCarousel, LLM_GRUNDLAGEN_SLIDE_COUNT } from "./carousels/llm-grundlagen/Carousel";
import { HowLlmsWorkCarousel, HOW_LLMS_WORK_SLIDE_COUNT } from "./carousels/how-llms-work/Carousel";
import { WhatAreTokensCarousel, WHAT_ARE_TOKENS_SLIDE_COUNT } from "./carousels/what-are-tokens/Carousel";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="example"
        component={ExampleCarousel}
        durationInFrames={EXAMPLE_SLIDE_COUNT}
        fps={1}
        width={SLIDE_WIDTH}
        height={SLIDE_HEIGHT}
      />
      <Composition
        id="llm-grundlagen"
        component={LlmGrundlagenCarousel}
        durationInFrames={LLM_GRUNDLAGEN_SLIDE_COUNT}
        fps={1}
        width={SLIDE_WIDTH}
        height={SLIDE_HEIGHT}
      />
      <Composition
        id="how-llms-work"
        component={HowLlmsWorkCarousel}
        durationInFrames={HOW_LLMS_WORK_SLIDE_COUNT}
        fps={1}
        width={SLIDE_WIDTH}
        height={SLIDE_HEIGHT}
      />
      <Composition
        id="what-are-tokens"
        component={WhatAreTokensCarousel}
        durationInFrames={WHAT_ARE_TOKENS_SLIDE_COUNT}
        fps={1}
        width={SLIDE_WIDTH}
        height={SLIDE_HEIGHT}
      />
    </>
  );
};
