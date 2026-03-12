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
  Highlight,
} from "../../shared/components";
import { colors, shadows } from "../../shared/theme";

export const LLM_GRUNDLAGEN_SLIDE_COUNT = 6;

/* ─── SLIDE 1: COVER ─────────────────────────────── */

const CoverSlide: React.FC = () => (
  <Slide
    style={{
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      padding: 64,
    }}
  >
    <div style={{ position: "absolute", top: 52, left: 64, right: 64 }}>
      <AccentLine direction="center" />
    </div>

    <Label style={{ marginBottom: 8 }}>
      DUSTIN WALKER &nbsp;|&nbsp; GEN AI ENGINEER
    </Label>

    <Avatar size={260} glowIntensity="strong" />

    <ContentBox
      variant="inset"
      style={{
        padding: "10px 32px",
        borderRadius: 40,
        marginTop: 4,
      }}
    >
      <Label style={{ fontSize: 18, opacity: 0.6, letterSpacing: 2 }}>
        NEUE SERIE
      </Label>
    </ContentBox>

    <div style={{ textAlign: "center", marginTop: 4 }}>
      <Headline size="xl">LLM</Headline>
      <Headline size="xl">GRUNDLAGEN</Headline>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
      >
        <AccentLine width={200} direction="center" />
      </div>
    </div>

    <Subhead style={{ textAlign: "center", maxWidth: 700, marginTop: 4 }}>
      Wo stehen LLMs in der
      <br />
      KI-Landschaft?
    </Subhead>

    <div style={{ position: "absolute", bottom: 48 }}>
      <SwipeHint />
    </div>
  </Slide>
);

/* ─── SLIDE 2: PROBLEM ───────────────────────────── */

const ProblemSlide: React.FC = () => (
  <SlideLayout
    slideNumber={2}
    totalSlides={LLM_GRUNDLAGEN_SLIDE_COUNT}
    watermark="02"
    style={{ display: "block" }}
  >
    <Headline size="md" style={{ marginBottom: 44 }}>
      DAS PROBLEM
    </Headline>

    <ContentBox
      variant="raisedStrong"
      style={{
        textAlign: "center",
        padding: "52px 48px",
        marginBottom: 48,
      }}
    >
      <Body size="lg" style={{ fontSize: 38, lineHeight: 1.5 }}>
        <Highlight>&ldquo;KI&rdquo;</Highlight>,{" "}
        <Highlight>&ldquo;Machine Learning&rdquo;</Highlight>,
        <br />
        <Highlight>&ldquo;Generative AI&rdquo;</Highlight> und{" "}
        <Highlight>&ldquo;LLM&rdquo;</Highlight>
      </Body>
      <Body
        size="lg"
        style={{ marginTop: 24, fontSize: 36, lineHeight: 1.4 }}
      >
        werden st&auml;ndig
        <br />
        durcheinandergeworfen.
      </Body>
    </ContentBox>

    <ContentBox
      variant="flat"
      accentBorder="left"
      style={{
        backgroundColor: "transparent",
        padding: "8px 0 8px 28px",
        borderRadius: 0,
        marginBottom: 48,
      }}
    >
      <Body size="lg" style={{ lineHeight: 1.6, opacity: 0.85 }}>
        Ich sehe das als GenAI Engineer
        <br />
        jede Woche &ndash; in Kundenmeetings
        <br />
        genauso wie in internen Diskussionen.
      </Body>
    </ContentBox>

    <ContentBox
      variant="inset"
      style={{
        padding: "32px 40px",
        textAlign: "center",
      }}
    >
      <Body size="lg" style={{ fontWeight: 500, lineHeight: 1.5 }}>
        Falsche Begriffe f&uuml;hren zu
        <br />
        <Highlight>falschen Entscheidungen.</Highlight>
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 3: HIERARCHY ─────────────────────────── */

const HierarchySlide: React.FC = () => {
  const layers = [
    { label: "KÜNSTLICHE INTELLIGENZ", desc: "seit den 1950ern", width: 920, height: 180 },
    { label: "MACHINE LEARNING", desc: "seit den 1980ern", width: 760, height: 165 },
    { label: "DEEP LEARNING", desc: "Durchbruch ~2012", width: 600, height: 150 },
    { label: "GENERATIVE KI", desc: "ab ~2017", width: 440, height: 140 },
    { label: "LLMs", desc: "GPT, Claude, Gemini ...", width: 290, height: 130 },
  ];

  return (
    <SlideLayout
      slideNumber={3}
      totalSlides={LLM_GRUNDLAGEN_SLIDE_COUNT}
      watermark="03"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Headline size="md" style={{ marginBottom: 20, alignSelf: "flex-start" }}>
        DIE KI-HIERARCHIE
      </Headline>

      <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 24, alignSelf: "flex-start" }}>
        Verschachtelte Ebenen &ndash; jede baut auf
        <br />
        der vorherigen auf.
      </Subhead>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          flex: 1,
          justifyContent: "center",
          width: "100%",
        }}
      >
        {layers.map((layer, i) => {
          const isLast = i === layers.length - 1;
          return (
            <div
              key={i}
              style={{
                width: layer.width,
                height: layer.height,
                borderRadius: 20,
                background: isLast
                  ? `linear-gradient(135deg, ${colors.accent}, #d4684f)`
                  : colors.container,
                boxShadow: isLast
                  ? `${shadows.raisedStrong}, 0 0 30px rgba(192,86,64,0.3)`
                  : shadows.raised,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: i === 0 ? 0 : -20,
                zIndex: i + 1,
                border: isLast
                  ? "none"
                  : `1px solid rgba(240,247,248,0.08)`,
              }}
            >
              <Headline
                size="sm"
                style={{
                  fontSize: isLast ? 34 : 24,
                  letterSpacing: 1.5,
                }}
              >
                {layer.label}
              </Headline>
              <Label
                style={{
                  fontSize: 16,
                  marginTop: 6,
                  opacity: isLast ? 0.9 : 0.5,
                }}
              >
                {layer.desc}
              </Label>
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
};

/* ─── SLIDE 4: WHY IT MATTERS ────────────────────── */

const WhyItMattersSlide: React.FC = () => {
  const examples = [
    {
      num: "01",
      title: 'Kunde will „KI einsetzen"',
      body: "... und meint eigentlich einen Chatbot. Das ist ein LLM-Anwendungsfall, kein allgemeines KI-Projekt.",
    },
    {
      num: "02",
      title: "GenAI für Klassifikation",
      body: "Ein Team will Generative AI für ein Klassifikationsproblem nutzen. Klassisches ML wäre günstiger und besser.",
    },
  ];

  return (
    <SlideLayout
      slideNumber={4}
      totalSlides={LLM_GRUNDLAGEN_SLIDE_COUNT}
      watermark="04"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 16 }}>
        WARUM DAS
        <br />
        WICHTIG IST
      </Headline>

      <Subhead style={{ fontSize: 28, marginBottom: 44, opacity: 0.7 }}>
        Zwei Beispiele aus meinem Alltag:
      </Subhead>

      <div
        style={{ display: "flex", flexDirection: "column", gap: 32 }}
      >
        {examples.map((ex) => (
          <ContentBox
            key={ex.num}
            variant="raised"
            accentBorder="left"
            style={{
              padding: "36px 40px",
              display: "flex",
              alignItems: "flex-start",
              gap: 24,
            }}
          >
            <Badge style={{ flexShrink: 0, marginTop: 4 }}>{ex.num}</Badge>
            <div>
              <Headline
                size="sm"
                style={{ marginBottom: 12, letterSpacing: 0.5, lineHeight: 1.3 }}
              >
                {ex.title}
              </Headline>
              <Body size="md" opacity={0.75} style={{ lineHeight: 1.55 }}>
                {ex.body}
              </Body>
            </div>
          </ContentBox>
        ))}
      </div>

      <ContentBox
        variant="inset"
        style={{
          marginTop: 44,
          padding: "28px 36px",
          textAlign: "center",
        }}
      >
        <Body size="lg" style={{ fontWeight: 500, lineHeight: 1.5 }}>
          Ohne Begriffsklarheit werden
          <br />
          <Highlight>falsche Technologie-Entscheidungen</Highlight> getroffen.
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 5: TIMELINE ──────────────────────────── */

const TimelineSlide: React.FC = () => {
  const eras = [
    { year: "1950er", label: "Künstliche Intelligenz", desc: "Regelbasierte Expertensysteme" },
    { year: "1980er", label: "Machine Learning", desc: "Algorithmen lernen aus Daten" },
    { year: "~2012", label: "Deep Learning", desc: "Neuronale Netze mit vielen Schichten" },
    { year: "~2017", label: "Transformer", desc: '"Attention is All You Need"' },
    { year: "2022", label: "ChatGPT Launch", desc: "100 Mio. Nutzer in 2 Monaten" },
  ];

  return (
    <SlideLayout
      slideNumber={5}
      totalSlides={LLM_GRUNDLAGEN_SLIDE_COUNT}
      watermark="05"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 12 }}>
        ZEITLICHE EINORDNUNG
      </Headline>
      <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 36 }}>
        KI ist alt. LLMs sind brandneu.
      </Subhead>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {eras.map((era, i) => {
          const isLast = i === eras.length - 1;
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 20,
              }}
            >
              {/* Timeline bar */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 40,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: isLast ? colors.accent : colors.container,
                    border: `3px solid ${isLast ? colors.accent : "rgba(240,247,248,0.3)"}`,
                    boxShadow: isLast ? `0 0 16px rgba(192,86,64,0.5)` : "none",
                    zIndex: 1,
                  }}
                />
                {i < eras.length - 1 && (
                  <div
                    style={{
                      width: 3,
                      flex: 1,
                      background: `linear-gradient(to bottom, rgba(240,247,248,0.2), rgba(240,247,248,0.08))`,
                      minHeight: 60,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: isLast ? 0 : 20, flex: 1 }}>
                <Label style={{ fontSize: 18, color: isLast ? colors.accent : colors.textMuted }}>
                  {era.year}
                </Label>
                <Headline
                  size="sm"
                  style={{
                    fontSize: 26,
                    marginTop: 4,
                    color: isLast ? colors.accent : colors.text,
                  }}
                >
                  {era.label}
                </Headline>
                <Body size="sm" opacity={0.6} style={{ marginTop: 2 }}>
                  {era.desc}
                </Body>
              </div>
            </div>
          );
        })}
      </div>

      <ContentBox
        variant="raisedStrong"
        style={{
          marginTop: 32,
          padding: "28px 36px",
          textAlign: "center",
        }}
      >
        <Body size="md" style={{ lineHeight: 1.5 }}>
          KI: <Highlight>~70 Jahre</Highlight> alt.
          <br />
          LLMs: <Highlight>~3 Jahre</Highlight> alt.
          <br />
          <span style={{ opacity: 0.7 }}>Wir stehen am Anfang.</span>
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 6: CTA ───────────────────────────────── */

const CtaSlide: React.FC = () => (
  <Slide style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
    <div
      style={{
        position: "absolute",
        top: "20%",
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

    <Avatar size={240} glowIntensity="strong" />

    <Headline size="lg" style={{ textAlign: "center", marginTop: 8 }}>
      DUSTIN WALKER
    </Headline>

    <Label style={{ textAlign: "center", fontSize: 22, opacity: 0.55 }}>
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
        padding: "32px 48px",
        marginTop: 8,
        zIndex: 1,
      }}
    >
      <Label style={{ fontSize: 16, opacity: 0.5, marginBottom: 12 }}>
        N&Auml;CHSTE THEMEN
      </Label>
      <Body size="md" style={{ lineHeight: 1.6 }}>
        LLMs im Detail &bull; Tokens
        <br />
        Multimodalit&auml;t &bull; RAG
      </Body>
    </ContentBox>

    <Subhead style={{ textAlign: "center", marginTop: 12, fontSize: 28 }}>
      Folge mir f&uuml;r die ganze Serie.
    </Subhead>

    <Button style={{ marginTop: 16, zIndex: 1 }}>VERNETZEN &rarr;</Button>
  </Slide>
);

/* ─── COMPOSITION ────────────────────────────────── */

export const LlmGrundlagenCarousel: React.FC = () => {
  const frame = useCurrentFrame();

  const slides = [
    <CoverSlide key="cover" />,
    <ProblemSlide key="problem" />,
    <HierarchySlide key="hierarchy" />,
    <WhyItMattersSlide key="why" />,
    <TimelineSlide key="timeline" />,
    <CtaSlide key="cta" />,
  ];

  return slides[frame] ?? null;
};
