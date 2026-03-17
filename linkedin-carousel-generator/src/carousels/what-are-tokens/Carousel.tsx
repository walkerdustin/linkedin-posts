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

export const WHAT_ARE_TOKENS_SLIDE_COUNT = 6;

/* ─── HELPERS ───────────────────────────────────── */

const TokenChip: React.FC<{
  text: string;
  color: string;
  id?: string;
  large?: boolean;
}> = ({ text, color, id, large }) => (
  <div
    style={{
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
    }}
  >
    <div
      style={{
        background: color,
        borderRadius: large ? 12 : 8,
        padding: large ? "10px 16px" : "6px 10px",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: large ? 28 : 22,
        fontWeight: 700,
        color: "#1a1a1a",
        lineHeight: 1.2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      {text}
    </div>
    {id && (
      <span
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: large ? 16 : 13,
          color: colors.textMuted,
          lineHeight: 1,
        }}
      >
        {id}
      </span>
    )}
  </div>
);

const tokenColors = [
  "#f4a0a0",
  "#a0d4f4",
  "#f4d4a0",
  "#a0f4c4",
  "#d4a0f4",
  "#f4a0d4",
  "#a0f4f4",
  "#c4f4a0",
  "#f4c4a0",
  "#a0a0f4",
];

/* ─── SLIDE 1: COVER ─────────────────────────────── */

const CoverSlide: React.FC = () => (
  <Slide
    style={{
      alignItems: "center",
      justifyContent: "center",
      gap: 0,
      padding: "48px 48px 48px 48px",
    }}
  >
    <div style={{ position: "absolute", top: 44, left: 48, right: 48 }}>
      <AccentLine direction="center" />
    </div>

    <Label style={{ marginBottom: 16 }}>
      LLM GRUNDLAGEN &nbsp;|&nbsp; TEIL 3
    </Label>

    <Avatar size={200} glowIntensity="strong" />

    <div style={{ textAlign: "center", marginTop: 24 }}>
      <Headline size="lg" style={{ fontSize: 52, lineHeight: 1.15 }}>
        WARUM KANN CHATGPT
      </Headline>
      <Headline size="lg" style={{ fontSize: 52, lineHeight: 1.15 }}>
        NICHT DIE R IN
      </Headline>
    </div>

    {/* Strawberry token visualization */}
    <ContentBox
      variant="raisedStrong"
      style={{
        padding: "32px 44px",
        marginTop: 24,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 52,
          fontWeight: 700,
          color: colors.text,
          letterSpacing: 6,
          lineHeight: 1,
        }}
      >
        {"st".split("").map((c, i) => (
          <span key={i} style={{ opacity: 0.4 }}>{c}</span>
        ))}
        <span style={{ color: colors.accent, opacity: 1 }}>r</span>
        <span style={{ opacity: 0.4 }}>aw</span>
        <span style={{ opacity: 0.4 }}>be</span>
        <span style={{ color: colors.accent, opacity: 1 }}>rr</span>
        <span style={{ opacity: 0.4 }}>y</span>
      </div>
      <Label style={{ marginTop: 16, fontSize: 20, opacity: 0.5 }}>
        TOKEN 101830
      </Label>
    </ContentBox>

    <Headline
      size="lg"
      style={{ fontSize: 52, textAlign: "center", marginTop: 24 }}
    >
      Z&Auml;HLEN?
    </Headline>

    <ContentBox
      variant="inset"
      style={{
        padding: "10px 28px",
        borderRadius: 40,
        marginTop: 20,
      }}
    >
      <Label style={{ fontSize: 16, opacity: 0.6, letterSpacing: 1.5 }}>
        DIE SPRACHE DER LLMs: TOKENS
      </Label>
    </ContentBox>

    <div style={{ position: "absolute", bottom: 44 }}>
      <SwipeHint />
    </div>
  </Slide>
);

/* ─── SLIDE 2: TOKENS NOT WORDS ───────────────────── */

const TokensRevealSlide: React.FC = () => {
  const tokens = [
    { text: "H", id: "39" },
    { text: "alli", id: "36888" },
    { text: "Hallo", id: "46670" },
    { text: ",", id: "11" },
    { text: " ich", id: "4629" },
    { text: " bin", id: "6958" },
    { text: " Dustin", id: "161250" },
  ];

  return (
    <SlideLayout
      slideNumber={2}
      totalSlides={WHAT_ARE_TOKENS_SLIDE_COUNT}
      watermark="02"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 16 }}>
        LLMs KENNEN
        <br />
        KEINE W&Ouml;RTER
      </Headline>

      <Subhead style={{ fontSize: 28, opacity: 0.65, marginBottom: 40 }}>
        Was ein LLM sieht, ist eine Liste von Zahlen.
        <br />
        Jede Zahl steht f&uuml;r ein <Highlight>Token</Highlight>.
      </Subhead>

      {/* Original text */}
      <ContentBox
        variant="inset"
        style={{
          padding: "20px 28px",
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Label style={{ fontSize: 16, opacity: 0.5, flexShrink: 0 }}>
          TEXT
        </Label>
        <Body size="md" style={{ fontSize: 28 }}>
          HalliHallo, ich bin Dustin
        </Body>
      </ContentBox>

      {/* Arrow */}
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <span
          style={{
            fontSize: 36,
            color: colors.accent,
            fontWeight: 700,
          }}
        >
          &#x2193;
        </span>
      </div>

      {/* Token visualization */}
      <ContentBox
        variant="raisedStrong"
        style={{
          padding: "32px 28px",
          marginBottom: 28,
        }}
      >
        <Label
          style={{
            fontSize: 16,
            opacity: 0.5,
            marginBottom: 20,
          }}
        >
          TOKENIZER
        </Label>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "flex-end",
          }}
        >
          {tokens.map((t, i) => (
            <TokenChip
              key={i}
              text={t.text}
              color={tokenColors[i % tokenColors.length]}
              id={t.id}
              large
            />
          ))}
        </div>
      </ContentBox>

      {/* Dustin highlight */}
      <ContentBox
        variant="flat"
        accentBorder="left"
        style={{
          backgroundColor: "transparent",
          padding: "12px 0 12px 28px",
          borderRadius: 0,
          marginBottom: 28,
        }}
      >
        <Body size="md" style={{ lineHeight: 1.6, fontSize: 28 }}>
          &ldquo;Dustin&rdquo; = ein einzelner Token:{" "}
          <Highlight>161250</Highlight>
          <br />
          &ldquo;HalliHallo&rdquo; = drei Tokens
        </Body>
      </ContentBox>

      <ContentBox
        variant="inset"
        style={{
          padding: "32px 36px",
          textAlign: "center",
        }}
      >
        <Body size="md" style={{ fontWeight: 500, lineHeight: 1.5, fontSize: 28 }}>
          Keine Buchstaben. Keine W&ouml;rter.
          <br />
          Nur <Highlight>Nummern</Highlight>.
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 3: WHY TOKENS? ────────────────────────── */

const WhyTokensSlide: React.FC = () => {
  const scaleItems = [
    { label: "Duden", value: "151.000", sub: "Stichwörter" },
    { label: "Deutsch gesamt", value: "~2 Mio.", sub: "mit allen Formen & Komposita" },
    { label: "Alle Sprachen", value: "???", sub: "Kyrillisch, Mandarin, Arabisch, Tamil, ..." },
    { label: "Emojis", value: "+3.600", sub: "\uD83C\uDFB2\uD83E\uDD8A\uD83D\uDE80\uD83C\uDF5C\uD83C\uDF19\uD83E\uDDE9" },
  ];

  return (
    <SlideLayout
      slideNumber={3}
      totalSlides={WHAT_ARE_TOKENS_SLIDE_COUNT}
      watermark="03"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 8 }}>
        WARUM TOKENS
        <br />
        STATT W&Ouml;RTER?
      </Headline>

      <Subhead style={{ fontSize: 24, opacity: 0.65, marginBottom: 32 }}>
        Die Menge an m&ouml;glichen W&ouml;rtern ist absurd.
      </Subhead>

      {/* Scale visualization */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {scaleItems.map((item, i) => (
          <ContentBox
            key={i}
            variant={i === 2 ? "raisedStrong" : "raised"}
            style={{
              padding: "20px 28px",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div
              style={{
                minWidth: 100,
                textAlign: "right",
              }}
            >
              <Headline
                size="sm"
                style={{
                  fontSize: i === 2 ? 32 : 28,
                  color: i === 2 ? colors.accent : colors.text,
                  fontFamily: i < 2 ? "JetBrains Mono, monospace" : undefined,
                }}
              >
                {item.value}
              </Headline>
            </div>
            <div
              style={{
                width: 3,
                height: 40,
                background: i === 2
                  ? colors.accent
                  : "rgba(240,247,248,0.15)",
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <div>
              <Headline size="sm" style={{ fontSize: 22, marginBottom: 2 }}>
                {item.label}
              </Headline>
              <Body size="sm" opacity={0.55} style={{ fontSize: 20 }}>
                {item.sub}
              </Body>
            </div>
          </ContentBox>
        ))}
      </div>

      {/* Arrow down */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <span style={{ fontSize: 32, color: colors.accent, fontWeight: 700 }}>
          &#x2193;
        </span>
      </div>

      {/* Solution */}
      <ContentBox
        variant="raisedStrong"
        style={{
          padding: "36px 40px",
          textAlign: "center",
        }}
      >
        <Label style={{ fontSize: 16, opacity: 0.5, marginBottom: 12 }}>
          L&Ouml;SUNG: TOKENIZER
        </Label>
        <Headline
          size="xl"
          color={colors.accent}
          style={{
            fontSize: 72,
            lineHeight: 1,
            textShadow: `0 0 30px rgba(192,86,64,0.4)`,
          }}
        >
          200.000
        </Headline>
        <Body size="lg" style={{ marginTop: 12, fontSize: 26 }}>
          Tokens im Vokabular von GPT-5
        </Body>
        <Body size="sm" opacity={0.55} style={{ marginTop: 8, fontSize: 20 }}>
          1,6 Tokens &asymp; 1 Wort &nbsp;&bull;&nbsp; 1 Token &asymp; 4 Buchstaben
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 4: LANGUAGE COST ──────────────────────── */

const LanguageCostSlide: React.FC = () => {
  const languages = [
    { name: "ENGLISCH", tokens: 105, chars: 468, pct: "", highlight: false },
    { name: "NORWEGISCH", tokens: 157, chars: 465, pct: "+50%", highlight: false },
    { name: "ARABISCH", tokens: 286, chars: 402, pct: "+172%", highlight: true },
  ];

  const maxTokens = 286;

  return (
    <SlideLayout
      slideNumber={4}
      totalSlides={WHAT_ARE_TOKENS_SLIDE_COUNT}
      watermark="04"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 8 }}>
        ENGLISCH IST
        <br />
        BILLIGER
      </Headline>

      <Subhead style={{ fontSize: 24, opacity: 0.65, marginBottom: 32 }}>
        Der Tokenizer ist f&uuml;r Englisch optimiert.
        <br />
        Andere Sprachen brauchen mehr Tokens.
      </Subhead>

      {/* Language comparison cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {languages.map((lang, i) => (
          <ContentBox
            key={i}
            variant={lang.highlight ? "raisedStrong" : "raised"}
            accentBorder={lang.highlight ? "left" : "none"}
            style={{ padding: "24px 28px" }}
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              <Headline
                size="sm"
                style={{ fontSize: 24 }}
              >
                {lang.name}
              </Headline>
              {lang.pct && (
                <Label
                  style={{
                    fontSize: 18,
                    color: colors.accent,
                    opacity: 1,
                    fontWeight: 700,
                  }}
                >
                  {lang.pct}
                </Label>
              )}
            </div>

            {/* Token count + bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 8,
              }}
            >
              <Headline
                size="sm"
                color={lang.highlight ? colors.accent : colors.text}
                style={{
                  fontSize: 36,
                  fontFamily: "JetBrains Mono, monospace",
                  minWidth: 80,
                }}
              >
                {lang.tokens}
              </Headline>
              <div
                style={{
                  flex: 1,
                  height: 16,
                  borderRadius: 8,
                  background: "rgba(0,0,0,0.3)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${(lang.tokens / maxTokens) * 100}%`,
                    height: "100%",
                    borderRadius: 8,
                    background: lang.highlight
                      ? `linear-gradient(90deg, ${colors.accent}, #d4684f)`
                      : `linear-gradient(90deg, rgba(240,247,248,0.35), rgba(240,247,248,0.15))`,
                    boxShadow: lang.highlight
                      ? "0 0 12px rgba(192,86,64,0.4)"
                      : "none",
                  }}
                />
              </div>
            </div>

            <Body size="sm" opacity={0.5} style={{ fontSize: 18 }}>
              {lang.chars} Zeichen &nbsp;&bull;&nbsp; {lang.tokens} Tokens
            </Body>
          </ContentBox>
        ))}
      </div>

      {/* Key insight */}
      <ContentBox
        variant="inset"
        style={{
          padding: "28px 32px",
          marginTop: 24,
          textAlign: "center",
        }}
      >
        <Body size="md" style={{ fontWeight: 500, lineHeight: 1.5, fontSize: 24 }}>
          Gleicher Inhalt, aber auf Arabisch
          <br />
          <Highlight>fast 3x so teuer</Highlight> wie auf Englisch.
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 5: MEANING, NOT LETTERS ───────────────── */

const MeaningSlide: React.FC = () => (
  <SlideLayout
    slideNumber={5}
    totalSlides={WHAT_ARE_TOKENS_SLIDE_COUNT}
    watermark="05"
    style={{ display: "block" }}
  >
    <Headline size="md" style={{ marginBottom: 32 }}>
      TOKENS TRAGEN
      <br />
      BEDEUTUNG
    </Headline>

    {/* King-Prince vs Price-Prince */}
    <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
      {/* Semantisch nah */}
      <ContentBox
        variant="raisedStrong"
        style={{
          flex: 1,
          padding: "28px 20px",
          textAlign: "center",
        }}
      >
        <Label style={{ fontSize: 14, opacity: 0.5, marginBottom: 16 }}>
          SEMANTISCH NAH
        </Label>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <Headline size="sm" style={{ fontSize: 30 }}>
            KING
          </Headline>
          <span style={{ fontSize: 28, color: colors.accent }}>&#x2194;</span>
          <Headline size="sm" style={{ fontSize: 30 }}>
            PRINCE
          </Headline>
        </div>
        <div
          style={{
            width: "80%",
            height: 8,
            borderRadius: 4,
            background: `linear-gradient(90deg, ${colors.accent}, #d4684f)`,
            margin: "16px auto 0",
            boxShadow: "0 0 12px rgba(192,86,64,0.3)",
          }}
        />
      </ContentBox>

      {/* Semantisch fern */}
      <ContentBox
        variant="raised"
        style={{
          flex: 1,
          padding: "28px 20px",
          textAlign: "center",
        }}
      >
        <Label style={{ fontSize: 14, opacity: 0.5, marginBottom: 16 }}>
          SEMANTISCH FERN
        </Label>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <Headline size="sm" style={{ fontSize: 30 }}>
            PRICE
          </Headline>
          <span style={{ fontSize: 28, opacity: 0.3 }}>&#x2194;</span>
          <Headline size="sm" style={{ fontSize: 30 }}>
            PRINCE
          </Headline>
        </div>
        <div
          style={{
            width: "20%",
            height: 8,
            borderRadius: 4,
            background: "rgba(240,247,248,0.2)",
            margin: "16px auto 0",
          }}
        />
      </ContentBox>
    </div>

    <ContentBox
      variant="flat"
      accentBorder="left"
      style={{
        backgroundColor: "transparent",
        padding: "4px 0 4px 28px",
        borderRadius: 0,
        marginBottom: 32,
      }}
    >
      <Body size="md" style={{ lineHeight: 1.6, fontSize: 24, opacity: 0.8 }}>
        Nur ein Buchstabe Unterschied, aber ein LLM
        <br />
        sieht keine Buchstaben. Nur Token-Nummern
        <br />
        mit gelernter Bedeutung.
      </Body>
    </ContentBox>

    {/* Strawberry answer */}
    <ContentBox
      variant="raisedStrong"
      style={{
        padding: "32px 32px",
        textAlign: "center",
      }}
    >
      <Label style={{ fontSize: 16, opacity: 0.5, marginBottom: 16 }}>
        DARUM KANN EIN LLM DIE R NICHT Z&Auml;HLEN
      </Label>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          marginBottom: 16,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Body size="sm" opacity={0.5} style={{ fontSize: 16, marginBottom: 4 }}>
            WAS WIR SEHEN
          </Body>
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 28,
              fontWeight: 700,
              color: colors.text,
              letterSpacing: 2,
            }}
          >
            s-t-<span style={{ color: colors.accent }}>r</span>-a-w-b-e-
            <span style={{ color: colors.accent }}>r</span>-
            <span style={{ color: colors.accent }}>r</span>-y
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", margin: "8px 0" }}>
        <span style={{ fontSize: 24, opacity: 0.4 }}>vs.</span>
      </div>

      <div style={{ textAlign: "center" }}>
        <Body size="sm" opacity={0.5} style={{ fontSize: 16, marginBottom: 4 }}>
          WAS EIN LLM SIEHT
        </Body>
        <Headline
          size="sm"
          color={colors.accent}
          style={{
            fontSize: 44,
            fontFamily: "JetBrains Mono, monospace",
            textShadow: "0 0 20px rgba(192,86,64,0.3)",
          }}
        >
          101830
        </Headline>
      </div>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 6: CTA ───────────────────────────────── */

const CtaSlide: React.FC = () => (
  <Slide style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
    <div
      style={{
        position: "absolute",
        top: "18%",
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

    {/* Name as token */}
    <ContentBox
      variant="raisedStrong"
      style={{
        padding: "24px 48px",
        textAlign: "center",
        zIndex: 1,
        marginBottom: 8,
      }}
    >
      <Label style={{ fontSize: 14, opacity: 0.5, marginBottom: 8 }}>
        MEIN NAME IM GPT-5 TOKENIZER
      </Label>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 16 }}>
        <div
          style={{
            background: tokenColors[6],
            borderRadius: 10,
            padding: "8px 20px",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 36,
            fontWeight: 700,
            color: "#1a1a1a",
            boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          Dustin
        </div>
        <span style={{ fontSize: 28, color: colors.textMuted }}>=</span>
        <Headline
          size="sm"
          color={colors.accent}
          style={{
            fontSize: 36,
            fontFamily: "JetBrains Mono, monospace",
            textShadow: "0 0 20px rgba(192,86,64,0.3)",
          }}
        >
          161250
        </Headline>
      </div>
    </ContentBox>

    <Avatar size={200} glowIntensity="strong" />

    <Headline size="lg" style={{ textAlign: "center", marginTop: 4, fontSize: 48 }}>
      DUSTIN WALKER
    </Headline>

    <Label style={{ textAlign: "center", fontSize: 20, opacity: 0.55 }}>
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
        padding: "28px 48px",
        marginTop: 8,
        zIndex: 1,
      }}
    >
      <Body size="md" style={{ lineHeight: 1.6, fontSize: 28 }}>
        Ist euer Name auch ein eigener Token?
        <br />
        Checkt es: <Highlight>tiktokenizer.vercel.app</Highlight>
      </Body>
    </ContentBox>

    <Button style={{ marginTop: 16, zIndex: 1 }}>VERNETZEN &rarr;</Button>
  </Slide>
);

/* ─── COMPOSITION ────────────────────────────────── */

export const WhatAreTokensCarousel: React.FC = () => {
  const frame = useCurrentFrame();

  const slides = [
    <CoverSlide key="cover" />,
    <TokensRevealSlide key="tokens-reveal" />,
    <WhyTokensSlide key="why-tokens" />,
    <LanguageCostSlide key="language-cost" />,
    <MeaningSlide key="meaning" />,
    <CtaSlide key="cta" />,
  ];

  return slides[frame] ?? null;
};
