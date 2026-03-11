import React from "react";
import { useCurrentFrame } from "remotion";
import {
  Slide,
  ContentBox,
  SwipeHint,
  AccentLine,
  Avatar,
  Headline,
  Subhead,
  Body,
  Label,
  Button,
  Badge,
  SlideLayout,
} from "../../shared/components";
import { colors } from "../../shared/theme";

export const EXAMPLE_SLIDE_COUNT = 4;

/* ─── SLIDE 1: COVER ─────────────────────────────── */

const CoverSlide: React.FC = () => (
  <Slide
    style={{
      alignItems: "center",
      justifyContent: "center",
      gap: 28,
      padding: 64,
    }}
  >
    {/* Top accent line */}
    <div style={{ position: "absolute", top: 52, left: 64, right: 64 }}>
      <AccentLine direction="center" />
    </div>

    {/* Top label */}
    <Label style={{ marginBottom: 12 }}>
      DUSTIN WALKER &nbsp;|&nbsp; GEN AI ENGINEER
    </Label>

    <Avatar size={300} glowIntensity="strong" />

    {/* Title block */}
    <div style={{ textAlign: "center", marginTop: 8 }}>
      <Headline size="xl">GEN AI</Headline>
      <Headline size="xl">ENGINEERING</Headline>
      {/* Accent underline centered below title */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
      >
        <AccentLine width={200} direction="center" />
      </div>
    </div>

    {/* Subtitle */}
    <Subhead style={{ textAlign: "center", maxWidth: 680, marginTop: 4 }}>
      Wie man AI-Projekte
      <br />
      wirklich skaliert.
    </Subhead>

    {/* Tagline in inset pill */}
    <ContentBox
      variant="inset"
      style={{
        padding: "14px 36px",
        borderRadius: 40,
        marginTop: 8,
      }}
    >
      <Label style={{ fontSize: 18, opacity: 0.65, letterSpacing: 1 }}>
        Kein Hype. Nur echte Engineering-Praxis.
      </Label>
    </ContentBox>

    {/* Swipe hint at bottom */}
    <div style={{ position: "absolute", bottom: 48 }}>
      <SwipeHint />
    </div>
  </Slide>
);

/* ─── SLIDE 2: PROBLEM ───────────────────────────── */

const ProblemSlide: React.FC = () => (
  <SlideLayout
    slideNumber={2}
    totalSlides={EXAMPLE_SLIDE_COUNT}
    watermark="02"
    style={{ display: "block" }} // Override flex layout from Slide
  >
    {/* Explicit header since we use block layout */}
    <Headline size="lg" style={{ marginBottom: 48 }}>
      DIE REALITÄT
    </Headline>

    {/* Hero stat card */}
    <ContentBox
      variant="raisedStrong"
      style={{
        textAlign: "center",
        padding: "56px 48px",
        marginBottom: 44,
      }}
    >
      <Headline
        size="xl"
        color={colors.accent}
        style={{
          fontSize: 140,
          lineHeight: 1,
          textShadow: `0 0 30px rgba(192,86,64,0.4), 0 0 60px rgba(192,86,64,0.15)`,
        }}
      >
        80%
      </Headline>
      <Body size="lg" style={{ marginTop: 20 }}>
        der PoCs schaffen es
        <br />
        nie in Produktion.
      </Body>
    </ContentBox>

    {/* Explanation with accent left border */}
    <ContentBox
      variant="flat"
      accentBorder="left"
      style={{
        backgroundColor: "transparent",
        padding: "4px 0 4px 28px",
        borderRadius: 0,
      }}
    >
      <Subhead style={{ fontSize: 30 }}>
        Warum? Weil die Infrastruktur fehlt.
        <br />
        Teams bauen <span style={{ opacity: 1, fontWeight: 400 }}>Demos</span>,
        keine <span style={{ opacity: 1, fontWeight: 400 }}>Systeme</span>.
      </Subhead>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 3: SOLUTION ──────────────────────────── */

const SolutionSlide: React.FC = () => {
  const items = [
    {
      label: "MLOps von Tag 1",
      sub: "Reproduzierbare Pipelines von Anfang an.",
    },
    { label: "API-first Design", sub: "Jedes Modell als Service denken." },
    { label: "Monitoring & Eval", sub: "Qualität messen, nicht hoffen." },
    { label: "Iterative Releases", sub: "Kleine Schritte, schnelles Feedback." },
  ];

  return (
    <SlideLayout
      slideNumber={3}
      totalSlides={EXAMPLE_SLIDE_COUNT}
      watermark="03"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 44 }}>
        WAS ERFOLGREICHE
        <br />
        TEAMS ANDERS MACHEN
      </Headline>

      <div
        style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}
      >
        {items.map((item, i) => (
          <ContentBox
            key={i}
            variant="raised"
            style={{
              padding: "28px 36px",
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
          >
            {/* Number badge */}
            <Badge>{String(i + 1).padStart(2, "0")}</Badge>
            <div>
              <Headline size="sm" style={{ marginBottom: 4, letterSpacing: 1 }}>
                {item.label}
              </Headline>
              <Body size="sm" opacity={0.6}>
                {item.sub}
              </Body>
            </div>
          </ContentBox>
        ))}
      </div>
    </SlideLayout>
  );
};

/* ─── SLIDE 4: CTA ───────────────────────────────── */

const CtaSlide: React.FC = () => (
  <Slide style={{ alignItems: "center", justifyContent: "center", gap: 24 }}>
    {/* Large background glow behind portrait */}
    <div
      style={{
        position: "absolute",
        top: "22%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(192,86,64,0.1) 0%, rgba(17,101,120,0.05) 40%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />

    <Avatar size={260} glowIntensity="strong" />

    <Headline size="lg" style={{ textAlign: "center", marginTop: 8 }}>
      DUSTIN WALKER
    </Headline>

    <Label style={{ textAlign: "center", fontSize: 24, opacity: 0.55 }}>
      Gen AI Engineer @ Alexander Thamm
    </Label>

    <div style={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
      <AccentLine width={120} direction="center" />
    </div>

    <ContentBox
      variant="raised"
      accentBorder="top"
      style={{
        textAlign: "center",
        padding: "36px 56px",
        marginTop: 12,
        zIndex: 1,
      }}
    >
      <Body size="md" style={{ fontSize: 30 }}>
        Folge mir für mehr Insights
        <br />
        aus echten AI-Projekten.
      </Body>
    </ContentBox>

    <Button style={{ marginTop: 20, zIndex: 1 }}>VERNETZEN &rarr;</Button>
  </Slide>
);

/* ─── COMPOSITION ────────────────────────────────── */

export const ExampleCarousel: React.FC = () => {
  const frame = useCurrentFrame();

  const slides = [
    <CoverSlide key="cover" />,
    <ProblemSlide key="problem" />,
    <SolutionSlide key="solution" />,
    <CtaSlide key="cta" />,
  ];

  return slides[frame] ?? null;
};
