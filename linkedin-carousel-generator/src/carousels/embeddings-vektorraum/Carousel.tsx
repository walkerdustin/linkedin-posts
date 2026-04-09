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
  SlideLayout,
  Highlight,
} from "../../shared/components";
import { colors, shadows } from "../../shared/theme";
import { jetbrainsMono } from "../../shared/fonts";

export const EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT = 9;

/* ─── TABLE PRIMITIVES (neumorphic, mobile-first) ───────────────── */

type TableRow = {
  word: string;
  g: number;
  a: number;
  z?: number | null;
  highlight?: "accent" | "warn" | "muted";
};

const mono: React.CSSProperties = {
  fontFamily: jetbrainsMono.fontFamily,
  fontWeight: 700,
  fontVariantNumeric: "tabular-nums",
};

const EmbeddingTable: React.FC<{
  rows: TableRow[];
  showZ?: boolean;
  zLabel?: string;
  compact?: boolean;
  dense?: boolean;
  /** Extra-tight rows for slide 6 (more room for 3D graphic) */
  ultraDense?: boolean;
}> = ({ rows, showZ, zLabel = "ADEL", compact, dense, ultraDense }) => {
  const fs = ultraDense ? 18 : dense ? 22 : compact ? 26 : 30;
  const pad = ultraDense ? "6px 8px" : dense ? "10px 8px" : compact ? "14px 10px" : "18px 14px";
  const headerFs = ultraDense ? 14 : fs - 4;
  const colWord = showZ ? "32%" : "38%";

  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: shadows.inset,
        border: "1px solid rgba(240,247,248,0.08)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: showZ
            ? `${colWord} 1fr 1fr 1fr`
            : `${colWord} 1fr 1fr`,
          background: colors.container,
          ...mono,
          fontSize: headerFs,
          color: colors.textMuted,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        <div style={{ padding: pad }}>Wort</div>
        <div style={{ padding: pad, textAlign: "center" }}>G</div>
        <div style={{ padding: pad, textAlign: "center" }}>A</div>
        {showZ && (
          <div style={{ padding: pad, textAlign: "center", color: colors.accent }}>
            {zLabel}
          </div>
        )}
      </div>
      {rows.map((r, i) => {
        const bg =
          r.highlight === "accent"
            ? "rgba(192,86,64,0.18)"
            : r.highlight === "warn"
              ? "rgba(192,86,64,0.12)"
              : i % 2 === 0
                ? "rgba(0,0,0,0.12)"
                : "rgba(0,0,0,0.06)";
        return (
          <div
            key={`${r.word}-${i}`}
            style={{
              display: "grid",
              gridTemplateColumns: showZ
                ? `${colWord} 1fr 1fr 1fr`
                : `${colWord} 1fr 1fr`,
              background: bg,
              borderTop: "1px solid rgba(240,247,248,0.06)",
              alignItems: "center",
            }}
          >
            <div
              style={{
                padding: pad,
                fontFamily: jetbrainsMono.fontFamily,
                fontWeight: 600,
                fontSize: fs,
                color: colors.text,
              }}
            >
              {r.word}
            </div>
            <Cell
              n={r.g}
              fs={fs}
              pad={ultraDense ? "8px 4px" : dense ? "12px 6px" : "18px 10px"}
              strong={r.highlight === "accent"}
            />
            <Cell
              n={r.a}
              fs={fs}
              pad={ultraDense ? "8px 4px" : dense ? "12px 6px" : "18px 10px"}
              strong={r.highlight === "accent"}
            />
            {showZ && (
              <Cell
                n={r.z ?? 0}
                fs={fs}
                pad={ultraDense ? "8px 4px" : dense ? "12px 6px" : "18px 10px"}
                strong={r.highlight === "accent"}
                muted={r.z === null}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Cell: React.FC<{
  n: number;
  fs: number;
  pad?: string;
  strong?: boolean;
  muted?: boolean;
}> = ({ n, fs, pad = "18px 10px", strong, muted }) => (
  <div
    style={{
      padding: pad,
      textAlign: "center",
      fontFamily: jetbrainsMono.fontFamily,
          fontWeight: 700,
      fontSize: fs,
      color: muted ? colors.textMuted : strong ? colors.accent : colors.text,
      opacity: muted ? 0.45 : 1,
    }}
  >
    {muted ? "—" : n}
  </div>
);

/* Mini 2D plot: Gender x Age */
const Scatter2D: React.FC<{
  points: { label: string; gx: number; ay: number; clash?: boolean }[];
}> = ({ points }) => {
  const W = 920;
  const H = 480;
  const pad = 70;
  const toX = (g: number) => pad + ((g + 1.2) / 2.4) * (W - 2 * pad);
  const toY = (a: number) => H - pad - (a / 80) * (H - 2 * pad);

  return (
    <div
      style={{
        position: "relative",
        width: W,
        height: H,
        borderRadius: 20,
        background: colors.container,
        boxShadow: shadows.raised,
        border: "1px solid rgba(240,247,248,0.08)",
        marginTop: 8,
      }}
    >
      {/* Axes labels */}
      <span
        style={{
          position: "absolute",
          left: W / 2 - 80,
          bottom: 12,
          fontFamily: jetbrainsMono.fontFamily,
          fontSize: 18,
          color: colors.textMuted,
          letterSpacing: 1,
        }}
      >
        G (Geschlecht)
      </span>
      <span
        style={{
          position: "absolute",
          left: 12,
          top: H / 2 - 60,
          transform: "rotate(-90deg)",
          transformOrigin: "left center",
          fontFamily: jetbrainsMono.fontFamily,
          fontSize: 18,
          color: colors.textMuted,
          letterSpacing: 1,
          whiteSpace: "nowrap",
        }}
      >
        A (Alter)
      </span>
      {/* Grid */}
      <svg width={W} height={H} style={{ position: "absolute", top: 0, left: 0 }}>
        <line
          x1={pad}
          y1={H - pad}
          x2={W - pad}
          y2={H - pad}
          stroke="rgba(240,247,248,0.15)"
          strokeWidth={2}
        />
        <line
          x1={pad}
          y1={pad}
          x2={pad}
          y2={H - pad}
          stroke="rgba(240,247,248,0.15)"
          strokeWidth={2}
        />
      </svg>
      {points.map((p) => (
        <div
          key={p.label}
          style={{
            position: "absolute",
            left: toX(p.gx) - (p.clash ? 28 : 22),
            top: toY(p.ay) - (p.clash ? 28 : 22),
            width: p.clash ? 56 : 44,
            height: p.clash ? 56 : 44,
            borderRadius: "50%",
            background: p.clash
              ? `linear-gradient(135deg, ${colors.accent}, #d4684f)`
              : colors.primaryLight,
            boxShadow: p.clash ? shadows.glow(colors.accent, 24) : shadows.soft,
            border: `2px solid ${p.clash ? "rgba(255,255,255,0.35)" : "rgba(240,247,248,0.2)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: jetbrainsMono.fontFamily,
            fontSize: p.clash ? 12 : 13,
            fontWeight: 700,
            color: colors.text,
            textAlign: "center",
            lineHeight: 1.05,
            padding: 4,
            whiteSpace: "pre-line",
          }}
        >
          {p.label}
        </div>
      ))}
    </div>
  );
};

/* ─── SLIDE 1: COVER ─────────────────────────────── */

const CoverSlide: React.FC = () => (
  <Slide
    style={{
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      padding: 52,
    }}
  >
    <div style={{ position: "absolute", top: 48, left: 56, right: 56 }}>
      <AccentLine direction="center" />
    </div>

    <Label style={{ marginBottom: 4 }}>
      LLM GRUNDLAGEN &nbsp;|&nbsp; EMBEDDINGS
    </Label>

    <Avatar size={200} glowIntensity="strong" />

    <ContentBox
      variant="raisedStrong"
      accentBorder="top"
      style={{
        padding: "36px 40px",
        marginTop: 12,
        textAlign: "center",
        width: "100%",
        maxWidth: 920,
      }}
    >
      <div
        style={{
          fontFamily: jetbrainsMono.fontFamily,
          fontWeight: 700,
          fontSize: 40,
          color: colors.text,
          letterSpacing: 0.5,
          lineHeight: 1.4,
        }}
      >
        <div>
          <span style={{ color: colors.accent }}>K&Ouml;NIG</span>
          {" \u2212 "}
          <span>MANN</span>
          {" + "}
          <span style={{ color: colors.accent }}>FRAU</span>
          {" ="}
        </div>
        <div style={{ marginTop: 10, fontSize: 48, letterSpacing: 1 }}>
          <span style={{ color: colors.accent }}>K&Ouml;NIGIN</span>
        </div>
      </div>
      <Label style={{ marginTop: 20, fontSize: 20, opacity: 0.55 }}>
        MIT W&Ouml;RTERN RECHNEN &mdash; EIN EMBEDDING-EXKURS
      </Label>
    </ContentBox>

    <Subhead style={{ textAlign: "center", maxWidth: 780, fontSize: 30, marginTop: 8 }}>
      Keine Magie: Bedeutung wird zu Koordinaten im Vektorraum.
    </Subhead>

    <ContentBox variant="inset" style={{ padding: "10px 28px", borderRadius: 40, marginTop: 8 }}>
      <Label style={{ fontSize: 16, opacity: 0.6, letterSpacing: 1.5 }}>
        DIDAKTIK NACH CMU WORD EMBEDDING DEMO
      </Label>
    </ContentBox>

    <div style={{ position: "absolute", bottom: 44 }}>
      <SwipeHint />
    </div>
  </Slide>
);

/* ─── SLIDE 2: GRUNDIDEE ─────────────────────────── */

const GrundideeSlide: React.FC = () => (
  <SlideLayout slideNumber={2} totalSlides={EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT} watermark="02">
    <Headline size="md" style={{ marginBottom: 14 }}>
      W&Ouml;RTER SIND ZAHLEN
    </Headline>
    <Subhead style={{ fontSize: 26, opacity: 0.68, marginBottom: 28 }}>
      Ein Embedding ist eine lange Liste von Koordinaten.
      <br />
      <Highlight>Nah im Raum</Highlight> hei&szlig;t: &auml;hnliche Bedeutung.
    </Subhead>

    <ContentBox variant="raised" style={{ padding: "28px 32px", marginBottom: 24 }}>
      <Label style={{ marginBottom: 12, opacity: 0.55 }}>BEISPIEL (VERK&Uuml;RZT)</Label>
      <div
        style={{
          fontFamily: jetbrainsMono.fontFamily,
          fontSize: 30,
          fontWeight: 600,
          color: colors.text,
          lineHeight: 1.6,
          wordBreak: "break-all",
        }}
      >
        &ldquo;K&ouml;nig&rdquo; &rarr; [&nbsp;
        <span style={{ color: colors.accent }}>&minus;1</span>
        , 36,{" "}
        <span style={{ color: colors.accent }}>1</span>
        , 0.02, &minus;0.41, &hellip; , 0.17&nbsp;]
      </div>
      <Body size="sm" style={{ marginTop: 14, opacity: 0.72 }}>
        In Produktion sind es typischerweise Hunderte Dimensionen &mdash; hier nur zur Intuition.
      </Body>
    </ContentBox>

    <ContentBox variant="inset" accentBorder="left" style={{ padding: "22px 28px" }}>
      <Body size="md" style={{ lineHeight: 1.55, opacity: 0.88 }}>
        Der Computer hat kein Bild von &bdquo;K&ouml;nig&ldquo;. Er hat nur diese Zahlen &mdash; und
        Abst&auml;nde dazwischen.
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 3: 2D BASIS ───────────────────────────── */

const Table2DBaseSlide: React.FC = () => {
  const rows: TableRow[] = [
    { word: "Mann", g: -1, a: 36 },
    { word: "Frau", g: 1, a: 36 },
    { word: "Junge", g: -1, a: 12 },
    { word: "Mädchen", g: 1, a: 12 },
  ];
  return (
    <SlideLayout slideNumber={3} totalSlides={EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT} watermark="03">
      <Headline size="md" style={{ marginBottom: 12 }}>
        ZWEI ACHSEN REICHEN F&Uuml;R DEN START
      </Headline>
      <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 20 }}>
        G = grobe Geschlechtsskala, A = Alter (didaktisches Spiel).
      </Subhead>

      <EmbeddingTable rows={rows} />

      <Body size="sm" style={{ marginTop: 18, opacity: 0.75 }}>
        Jede Zeile ist ein Punkt im Koordinatensystem. Abstand im Diagramm modelliert inhaltliche N&auml;he.
      </Body>
    </SlideLayout>
  );
};

/* ─── SLIDE 4: ERWEITERUNG ───────────────────────── */

const TableExtendedSlide: React.FC = () => {
  const rows: TableRow[] = [
    { word: "Mann", g: -1, a: 36 },
    { word: "Frau", g: 1, a: 36 },
    { word: "Junge", g: -1, a: 12 },
    { word: "Mädchen", g: 1, a: 12 },
    { word: "Großvater", g: -1, a: 70 },
    { word: "Erwachsener", g: 0, a: 36 },
    { word: "Kind", g: 0, a: 10 },
  ];
  return (
    <SlideLayout slideNumber={4} totalSlides={EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT} watermark="04">
      <Headline size="md" style={{ marginBottom: 12 }}>
        MEHR W&Ouml;RTER, GLEICHES PRINZIP
      </Headline>
      <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 18 }}>
        Neue Begriffe = neue Punkte zwischen den Achsen.
      </Subhead>

      <EmbeddingTable rows={rows} compact />

      <ContentBox
        variant="flat"
        accentBorder="left"
        style={{
          marginTop: 18,
          padding: "12px 0 12px 22px",
          borderRadius: 0,
          background: "transparent",
        }}
      >
        <Body size="sm" style={{ opacity: 0.82 }}>
          <Highlight>Bedeutung ist Position</Highlight> &mdash; nicht Buchstabensalat.
        </Body>
      </ContentBox>
    </SlideLayout>
  );
};

/* ─── SLIDE 5: KOLLISION ─────────────────────────── */

const CollisionSlide: React.FC = () => (
  <SlideLayout slideNumber={5} totalSlides={EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT} watermark="05">
    <Headline size="md" style={{ marginBottom: 12 }}>
      WARUM 2D F&Uuml;R &bdquo;K&Ouml;NIG&ldquo; NICHT REICHT
    </Headline>
    <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 16 }}>
      Mit nur G und A landen <Highlight>K&ouml;nig</Highlight> und <Highlight>Mann</Highlight> auf
      demselben Punkt.
    </Subhead>

    <Scatter2D
      points={[
        { label: "Mann /\nKönig", gx: -1, ay: 36, clash: true },
        { label: "Frau", gx: 1, ay: 36 },
        { label: "Junge", gx: -1, ay: 12 },
        { label: "Mäd.", gx: 1, ay: 12 },
      ]}
    />

    <ContentBox variant="raisedStrong" style={{ marginTop: 20, padding: "22px 28px" }}>
      <Body size="md" style={{ textAlign: "center", lineHeight: 1.5 }}>
        Wir brauchen eine <Highlight>dritte Achse</Highlight>, um z. B. &bdquo;Adel&ldquo; vom
        normalen Erwachsenen zu trennen.
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── 3D Merkmalsraum – perspective scatter (fig3-style) ─────────── */

const EmbeddingMerkmalsraum3D: React.FC = () => {
  // Projection: gn=0 male(left), gn=1 female(right);
  //             an=0 young(bottom), an=1 adult(top);
  //             zn=0 non-royal(front), zn=1 royal(back-right)
  const ox = 185, oy = 430;
  const gS = 310, aS = 185, dxZ = 155, dyZ = 88;

  const proj = (gn: number, an: number, zn: number) => ({
    x: ox + gn * gS + zn * dxZ,
    y: oy - an * aS - zn * dyZ,
  });

  const J  = proj(0, 0, 0); // Junge       (185, 430)
  const Md = proj(1, 0, 0); // Mädchen     (495, 430)
  const Mn = proj(0, 1, 0); // Mann        (185, 245)
  const Fr = proj(1, 1, 0); // Frau        (495, 245)
  const Pr = proj(0, 0, 1); // Prinz       (340, 342)
  const Ps = proj(1, 0, 1); // Prinzessin  (650, 342)
  const Ko = proj(0, 1, 1); // König       (340, 157)
  const Kg = proj(1, 1, 1); // Königin     (650, 157)

  const gridC  = "rgba(240,247,248,0.09)";
  const edgeC  = "rgba(240,247,248,0.22)";
  const axisC  = "rgba(240,247,248,0.58)";
  const dropNR = "rgba(240,247,248,0.32)";
  const dropR  = "rgba(192,86,64,0.50)";
  const mono   = jetbrainsMono.fontFamily;

  const nonRoyal = [
    { p: J,  lbl: "Junge",   lx: -18, ly:  26, anch: "end"   as const },
    { p: Md, lbl: "Mädchen", lx:  18, ly:  26, anch: "start" as const },
    { p: Mn, lbl: "Mann",    lx: -18, ly:  -5, anch: "end"   as const },
    { p: Fr, lbl: "Frau",    lx:  18, ly:  -5, anch: "start" as const },
  ];

  const royal = [
    { p: Pr, lbl: "Prinz",      lx: -18, ly:  26, anch: "end"   as const },
    { p: Ps, lbl: "Prinzessin", lx:  18, ly:  26, anch: "start" as const },
    { p: Ko, lbl: "König",      lx: -18, ly:  -5, anch: "end"   as const },
    { p: Kg, lbl: "Königin",    lx:  18, ly:  -5, anch: "start" as const },
  ];

  return (
    <svg
      viewBox="0 0 920 490"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block" }}
    >
      <defs>
        <marker id="ax3d" markerWidth="8" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0,0 8,3 0,6" fill={axisC} />
        </marker>
      </defs>

      {/* ── Faces (painted first, behind everything) ─────────────── */}
      {/* Floor: an=0 plane – J, Md, Ps, Pr */}
      <path
        d={`M${J.x},${J.y} L${Md.x},${Md.y} L${Ps.x},${Ps.y} L${Pr.x},${Pr.y}Z`}
        fill="rgba(0,0,0,0.20)"
        stroke={edgeC}
        strokeWidth={1.5}
      />
      {/* Left face: gn=0 plane – J, Mn, Ko, Pr */}
      <path
        d={`M${J.x},${J.y} L${Mn.x},${Mn.y} L${Ko.x},${Ko.y} L${Pr.x},${Pr.y}Z`}
        fill="rgba(0,0,0,0.12)"
        stroke={edgeC}
        strokeWidth={1.5}
      />

      {/* ── Grid lines ───────────────────────────────────────────── */}
      {/* Floor mid-G at zn=0.5 */}
      <line x1={proj(0,0,.5).x} y1={proj(0,0,.5).y} x2={proj(1,0,.5).x} y2={proj(1,0,.5).y} stroke={gridC} strokeWidth={1} />
      {/* Floor mid-Z at gn=0.5 */}
      <line x1={proj(.5,0,0).x} y1={proj(.5,0,0).y} x2={proj(.5,0,1).x} y2={proj(.5,0,1).y} stroke={gridC} strokeWidth={1} />
      {/* Left-face mid-A at zn=0.5 */}
      <line x1={proj(0,0,.5).x} y1={proj(0,0,.5).y} x2={proj(0,1,.5).x} y2={proj(0,1,.5).y} stroke={gridC} strokeWidth={1} />
      {/* Left-face mid-Z at an=0.5 */}
      <line x1={proj(0,.5,0).x} y1={proj(0,.5,0).y} x2={proj(0,.5,1).x} y2={proj(0,.5,1).y} stroke={gridC} strokeWidth={1} />

      {/* ── Remaining box edges (not covered by face strokes) ────── */}
      <line x1={Md.x} y1={Md.y} x2={Fr.x} y2={Fr.y} stroke={edgeC} strokeWidth={1.5} />
      <line x1={Mn.x} y1={Mn.y} x2={Fr.x} y2={Fr.y} stroke={edgeC} strokeWidth={1.5} />
      <line x1={Ko.x} y1={Ko.y} x2={Kg.x} y2={Kg.y} stroke={edgeC} strokeWidth={1.5} />
      <line x1={Ps.x} y1={Ps.y} x2={Kg.x} y2={Kg.y} stroke={edgeC} strokeWidth={1.5} />
      <line x1={Fr.x} y1={Fr.y} x2={Kg.x} y2={Kg.y} stroke={edgeC} strokeWidth={1.5} />

      {/* ── Axis arrows ──────────────────────────────────────────── */}
      <line x1={J.x - 8} y1={J.y}     x2={Md.x + 42} y2={Md.y}      stroke={axisC} strokeWidth={2} markerEnd="url(#ax3d)" />
      <line x1={J.x}     y1={J.y + 8} x2={Mn.x}       y2={Mn.y - 32} stroke={axisC} strokeWidth={2} markerEnd="url(#ax3d)" />
      <line x1={J.x}     y1={J.y}     x2={Pr.x + 20}  y2={Pr.y - 11} stroke={axisC} strokeWidth={2} markerEnd="url(#ax3d)" />

      {/* Axis labels */}
      <text x={Md.x + 50} y={Md.y + 6}  fill={axisC} style={{ fontFamily: mono, fontSize: 15, fontWeight: 600 }} textAnchor="start">G (Geschlecht)</text>
      <text x={Mn.x - 10} y={Mn.y - 38} fill={axisC} style={{ fontFamily: mono, fontSize: 15, fontWeight: 600 }} textAnchor="end">A (Alter)</text>
      <text x={Pr.x + 28} y={Pr.y - 9}  fill={axisC} style={{ fontFamily: mono, fontSize: 15, fontWeight: 600 }} textAnchor="start">Adel</text>

      {/* ── Vertical drop lines (adult → floor) ──────────────────── */}
      <line x1={Mn.x} y1={Mn.y} x2={J.x}  y2={J.y}  stroke={dropNR} strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={Fr.x} y1={Fr.y} x2={Md.x} y2={Md.y} stroke={dropNR} strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={Ko.x} y1={Ko.y} x2={Pr.x} y2={Pr.y} stroke={dropR}  strokeWidth={1.5} strokeDasharray="5 4" />
      <line x1={Kg.x} y1={Kg.y} x2={Ps.x} y2={Ps.y} stroke={dropR}  strokeWidth={1.5} strokeDasharray="5 4" />

      {/* ── Non-royal points ─────────────────────────────────────── */}
      {nonRoyal.map(({ p, lbl, lx, ly, anch }) => (
        <g key={lbl}>
          <circle
            cx={p.x} cy={p.y} r={14}
            fill={colors.primaryLight}
            stroke="rgba(240,247,248,0.42)"
            strokeWidth={2}
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.5))" }}
          />
          <text
            x={p.x + lx} y={p.y + ly}
            fill={colors.text}
            textAnchor={anch}
            style={{ fontFamily: mono, fontSize: 15, fontWeight: 700 }}
          >
            {lbl}
          </text>
        </g>
      ))}

      {/* ── Royal points ─────────────────────────────────────────── */}
      {royal.map(({ p, lbl, lx, ly, anch }) => (
        <g key={lbl}>
          <circle
            cx={p.x} cy={p.y} r={16}
            fill={colors.accent}
            stroke="rgba(232,160,144,0.55)"
            strokeWidth={2.5}
            style={{ filter: "drop-shadow(0 2px 10px rgba(192,86,64,0.6))" }}
          />
          <text
            x={p.x + lx} y={p.y + ly}
            fill={colors.text}
            textAnchor={anch}
            style={{ fontFamily: mono, fontSize: 15, fontWeight: 700 }}
          >
            {lbl}
          </text>
        </g>
      ))}
    </svg>
  );
};

/* ─── SLIDE 6: ADEL-SPALTEN ──────────────────────── */

const AdelSlide: React.FC = () => {
  const rows: TableRow[] = [
    { word: "Mann", g: -1, a: 36, z: 0 },
    { word: "Frau", g: 1, a: 36, z: 0 },
    { word: "Junge", g: -1, a: 12, z: 0 },
    { word: "Mädchen", g: 1, a: 12, z: 0 },
    { word: "König", g: -1, a: 36, z: 1, highlight: "accent" },
    { word: "Königin", g: 1, a: 36, z: 1, highlight: "accent" },
    { word: "Prinz", g: -1, a: 12, z: 1, highlight: "accent" },
    { word: "Prinzessin", g: 1, a: 12, z: 1, highlight: "accent" },
  ];
  return (
    <SlideLayout
      slideNumber={6}
      totalSlides={EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT}
      watermark="06"
      style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
          gap: 0,
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <Headline size="md" style={{ marginBottom: 6, fontSize: 42, letterSpacing: 1.5 }}>
            DRITTE DIMENSION: ADEL
          </Headline>
          <Subhead style={{ fontSize: 22, opacity: 0.65, marginBottom: 8, lineHeight: 1.35 }}>
            Gleiches G/A, aber getrennt entlang <Highlight>z</Highlight>.
          </Subhead>

          <EmbeddingTable rows={rows} showZ zLabel="ADEL" compact />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: 0,
            marginTop: 10,
          }}
        >
          <Body
            size="sm"
            style={{
              flexShrink: 0,
              opacity: 0.7,
              lineHeight: 1.3,
              fontSize: 20,
              marginBottom: 6,
            }}
          >
            Dieselben W&ouml;rter im 3D-Raum (G, A, Adel):
          </Body>

          <div
            style={{
              flex: 1,
              minHeight: 500,
              alignSelf: "stretch",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: shadows.raised,
              border: "1px solid rgba(240,247,248,0.08)",
              background: colors.container,
              padding: "12px 16px 8px 16px",
            }}
          >
            <EmbeddingMerkmalsraum3D />
          </div>

          <Label
            style={{
              flexShrink: 0,
              marginTop: 6,
              fontSize: 13,
              opacity: 0.45,
              textAlign: "center",
              letterSpacing: 0.5,
              textTransform: "none",
            }}
          >
            Gestrichelt: gleiches G + gleicher Adel, nur Alter ver&auml;ndert (wie in der Tabelle)
          </Label>
        </div>
      </div>
    </SlideLayout>
  );
};

/* ─── SLIDE 7: RECHNUNG ──────────────────────────── */

const MathSlide: React.FC = () => (
  <SlideLayout slideNumber={7} totalSlides={EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT} watermark="07">
    <Headline size="md" style={{ marginBottom: 12 }}>
      K&Ouml;NIG &minus; MANN + FRAU
    </Headline>
    <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 18 }}>
      Vektorweise, Koordinate f&uuml;r Koordinate &mdash; das ist die Analogie im Raum.
    </Subhead>

    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <ContentBox variant="inset" style={{ padding: "20px 26px" }}>
        <div style={{ ...mono, fontSize: 26, color: colors.textMuted, marginBottom: 10 }}>
          SCHRITT 1
        </div>
        <div style={{ ...mono, fontSize: 32, color: colors.text, lineHeight: 1.5 }}>
          K&ouml;nig [&minus;1, 36, <span style={{ color: colors.accent }}>1</span>] &minus; Mann
          [&minus;1, 36, <span style={{ color: colors.accent }}>0</span>] = Diff [
          <span style={{ color: colors.accent }}>0, 0, 1</span>]
        </div>
      </ContentBox>

      <ContentBox variant="raised" accentBorder="left" style={{ padding: "20px 26px" }}>
        <div style={{ ...mono, fontSize: 26, color: colors.textMuted, marginBottom: 10 }}>
          SCHRITT 2
        </div>
        <div style={{ ...mono, fontSize: 32, color: colors.text, lineHeight: 1.5 }}>
          Frau [1, 36, 0] + Diff [0, 0, 1] ={" "}
          <span style={{ color: colors.accent }}>[1, 36, 1]</span> &asymp; K&ouml;nigin
        </div>
      </ContentBox>
    </div>

    <ContentBox variant="raisedStrong" style={{ marginTop: 18, padding: "20px 26px" }}>
      <Body size="md" style={{ textAlign: "center", lineHeight: 1.45 }}>
        Inhaltliche Analogien werden hier zu <Highlight>linearen Verschiebungen</Highlight> &mdash;
        deshalb funktioniert die Rechen-Idee in Demos zuverl&auml;ssig.
      </Body>
    </ContentBox>
  </SlideLayout>
);

/* ─── SLIDE 8: SKALIERUNG ────────────────────────── */

const ScaleSlide: React.FC = () => (
  <SlideLayout slideNumber={8} totalSlides={EMBEDDINGS_VEKTORRAUM_SLIDE_COUNT} watermark="08">
    <Headline size="md" style={{ marginBottom: 14 }}>
      VON SPIELZAHLEN ZUR REALIT&Auml;T
    </Headline>
    <Subhead style={{ fontSize: 26, opacity: 0.65, marginBottom: 28 }}>
      Die Tabelle oben ist nur zum Verstehen. Echte Embeddings sind hochdimensional.
    </Subhead>

    <ContentBox variant="raisedStrong" style={{ padding: "40px 36px", textAlign: "center", marginBottom: 24 }}>
      <div
        style={{
          fontFamily: jetbrainsMono.fontFamily,
          fontWeight: 700,
          fontSize: 90,
          color: colors.accent,
          lineHeight: 1,
          textShadow: shadows.glow(colors.accent, 20),
        }}
      >
        300+
      </div>
      <Label style={{ marginTop: 20, fontSize: 26, opacity: 0.55 }}>
        DIMENSIONEN (OFT DEUTLICH MEHR)
      </Label>
    </ContentBox>

    <ContentBox variant="raised" style={{ padding: "26px 32px" }}>
      <Body size="lg" style={{ lineHeight: 1.55, opacity: 0.88 }}>
        Niemand tr&auml;gt Millionen W&ouml;rter von Hand ein. Modelle lernen die Koordinaten aus
        riesigen Textmengen &mdash; W&ouml;rter in &auml;hnlichen Kontexten ziehen zusammen.
      </Body>
    </ContentBox>

    <Body size="md" style={{ marginTop: 22, opacity: 0.65 }}>
      Moderne LLMs sind noch feiner (kontextabh&auml;ngig). Die Geometrie-Idee bleibt trotzdem der
      Draht unter Suche und RAG.
    </Body>
  </SlideLayout>
);

/* ─── SLIDE 9: RAG / CTA ─────────────────────────── */

const RagSlide: React.FC = () => (
  <Slide style={{ alignItems: "center", justifyContent: "center", gap: 22, padding: 56 }}>
    <div
      style={{
        position: "absolute",
        top: "18%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 480,
        height: 480,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(192,86,64,0.12) 0%, rgba(17,101,120,0.06) 45%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />

    <div style={{ zIndex: 1, textAlign: "center" }}>
      <Label style={{ opacity: 0.55, marginBottom: 8 }}>PRAXIS</Label>
      <Headline size="lg" style={{ fontSize: 52, lineHeight: 1.12 }}>
        DOKUMENTE
        <br />
        DURCHSUCHEN
      </Headline>
    </div>

    <ContentBox
      variant="raised"
      accentBorder="top"
      style={{ padding: "32px 40px", maxWidth: 900, zIndex: 1 }}
    >
      <Body size="lg" style={{ textAlign: "center", lineHeight: 1.5 }}>
        Statt stumpfer Stichwortsuche sucht die Pipeline oft nach dem{" "}
        <Highlight>n&auml;chsten Nachbarn</Highlight> im Vektorraum &mdash; dieselbe Idee wie
        &bdquo;nah&ldquo; im Embedding.
      </Body>
    </ContentBox>

    <ContentBox variant="inset" style={{ padding: "14px 22px", zIndex: 1, maxWidth: 920 }}>
      <Body size="sm" style={{ textAlign: "center", opacity: 0.72, lineHeight: 1.45 }}>
        Tutorial mit Nachrechnen (CMU):
        <br />
        https://www.cs.cmu.edu/~dst/WordEmbeddingDemo/tutorial.html
      </Body>
    </ContentBox>

    <Avatar size={180} glowIntensity="medium" />

    <Headline size="sm" style={{ textAlign: "center", zIndex: 1 }}>
      DUSTIN WALKER
    </Headline>
    <Label style={{ textAlign: "center", fontSize: 20, opacity: 0.5, zIndex: 1 }}>
      Gen AI Engineer @ Alexander Thamm
    </Label>

    <Button style={{ marginTop: 8, zIndex: 1 }}>VERNETZEN &rarr;</Button>
  </Slide>
);

/* ─── COMPOSITION ────────────────────────────────── */

export const EmbeddingsVektorraumCarousel: React.FC = () => {
  const frame = useCurrentFrame();
  const slides = [
    <CoverSlide key="1" />,
    <GrundideeSlide key="2" />,
    <Table2DBaseSlide key="3" />,
    <TableExtendedSlide key="4" />,
    <CollisionSlide key="5" />,
    <AdelSlide key="6" />,
    <MathSlide key="7" />,
    <ScaleSlide key="8" />,
    <RagSlide key="9" />,
  ];
  return slides[frame] ?? null;
};
