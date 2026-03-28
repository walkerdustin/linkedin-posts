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

export const MULTIMODALITY_VISION_SLIDE_COUNT = 6;

/* ─── SHARED: PIPELINE COMPONENTS ─────────────────── */

const PipelineBox: React.FC<{
  icon?: string;
  label: string;
  sublabel?: string;
  accent?: boolean;
  muted?: boolean;
  style?: React.CSSProperties;
}> = ({ icon, label, sublabel, accent, muted, style }) => (
  <div
    style={{
      background: accent
        ? `linear-gradient(135deg, rgba(192,86,64,0.25), rgba(192,86,64,0.1))`
        : colors.container,
      border: `1px solid ${accent ? "rgba(192,86,64,0.5)" : "rgba(240,247,248,0.08)"}`,
      borderRadius: 12,
      padding: "16px 18px",
      textAlign: "center",
      boxShadow: accent ? shadows.raisedStrong : shadows.raised,
      opacity: muted ? 0.55 : 1,
      ...style,
    }}
  >
    {icon && (
      <div style={{ fontSize: 30, marginBottom: 6, lineHeight: 1 }}>{icon}</div>
    )}
    <div
      style={{
        fontFamily: "JetBrains Mono, monospace",
        fontSize: 17,
        fontWeight: 400,
        color: accent ? colors.accent : colors.text,
        letterSpacing: 0.5,
        textTransform: "uppercase" as const,
        lineHeight: 1.3,
      }}
    >
      {label}
    </div>
    {sublabel && (
      <div
        style={{
          fontSize: 16,
          color: colors.textMuted,
          marginTop: 6,
          fontFamily: "Roboto, sans-serif",
          lineHeight: 1.3,
        }}
      >
        {sublabel}
      </div>
    )}
  </div>
);

const PipelineArrow: React.FC<{ color?: string }> = ({
  color = colors.textMuted,
}) => (
  <div
    style={{
      color,
      fontSize: 28,
      flexShrink: 0,
      alignSelf: "center",
      lineHeight: 1,
      padding: "0 4px",
    }}
  >
    →
  </div>
);

/* ─── SHARED: IMAGE PATCH GRID ─────────────────────── */

/**
 * Detailed patch grid: 3×2 patches, each with a 4×4 pixel sub-grid.
 * Shows clearly that each patch contains multiple pixels.
 */
const PatchGridDetailed: React.FC = () => {
  // 6 patches (3 cols × 2 rows), each with 16 pixel colours (4×4)
  const patchPixels: string[][] = [
    // Top-left — bright teal
    ["#23a3b8","#21a0b5","#25a5bb","#22a2b8","#1e9db2","#239eb3","#20a0b5","#24a4b9","#22a1b6","#1f9db2","#239fb4","#21a0b5","#25a5bb","#22a2b7","#1e9db1","#23a1b6"],
    // Top-center — mid teal
    ["#1a7f94","#1c8296","#18809300","#1b8194","#198294","#1a8095","#1c8297","#197f92","#1b8194","#1a8095","#197e92","#1c8297","#1a8095","#197f93","#1b8195","#1a8094"].map(c => c.replace("00","")),
    // Top-right — lighter
    ["#26a8be","#25a5bb","#27aabf","#26a7bd","#24a4ba","#26a8be","#25a5bc","#27a9bf","#26a7bd","#24a4ba","#26a8be","#25a6bc","#27aabf","#26a7bd","#24a4ba","#26a8be"],
    // Bottom-left — dark blue-green
    ["#0d5d6e","#0e5f70","#0c5b6c","#0d5e6f","#0c5a6b","#0d5d6e","#0e5f70","#0c5b6c","#0d5e6f","#0c5a6b","#0d5d6f","#0e6071","#0c5c6d","#0d5e6f","#0c5a6b","#0d5d6e"],
    // Bottom-center — medium dark
    ["#116578","#12687b","#106276","#116679","#0f6375","#116578","#12687b","#106377","#116679","#0f6375","#116578","#12687b","#116679","#106377","#0f6376","#116578"],
    // Bottom-right — slightly lighter dark
    ["#146a7c","#156d7f","#136878","#146b7d","#126779","#146a7c","#156d7f","#136879","#146b7d","#12677a","#146a7c","#156d7f","#146b7d","#136878","#126779","#146a7c"],
  ];

  const pixelSize = 22;
  const pixelGap = 2;
  const patchPad = 6;
  const patchGap = 6;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, auto)",
        gridTemplateRows: "repeat(2, auto)",
        gap: patchGap,
      }}
    >
      {patchPixels.map((pixels, patchIdx) => (
        <div
          key={patchIdx}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(4, ${pixelSize}px)`,
            gridTemplateRows: `repeat(4, ${pixelSize}px)`,
            gap: pixelGap,
            padding: patchPad,
            background: colors.container,
            border: `2px solid rgba(192,86,64,0.55)`,
            borderRadius: 8,
            boxShadow: shadows.raised,
          }}
        >
          {pixels.map((color, pixIdx) => (
            <div
              key={pixIdx}
              style={{
                background: color,
                borderRadius: 2,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const PatchGrid: React.FC<{ cols?: number; rows?: number; cellSize?: number }> =
  ({ cols = 6, rows = 5, cellSize = 44 }) => {
    // Pseudo-image colours: simulate a stylised photo
    const palette = [
      "#1e8da0",
      "#2496aa",
      "#1a7a8f",
      "#287d90",
      "#158494",
      "#0e6a7a",
      "#1c8898",
      "#239eb2",
      "#147080",
      "#196c7a",
      "#0f5d6e",
      "#1a7a8f",
      "#22909f",
      "#10606e",
      "#186b7a",
      "#1d8596",
      "#0c5363",
      "#175f6d",
      "#1b8093",
      "#238da0",
      "#126572",
      "#1e8898",
      "#268fa2",
      "#0e5e6c",
      "#186878",
      "#0b4f5c",
      "#1d7e91",
      "#23a0b5",
      "#127083",
      "#1a8294",
    ];

    const cells = Array.from({ length: cols * rows }, (_, i) => i);

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          gap: 3,
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: shadows.raisedStrong,
        }}
      >
        {cells.map((_, i) => (
          <div
            key={i}
            style={{
              background: palette[i % palette.length],
              borderRadius: 3,
              border: `1px solid rgba(192,86,64,0.2)`,
            }}
          />
        ))}
      </div>
    );
  };

/* ─── SLIDE 1: COVER ──────────────────────────────── */

const CoverSlide: React.FC = () => (
  <Slide
    style={{
      alignItems: "center",
      justifyContent: "center",
      gap: 0,
      padding: "48px 64px 72px",
    }}
  >
    {/* Top accent line */}
    <div style={{ position: "absolute", top: 44, left: 64, right: 64 }}>
      <AccentLine direction="center" />
    </div>

    <Label style={{ marginBottom: 28, marginTop: 8 }}>
      LLM GRUNDLAGEN &nbsp;|&nbsp; TEIL 4
    </Label>

    {/* Patch transformation visual — hero element */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        marginBottom: 36,
      }}
    >
      {/* Input image patch grid */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <PatchGrid cols={5} rows={5} cellSize={52} />
        <Label style={{ fontSize: 16, opacity: 0.4 }}>BILD</Label>
      </div>

      <div style={{ fontSize: 48, color: colors.accent, fontWeight: 700, lineHeight: 1 }}>→</div>

      {/* Patches with grid overlay */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ position: "relative" }}>
          <PatchGrid cols={5} rows={5} cellSize={52} />
          {/* Patch boundary lines */}
          <div style={{
            position: "absolute", inset: 0,
            background: "repeating-linear-gradient(0deg, transparent, transparent 51px, rgba(192,86,64,0.5) 51px, rgba(192,86,64,0.5) 55px), repeating-linear-gradient(90deg, transparent, transparent 51px, rgba(192,86,64,0.5) 51px, rgba(192,86,64,0.5) 55px)",
            borderRadius: 10,
          }} />
        </div>
        <Label style={{ fontSize: 16, opacity: 0.4 }}>PATCHES</Label>
      </div>

      <div style={{ fontSize: 48, color: colors.accent, fontWeight: 700, lineHeight: 1 }}>→</div>

      {/* Embedding vectors */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 52px)",
          gridTemplateRows: "repeat(5, 52px)",
          gap: 3,
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: shadows.raisedStrong,
        }}>
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} style={{
              background: `rgba(192,86,64,${0.12 + (i % 6) * 0.06})`,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 4,
            }}>
              {[0, 1].map(j => (
                <div key={j} style={{
                  width: 24 - (i % 3) * 5,
                  height: 3,
                  borderRadius: 2,
                  background: `rgba(240,247,248,${0.25 + (j + i % 4) * 0.1})`,
                }} />
              ))}
            </div>
          ))}
        </div>
        <Label style={{ fontSize: 16, opacity: 0.4 }}>EMBEDDINGS</Label>
      </div>
    </div>

    {/* Title */}
    <div style={{ textAlign: "center", marginBottom: 8 }}>
      <Headline size="xl" style={{ fontSize: 88, lineHeight: 1 }}>
        WIE KI
      </Headline>
      <Headline
        size="xl"
        color={colors.accent}
        style={{
          fontSize: 88,
          lineHeight: 1,
          textShadow: `0 0 40px rgba(192,86,64,0.3), 0 0 80px rgba(192,86,64,0.12)`,
        }}
      >
        SEHEN LERNT
      </Headline>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <AccentLine width={260} direction="center" />
      </div>
    </div>

    <Subhead style={{ textAlign: "center", fontSize: 30, opacity: 0.75, marginBottom: 20 }}>
      Multimodale Modelle erkl&auml;rt — von innen.
    </Subhead>

    <Avatar size={180} glowIntensity="normal" style={{ marginBottom: 12 }} />

    <ContentBox variant="inset" style={{ padding: "10px 32px", borderRadius: 40 }}>
      <Label style={{ fontSize: 17, opacity: 0.5, letterSpacing: 1 }}>
        Vision Language Models &nbsp;&bull;&nbsp; VLM
      </Label>
    </ContentBox>

    <div style={{ position: "absolute", bottom: 40 }}>
      <SwipeHint />
    </div>
  </Slide>
);

/* ─── SLIDE 2: DIE ALTE METHODE ───────────────────── */

const OldMethodSlide: React.FC = () => (
  <SlideLayout
    slideNumber={2}
    totalSlides={MULTIMODALITY_VISION_SLIDE_COUNT}
    watermark="02"
    style={{ display: "block" }}
  >
    <Label style={{ fontSize: 17, opacity: 0.5, marginBottom: 10 }}>
      PRE-2023
    </Label>
    <Headline size="md" style={{ marginBottom: 6 }}>
      DIE ALTE
      <br />
      METHODE
    </Headline>
    <Subhead style={{ fontSize: 26, opacity: 0.6, marginBottom: 28 }}>
      Das LLM sah das Bild nie selbst.
    </Subhead>

    {/* Pipeline diagram */}
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: 10,
        marginBottom: 20,
      }}
    >
      <PipelineBox icon="📷" label="Bild" style={{ flex: "0 0 120px" }} />
      <PipelineArrow />
      <PipelineBox label="Vision Model" sublabel="separates System" style={{ flex: 1 }} />
      <PipelineArrow />
      <PipelineBox label={`"Das Bild zeigt..."`} sublabel="Text-Beschreibung" style={{ flex: 1 }} />
      <PipelineArrow />
      <PipelineBox icon="🧠" label="LLM" sublabel="bekommt nur Text" style={{ flex: "0 0 120px" }} />
    </div>

    {/* What goes wrong */}
    <ContentBox
      variant="raisedStrong"
      accentBorder="left"
      style={{ padding: "22px 28px", marginBottom: 18 }}
    >
      <Label style={{ fontSize: 16, opacity: 0.5, marginBottom: 10 }}>
        DAS PROBLEM
      </Label>
      <Body size="md" style={{ lineHeight: 1.6, fontSize: 27 }}>
        Das LLM arbeitet mit einer{" "}
        <Highlight>Beschreibung des Bildes</Highlight> — nicht mit dem Bild
        selbst.
        <br />
        <br />
        Stille Post auf technischer Ebene.
      </Body>
    </ContentBox>

    {/* Info loss */}
    <div style={{ display: "flex", gap: 14, marginBottom: 18 }}>
      {[
        { label: "Layout", sub: "Tabellenstruktur geht verloren" },
        { label: "Details", sub: "Kleine Elemente ausgelassen" },
        { label: "Kontext", sub: "Relationen fehlen" },
      ].map((item, i) => (
        <ContentBox
          key={i}
          variant="raised"
          style={{ flex: 1, padding: "18px 14px", textAlign: "center" }}
        >
          <div
            style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "rgba(192,86,64,0.2)", border: "1.5px solid rgba(192,86,64,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 10px",
            }}
          >
            <span style={{ color: colors.accent, fontSize: 20, fontWeight: 700 }}>✗</span>
          </div>
          <Headline size="sm" style={{ fontSize: 22, marginBottom: 6 }}>{item.label}</Headline>
          <Body size="sm" opacity={0.55} style={{ fontSize: 20 }}>{item.sub}</Body>
        </ContentBox>
      ))}
    </div>

    {/* Key takeaway quote */}
    <ContentBox variant="raisedStrong" style={{ padding: "24px 28px", textAlign: "center" }}>
      <Body size="md" style={{ fontSize: 27, fontWeight: 500, lineHeight: 1.55 }}>
        Genauigkeit war begrenzt —
        das Modell <Highlight>riet</Highlight>, statt zu sehen.
        <br />
        Das &auml;ndert sich mit nativer Vision.
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 3: NATIVE VISION ──────────────────────── */

const NativeVisionSlide: React.FC = () => (
  <SlideLayout
    slideNumber={3}
    totalSlides={MULTIMODALITY_VISION_SLIDE_COUNT}
    watermark="03"
    style={{ display: "block" }}
  >
    <Headline size="md" style={{ marginBottom: 8 }}>
      NATIVE VISION
      <br />
      INTEGRATION
    </Headline>
    <Subhead style={{ fontSize: 26, opacity: 0.6, marginBottom: 32 }}>
      Heute sieht das LLM das Bild wirklich.
    </Subhead>

    {/* Patch grid + pipeline in one visual */}
    <div
      style={{
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        marginBottom: 24,
      }}
    >
      {/* Left: Patch + pixel visualization */}
      <ContentBox
        variant="raised"
        style={{ padding: 20, flex: "0 0 auto", textAlign: "center" }}
      >
        <Label style={{ fontSize: 15, opacity: 0.5, marginBottom: 14 }}>
          BILD → PATCHES
        </Label>
        <PatchGridDetailed />
        <div style={{ marginTop: 14 }}>
          <Body size="sm" style={{ fontSize: 18, opacity: 0.75 }}>
            6 Patches
          </Body>
          <Body size="sm" style={{ fontSize: 16, opacity: 0.45 }}>
            16 Pixel pro Patch
          </Body>
        </div>
      </ContentBox>

      {/* Right: Pipeline stages */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {[
          {
            num: "1",
            label: "Patch-Extraktion",
            desc: "Bild wird in kleine quadratische Patches unterteilt",
          },
          {
            num: "2",
            label: "Vision Encoder",
            desc: "Ein Vision Transformer verarbeitet jeden Patch",
            accent: true,
          },
          {
            num: "3",
            label: "Projektion",
            desc: "Patch-Embeddings werden in den Text-Embedding-Raum projiziert",
          },
          {
            num: "4",
            label: "LLM verarbeitet beides",
            desc: "Text-Tokens und Bild-Embeddings — gemeinsam",
            accent: true,
          },
        ].map((step, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: step.accent
                  ? `linear-gradient(135deg, ${colors.accent}, #d4684f)`
                  : colors.container,
                boxShadow: step.accent ? shadows.raisedStrong : shadows.raised,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: step.accent ? "none" : "1px solid rgba(240,247,248,0.08)",
              }}
            >
              <Headline size="sm" style={{ fontSize: 22, letterSpacing: 0 }}>
                {step.num}
              </Headline>
            </div>
            <ContentBox
              variant={step.accent ? "raisedStrong" : "raised"}
              style={{ flex: 1, padding: "20px 24px" }}
            >
              <Headline size="sm" style={{ fontSize: 23, marginBottom: 6 }}>
                {step.label}
              </Headline>
              <Body size="sm" opacity={0.65} style={{ fontSize: 22 }}>
                {step.desc}
              </Body>
            </ContentBox>
          </div>
        ))}
      </div>
    </div>

    {/* Key insight */}
    <ContentBox
      variant="raisedStrong"
      accentBorder="top"
      style={{ padding: "32px 36px", textAlign: "center", marginTop: 4 }}
    >
      <Body size="lg" style={{ fontWeight: 500, lineHeight: 1.55, fontSize: 28 }}>
        Das LLM sieht <Highlight>visuelle Struktur</Highlight> —
        <br />
        nicht nur eine Beschreibung davon.
        <br />
        Text-Token und Bild-Patch: gleichwertig.
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 4: WAS DAS ERMÖGLICHT ────────────────── */

const UseCasesSlide: React.FC = () => {
  const cases = [
    {
      icon: "📊",
      label: "Charts direkt analysieren",
      sub: "Keine manuelle Daten-Extraktion mehr",
    },
    {
      icon: "🖼️",
      label: "Layout bleibt erhalten",
      sub: "Tabellen-Struktur, Spalten, Zeilen",
    },
    {
      icon: "✍️",
      label: "Handschrift lesen",
      sub: "Auch unstrukturierte Notizen",
    },
    {
      icon: "🖥️",
      label: "UI-Elemente erkennen",
      sub: "Buttons, Felder, Men\u00fcs auf Screenshots",
    },
  ];

  return (
    <SlideLayout
      slideNumber={4}
      totalSlides={MULTIMODALITY_VISION_SLIDE_COUNT}
      watermark="04"
      style={{ display: "block" }}
    >
      <Headline size="md" style={{ marginBottom: 6 }}>
        WAS DAS
        <br />
        ERM&Ouml;GLICHT
      </Headline>
      <Subhead style={{ fontSize: 26, opacity: 0.6, marginBottom: 28 }}>
        Dinge, die fr&uuml;her undenkbar waren.
      </Subhead>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {cases.map((item, i) => (
          <ContentBox
            key={i}
            variant="raised"
            style={{
              padding: "22px 28px",
              display: "flex",
              alignItems: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 14,
                background: `linear-gradient(135deg, rgba(192,86,64,0.2), rgba(192,86,64,0.08))`,
                border: `1px solid rgba(192,86,64,0.3)`,
                boxShadow: shadows.raised,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 32,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div>
              <Headline size="sm" style={{ fontSize: 26, marginBottom: 4 }}>
                {item.label}
              </Headline>
              <Body size="sm" opacity={0.6} style={{ fontSize: 21 }}>
                {item.sub}
              </Body>
            </div>
          </ContentBox>
        ))}
      </div>

      <ContentBox
        variant="raisedStrong"
        accentBorder="top"
        style={{ padding: "22px 28px", textAlign: "center", marginTop: 24 }}
      >
        <Body size="md" style={{ fontSize: 26, fontWeight: 500, lineHeight: 1.5 }}>
          Das Modell sieht, <Highlight>wie</Highlight> Daten zusammenh&auml;ngen
          <br />— nicht nur, was draufsteht.
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 5: PRAXIS & GRENZEN ───────────────────── */

const PraxisSlide: React.FC = () => (
  <SlideLayout
    slideNumber={5}
    totalSlides={MULTIMODALITY_VISION_SLIDE_COUNT}
    watermark="05"
    style={{ display: "block" }}
  >
    <Headline size="md" style={{ marginBottom: 40 }}>
      PRAXIS &
      <br />
      GRENZEN
    </Headline>

    {/* Before / After */}
    <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
      <ContentBox variant="raised" style={{ flex: 1, padding: "28px 24px" }}>
        <Label style={{ fontSize: 16, opacity: 0.45, marginBottom: 16 }}>
          FR&Uuml;HER
        </Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            "Tabelle manuell extrahieren",
            "Daten bereinigen",
            "Format anpassen",
            "Ergebnis hoffen",
          ].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, opacity: 0.65 }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%",
                background: "rgba(240,247,248,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ fontSize: 15, color: colors.textMuted }}>{i + 1}</span>
              </div>
              <Body size="sm" style={{ fontSize: 23 }}>{step}</Body>
            </div>
          ))}
        </div>
      </ContentBox>

      <div style={{ display: "flex", alignItems: "center", color: colors.accent, fontSize: 44, fontWeight: 700, flexShrink: 0 }}>
        →
      </div>

      <ContentBox variant="raisedStrong" accentBorder="left" style={{ flex: 1, padding: "28px 24px" }}>
        <Label style={{ fontSize: 16, opacity: 0.7, marginBottom: 16, color: colors.accent }}>
          HEUTE
        </Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {["Screenshot machen", "Prompt schreiben", "Fertig."].map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 26, height: 26, borderRadius: "50%",
                background: "rgba(192,86,64,0.2)", border: "1px solid rgba(192,86,64,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <span style={{ fontSize: 15, color: colors.accent, fontWeight: 700 }}>{i + 1}</span>
              </div>
              <Body size="sm" style={{ fontSize: 23 }}>{step}</Body>
            </div>
          ))}
        </div>
      </ContentBox>
    </div>

    {/* Limits */}
    <ContentBox variant="inset" style={{ padding: "24px 28px", marginBottom: 20 }}>
      <Label style={{ fontSize: 16, opacity: 0.5, marginBottom: 16 }}>
        DIE GRENZEN
      </Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { icon: "⚠️", text: "Aufl\u00f6sung limitiert — kleiner Text und feine Details gehen verloren" },
          { icon: "⚠️", text: "Kein menschliches Sehen — bei komplexen Bildern kann das Modell halluzinieren" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: 24, flexShrink: 0, lineHeight: 1.4 }}>{item.icon}</span>
            <Body size="sm" style={{ fontSize: 24, opacity: 0.8, lineHeight: 1.5 }}>{item.text}</Body>
          </div>
        ))}
      </div>
    </ContentBox>

    <ContentBox
      variant="flat"
      accentBorder="left"
      style={{ backgroundColor: "transparent", padding: "8px 0 8px 24px", borderRadius: 0, marginBottom: 20 }}
    >
      <Body size="sm" style={{ fontSize: 24, opacity: 0.75, lineHeight: 1.5 }}>
        Faustregel: Je gr&ouml;&szlig;er der Text im Screenshot,
        <br />
        desto besser das Ergebnis.
      </Body>
    </ContentBox>

    {/* Personal note */}
    <ContentBox
      variant="raisedStrong"
      accentBorder="top"
      style={{ padding: "28px 32px", textAlign: "center" }}
    >
      <Label style={{ fontSize: 15, opacity: 0.45, marginBottom: 12 }}>
        MEIN WORKFLOW
      </Label>
      <Body size="md" style={{ fontSize: 27, lineHeight: 1.55 }}>
        Tabellen-Screenshots direkt in Grafiken umwandeln.
        <br />
        Das Modell erkennt <Highlight>Spalten, Zeilen, Relationen</Highlight>.
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 6: CTA ────────────────────────────────── */

const CtaSlide: React.FC = () => (
  <Slide style={{ alignItems: "center", justifyContent: "center", gap: 20 }}>
    <div
      style={{
        position: "absolute",
        top: "18%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 520,
        height: 520,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(192,86,64,0.12) 0%, rgba(17,101,120,0.06) 40%, transparent 70%)",
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
      <Label style={{ fontSize: 16, opacity: 0.45, marginBottom: 12 }}>
        N&Auml;CHSTE FRAGE
      </Label>
      <Body size="md" style={{ lineHeight: 1.6 }}>
        Nutzt ihr schon Screenshots mit KI?
        <br />
        Was funktioniert — was nicht?
      </Body>
    </ContentBox>

    <Subhead style={{ textAlign: "center", marginTop: 8, fontSize: 26 }}>
      Folge mir f&uuml;r mehr Insights aus echten AI-Projekten.
    </Subhead>

    <Button style={{ marginTop: 12, zIndex: 1 }}>VERNETZEN &rarr;</Button>
  </Slide>
);

/* ─── COMPOSITION ─────────────────────────────────── */

export const MultimodalityVisionCarousel: React.FC = () => {
  const frame = useCurrentFrame();

  const slides = [
    <CoverSlide key="cover" />,
    <OldMethodSlide key="old-method" />,
    <NativeVisionSlide key="native-vision" />,
    <UseCasesSlide key="use-cases" />,
    <PraxisSlide key="praxis" />,
    <CtaSlide key="cta" />,
  ];

  return slides[frame] ?? null;
};
