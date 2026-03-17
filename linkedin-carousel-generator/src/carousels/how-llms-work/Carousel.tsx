import React from "react";
import { useCurrentFrame } from "remotion";
import { Img, staticFile } from "remotion";
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

export const HOW_LLMS_WORK_SLIDE_COUNT = 6;

/* ─── SLIDE 1: COVER ─────────────────────────────── */

const CoverSlide: React.FC = () => (
  <Slide
    style={{
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 0,
      padding: "48px 48px 48px 48px",
    }}
  >
    <div style={{ position: "absolute", top: 44, left: 48, right: 48 }}>
      <AccentLine direction="center" />
    </div>

    <Label style={{ marginTop: 16, marginBottom: 12 }}>
      LLM GRUNDLAGEN &nbsp;|&nbsp; TEIL 2
    </Label>

    {/* Image with speech bubble overlay */}
    <div
      style={{
        position: "relative",
        width: 920,
        height: 600,
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: shadows.raisedStrong,
        border: `1px solid rgba(240,247,248,0.08)`,
        flexShrink: 0,
      }}
    >
      <Img
        src={staticFile("bild_paar_am_essenstisch.png")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      {/* Speech bubble - pointing at her mouth */}
      <div
        style={{
          position: "absolute",
          left: 28,
          top: 48,
          background: colors.text,
          borderRadius: 18,
          border: `2.5px solid ${colors.accent}`,
          padding: "22px 28px",
          maxWidth: 300,
          boxShadow: `0 8px 32px rgba(0,0,0,0.5)`,
        }}
      >
        <div
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: 30,
            fontWeight: 500,
            color: colors.primaryDark,
            lineHeight: 1.35,
          }}
        >
          <span style={{ color: colors.accent, fontWeight: 700 }}>Schatz</span>
          , gibst
          <br />
          du mir das
          <br />
          <span
            style={{
              color: colors.accent,
              fontWeight: 700,
              fontSize: 36,
              letterSpacing: 4,
            }}
          >
            ____
          </span>
          ?
        </div>

        {/* Bubble tail pointing down-right toward her mouth */}
        <div
          style={{
            position: "absolute",
            bottom: -18,
            right: 40,
            width: 0,
            height: 0,
            borderLeft: "16px solid transparent",
            borderRight: "16px solid transparent",
            borderTop: `18px solid ${colors.accent}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -14,
            right: 42,
            width: 0,
            height: 0,
            borderLeft: "14px solid transparent",
            borderRight: "14px solid transparent",
            borderTop: `16px solid ${colors.text}`,
          }}
        />
      </div>
    </div>

    {/* Headline below image */}
    <div style={{ textAlign: "center", marginTop: 28 }}>
      <Headline size="lg" style={{ fontSize: 52 }}>
        WAS W&Uuml;RDEST DU HIER
      </Headline>
      <Headline size="lg" style={{ fontSize: 52 }}>
        ALS N&Auml;CHSTES{" "}
        <span style={{ color: colors.accent }}>VORHERSAGEN</span>?
      </Headline>
    </div>

    <ContentBox
      variant="inset"
      style={{
        padding: "12px 32px",
        borderRadius: 40,
        marginTop: 16,
      }}
    >
      <Label style={{ fontSize: 17, opacity: 0.6, letterSpacing: 1.5 }}>
        &Uuml;BER 200 PERSONEN &nbsp;&bull;&nbsp; CA. 20 SCHULUNGEN
      </Label>
    </ContentBox>

    <div style={{ position: "absolute", bottom: 44 }}>
      <SwipeHint />
    </div>
  </Slide>
);

/* ─── SLIDE 2: THE REVEAL ────────────────────────── */

const RevealSlide: React.FC = () => (
  <SlideLayout
    slideNumber={2}
    totalSlides={HOW_LLMS_WORK_SLIDE_COUNT}
    watermark="02"
    style={{ display: "block" }}
  >
    <Headline size="md" style={{ marginBottom: 44 }}>
      DIE ANTWORT?
    </Headline>

    <ContentBox
      variant="raisedStrong"
      style={{
        textAlign: "center",
        padding: "56px 48px",
        marginBottom: 40,
      }}
    >
      <Headline
        size="xl"
        color={colors.accent}
        style={{
          fontSize: 160,
          lineHeight: 1,
          textShadow: `0 0 40px rgba(192,86,64,0.4), 0 0 80px rgba(192,86,64,0.15)`,
        }}
      >
        &ldquo;SALZ&rdquo;
      </Headline>
      <Body size="lg" style={{ marginTop: 28, fontSize: 34 }}>
        Jedes. Einzelne. Mal.
      </Body>
    </ContentBox>

    <ContentBox
      variant="flat"
      accentBorder="left"
      style={{
        backgroundColor: "transparent",
        padding: "8px 0 8px 28px",
        borderRadius: 0,
        marginBottom: 40,
      }}
    >
      <Body size="lg" style={{ lineHeight: 1.6, opacity: 0.85, fontSize: 30 }}>
        Fast alle sagen gleichzeitig &ldquo;Salz&rdquo;,
        <br />
        ohne sich abzusprechen.
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
        Keine Magie. Nur <Highlight>Kontext</Highlight>.
        <br />
        Und genau so funktioniert ein <Highlight>LLM</Highlight>.
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 3: THE LOOP ──────────────────────────── */

const LoopSlide: React.FC = () => {
  const stepSize = 56;
  const steps = [
    { num: "1", text: "Nimm den bisherigen Text als Kontext" },
    { num: "2", text: "Berechne Wahrscheinlichkeit für jedes der ~200.000 Wörter" },
    { num: "3", text: "Wähle das wahrscheinlichste Wort aus" },
    { num: "4", text: "Hänge es an den Kontext an" },
  ];

  return (
    <SlideLayout
      slideNumber={3}
      totalSlides={HOW_LLMS_WORK_SLIDE_COUNT}
      watermark="03"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 12 }}>
        DIE VORHERSAGE-
        <br />
        SCHLEIFE
      </Headline>

      <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 36 }}>
        So erzeugt ein LLM jede Antwort.
        <br />
        Wort f&uuml;r Wort.
      </Subhead>

      {/* Loop visualization */}
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            {/* Step number circle */}
            <div
              style={{
                width: stepSize,
                height: stepSize,
                borderRadius: "50%",
                background:
                  i === 2
                    ? `linear-gradient(135deg, ${colors.accent}, #d4684f)`
                    : colors.container,
                boxShadow: i === 2 ? shadows.raisedStrong : shadows.raised,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border:
                  i === 2
                    ? "none"
                    : `1px solid rgba(240,247,248,0.08)`,
              }}
            >
              <Headline
                size="sm"
                style={{ fontSize: 24, letterSpacing: 0 }}
              >
                {step.num}
              </Headline>
            </div>

            {/* Step content */}
            <ContentBox
              variant={i === 2 ? "raisedStrong" : "raised"}
              style={{
                padding: "20px 28px",
                flex: 1,
              }}
            >
              <Body
                size="md"
                style={{
                  fontSize: 26,
                  lineHeight: 1.4,
                  fontWeight: i === 2 ? 500 : 400,
                }}
              >
                {step.text}
              </Body>
            </ContentBox>
          </div>
        ))}

        {/* Loop arrow back to top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <ContentBox
            variant="inset"
            style={{
              padding: "16px 36px",
              borderRadius: 40,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{
                fontSize: 28,
                color: colors.accent,
                fontWeight: 700,
              }}
            >
              &#x21BB;
            </span>
            <Label style={{ fontSize: 18, opacity: 0.7 }}>
              WIEDERHOLE BIS ANTWORT FERTIG
            </Label>
          </ContentBox>
        </div>
      </div>

      <ContentBox
        variant="raisedStrong"
        style={{
          padding: "32px 36px",
          marginTop: 32,
          textAlign: "center",
        }}
      >
        <Body size="lg" style={{ fontWeight: 500, lineHeight: 1.5 }}>
          Jede ChatGPT-Antwort, die dich
          <br />
          je beeindruckt hat, wurde
          <br />
          <Highlight>genau so</Highlight> erzeugt.
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 4: VOCABULARY EXAMPLE ────────────────── */

const VocabularySlide: React.FC = () => {
  const vocabItems = [
    {
      word: "Salz",
      prob: 0.72,
      note: "Grammatik \u2713  Kontext \u2713  Bild \u2713",
      highlight: true,
    },
    {
      word: "Kr\u00e4uterbaguette",
      prob: 0.03,
      note: "Passt zum Essen, aber nicht zum Bild",
      highlight: false,
    },
    {
      word: "Senf",
      prob: 0.0,
      note: 'Grammatisch falsch \u2014 "der Senf", nicht "das"',
      highlight: false,
    },
    {
      word: "Atom-U-Boot",
      prob: 0.0,
      note: "Grammatisch korrekt, aber absurd",
      highlight: false,
    },
  ];

  const maxBarWidth = 520;

  return (
    <SlideLayout
      slideNumber={4}
      totalSlides={HOW_LLMS_WORK_SLIDE_COUNT}
      watermark="04"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 8 }}>
        DAS VOKABULAR
      </Headline>
      <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 32 }}>
        ~200.000 W&ouml;rter. F&uuml;r jedes berechnet
        <br />
        das LLM eine Wahrscheinlichkeit.
      </Subhead>

      {/* Context display */}
      <ContentBox
        variant="inset"
        style={{
          padding: "16px 28px",
          marginBottom: 32,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Label style={{ fontSize: 16, opacity: 0.5, flexShrink: 0 }}>
          KONTEXT
        </Label>
        <Body size="md" style={{ fontSize: 24 }}>
          &ldquo;Schatz, gibst du mir das ____?&rdquo;
        </Body>
      </ContentBox>

      {/* Probability bars */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {vocabItems.map((item, i) => (
          <ContentBox
            key={i}
            variant={item.highlight ? "raisedStrong" : "raised"}
            accentBorder={item.highlight ? "left" : "none"}
            style={{
              padding: "20px 28px",
            }}
          >
            {/* Word + probability row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <Headline
                size="sm"
                style={{
                  fontSize: 28,
                  color: item.highlight ? colors.accent : colors.text,
                }}
              >
                {item.word}
              </Headline>
              <Headline
                size="sm"
                style={{
                  fontSize: 28,
                  color: item.highlight ? colors.accent : colors.textMuted,
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {item.prob.toFixed(2)}
              </Headline>
            </div>

            {/* Probability bar */}
            <div
              style={{
                width: "100%",
                height: 8,
                borderRadius: 4,
                background: "rgba(0,0,0,0.3)",
                overflow: "hidden",
                marginBottom: 8,
              }}
            >
              <div
                style={{
                  width: item.prob > 0 ? Math.max(item.prob * maxBarWidth / maxBarWidth * 100, 1) + "%" : "0%",
                  height: "100%",
                  borderRadius: 4,
                  background: item.highlight
                    ? `linear-gradient(90deg, ${colors.accent}, #d4684f)`
                    : `linear-gradient(90deg, rgba(240,247,248,0.3), rgba(240,247,248,0.15))`,
                  boxShadow: item.highlight
                    ? `0 0 12px rgba(192,86,64,0.4)`
                    : "none",
                }}
              />
            </div>

            {/* Note */}
            <Body
              size="sm"
              opacity={0.55}
              style={{ fontSize: 20, lineHeight: 1.3 }}
            >
              {item.note}
            </Body>
          </ContentBox>
        ))}
      </div>

      {/* Ellipsis hint */}
      <div
        style={{
          textAlign: "center",
          marginTop: 14,
        }}
      >
        <Label style={{ fontSize: 18, opacity: 0.4 }}>
          ... UND ~199.996 WEITERE W&Ouml;RTER
        </Label>
      </div>
    </SlideLayout>
  );
};

/* ─── SLIDE 5: WELTWISSEN ────────────────────────── */

const WeltwissenSlide: React.FC = () => (
  <SlideLayout
    slideNumber={5}
    totalSlides={HOW_LLMS_WORK_SLIDE_COUNT}
    watermark="05"
    style={{ display: "block" }}
  >
    <Headline size="md" style={{ marginBottom: 40 }}>
      WELTWISSEN DURCH
      <br />
      VORHERSAGE DES
      <br />
      N&Auml;CHSTEN WORTES
    </Headline>

    <ContentBox
      variant="raisedStrong"
      style={{
        padding: "44px 40px",
        marginBottom: 36,
        textAlign: "center",
      }}
    >
      <Body
        size="lg"
        style={{ fontSize: 32, lineHeight: 1.6 }}
      >
        Um <Highlight>&ldquo;Salz&rdquo;</Highlight> vorherzusagen,
        <br />
        muss das Modell implizit
        <br />
        gelernt haben:
      </Body>
    </ContentBox>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      {[
        { label: "Grammatik", desc: '"das" verlangt ein Neutrum' },
        { label: "Alltagswissen", desc: "Menschen reichen sich beim Essen Salz" },
        { label: "Kontext", desc: "Salzstreuer steht auf dem Tisch" },
        { label: "Konventionen", desc: '"Schatz" = vertraute Anrede beim Essen' },
      ].map((item, i) => (
        <ContentBox
          key={i}
          variant="raised"
          style={{
            padding: "22px 32px",
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Badge style={{ flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</Badge>
          <div>
            <Headline size="sm" style={{ fontSize: 24, marginBottom: 4 }}>
              {item.label}
            </Headline>
            <Body size="sm" opacity={0.65} style={{ fontSize: 22 }}>
              {item.desc}
            </Body>
          </div>
        </ContentBox>
      ))}
    </div>

    <ContentBox
      variant="inset"
      style={{
        marginTop: 28,
        padding: "24px 32px",
        textAlign: "center",
      }}
    >
      <Body size="md" style={{ fontWeight: 500, lineHeight: 1.5, fontSize: 24 }}>
        Niemand hat das einprogrammiert.
        <br />
        Es entstand <Highlight>als Nebenprodukt</Highlight> der Vorhersage.
      </Body>
    </ContentBox>
  </SlideLayout>
);

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
        N&Auml;CHSTES THEMA
      </Label>
      <Body size="md" style={{ lineHeight: 1.6 }}>
        Was sind <Highlight>Tokens</Highlight>?
        <br />
        Warum arbeiten LLMs nicht mit W&ouml;rtern?
      </Body>
    </ContentBox>

    <Subhead style={{ textAlign: "center", marginTop: 12, fontSize: 28 }}>
      Folge mir f&uuml;r die ganze Serie.
    </Subhead>

    <Button style={{ marginTop: 16, zIndex: 1 }}>VERNETZEN &rarr;</Button>
  </Slide>
);

/* ─── COMPOSITION ────────────────────────────────── */

export const HowLlmsWorkCarousel: React.FC = () => {
  const frame = useCurrentFrame();

  const slides = [
    <CoverSlide key="cover" />,
    <RevealSlide key="reveal" />,
    <LoopSlide key="loop" />,
    <VocabularySlide key="vocab" />,
    <WeltwissenSlide key="weltwissen" />,
    <CtaSlide key="cta" />,
  ];

  return slides[frame] ?? null;
};
