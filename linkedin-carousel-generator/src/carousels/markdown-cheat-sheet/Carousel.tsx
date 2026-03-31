import React from "react";
import { useCurrentFrame } from "remotion";
import { Slide } from "../../shared/components";
import { SLIDE_HEIGHT, SLIDE_WIDTH } from "../../shared/theme";
import { playfairDisplay, roboto, robotoMono } from "../../shared/fonts";

export const MARKDOWN_CHEAT_SHEET_SLIDE_COUNT = 1;

const paper = "#f8f7f2";
const teal = "#265a6a";
const accentBar = "#d14d33";
const rowAlt = "#f0f7f9";
const cardBg = "#ffffff";

/** Typography tuned for legibility on 1080×1350 (PDF is rendered @3×). */
const type = {
  title: 56,
  subtitle: 26,
  sectionTitle: 26,
  tableHead: 23,
  elementCell: 22,
  codeCell: 19,
  footer: 14,
} as const;

const space = {
  pagePadX: 28,
  pagePadY: 22,
  pagePadBottom: 16,
  headerBottom: 10,
  cardPad: "12px 14px 14px",
  cardGap: 8,
  sectionBarW: 5,
  thPad: "10px 12px",
  tdPad: "8px 12px",
} as const;

type Row = { element: string; markdown: string };

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: cardBg,
        borderRadius: 14,
        boxShadow: "0 6px 28px rgba(38, 90, 106, 0.1)",
        padding: space.cardPad,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            width: space.sectionBarW,
            minHeight: 28,
            alignSelf: "stretch",
            background: accentBar,
            borderRadius: 2,
          }}
        />
        <span
          style={{
            fontFamily: playfairDisplay.fontFamily,
            fontWeight: 800,
            fontSize: type.sectionTitle,
            color: "#121a1d",
            lineHeight: 1.2,
          }}
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

function TwoColumnTable({ rows }: { rows: Row[] }) {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        tableLayout: "fixed",
      }}
    >
      <colgroup>
        <col style={{ width: "30%" }} />
        <col style={{ width: "70%" }} />
      </colgroup>
      <thead>
        <tr style={{ background: teal, color: "#fff" }}>
          <th
            style={{
              fontFamily: playfairDisplay.fontFamily,
              fontWeight: 800,
              fontSize: type.tableHead,
              textAlign: "left",
              padding: space.thPad,
              lineHeight: 1.25,
            }}
          >
            Element
          </th>
          <th
            style={{
              fontFamily: playfairDisplay.fontFamily,
              fontWeight: 800,
              fontSize: type.tableHead,
              textAlign: "left",
              padding: space.thPad,
              lineHeight: 1.25,
            }}
          >
            Markdown
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={`${row.element}-${i}`}
            style={{ background: i % 2 === 1 ? rowAlt : "#fff" }}
          >
            <td
              style={{
                fontFamily: playfairDisplay.fontFamily,
                fontSize: type.elementCell,
                fontWeight: 600,
                color: "#121a1d",
                padding: space.tdPad,
                verticalAlign: "top",
                borderTop: "1px solid rgba(38,90,106,0.08)",
                lineHeight: 1.28,
              }}
            >
              {row.element}
            </td>
            <td
              style={{
                fontFamily: robotoMono.fontFamily,
                fontSize: type.codeCell,
                fontWeight: 700,
                color: "#0d0d0d",
                padding: space.tdPad,
                verticalAlign: "top",
                borderTop: "1px solid rgba(38,90,106,0.08)",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                lineHeight: 1.38,
                letterSpacing: 0,
              }}
            >
              {row.markdown}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const grundlagenRows: Row[] = [
  { element: "Überschrift 1", markdown: "# Überschrift eins" },
  { element: "Überschrift 2", markdown: "## Überschrift zwei" },
  { element: "Überschrift 3", markdown: "### Überschrift drei" },
  { element: "Kursiv", markdown: "*kursiver Text*" },
  { element: "Fett", markdown: "**fetter Text**" },
  { element: "Durchgestrichen", markdown: "~~durchgestrichen~~" },
  { element: "Zitat", markdown: "> Zitat" },
  { element: "Liste", markdown: "- Punkt" },
  { element: "Nummeriert", markdown: "1. Erster Punkt" },
  { element: "Inline-Code", markdown: "`code`" },
  { element: "Trennlinie", markdown: "---" },
  { element: "Link", markdown: "[Text](https://beispiel.de)" },
  { element: "Bild", markdown: "![Alt](bild.png)" },
];

const chatRows: Row[] = [
  {
    element: "Code-Block",
    markdown: "```json\n{ \"ok\": true }\n```",
  },
  {
    element: "Tabelle",
    markdown: "| A | B |\n| --- | --- |\n| x | y |",
  },
  {
    element: "Aufgaben",
    markdown: "- [ ] offen\n- [x] fertig",
  },
];

const CheatSheetPage: React.FC = () => (
  <div
    style={{
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
      boxSizing: "border-box",
      background: paper,
      display: "flex",
      flexDirection: "column",
      padding: `${space.pagePadY}px ${space.pagePadX}px ${space.pagePadBottom}px`,
    }}
  >
    <header
      style={{
        textAlign: "center",
        marginBottom: space.headerBottom,
        flexShrink: 0,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontFamily: playfairDisplay.fontFamily,
          fontWeight: 800,
          fontSize: type.title,
          lineHeight: 1.08,
          color: teal,
        }}
      >
        Markdown Cheat Sheet
      </h1>
      <p
        style={{
          margin: "8px 0 0",
          fontFamily: playfairDisplay.fontFamily,
          fontWeight: 600,
          fontSize: type.subtitle,
          color: "#2f3840",
          lineHeight: 1.25,
        }}
      >
        Für Chat bots und KI-Agenten
      </p>
    </header>

    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: space.cardGap,
        minHeight: 0,
        justifyContent: "flex-start",
      }}
    >
      <SectionCard title="Grundlagen">
        <TwoColumnTable rows={grundlagenRows} />
      </SectionCard>
      <SectionCard title="Oft in Chat-Interfaces">
        <TwoColumnTable rows={chatRows} />
      </SectionCard>
    </div>

    <footer
      style={{
        marginTop: 8,
        flexShrink: 0,
        textAlign: "center",
        fontFamily: roboto.fontFamily,
        fontWeight: 500,
        fontSize: type.footer,
        color: "rgba(45, 52, 58, 0.88)",
        lineHeight: 1.35,
      }}
    >
      Dustin Walker · Generative AI Engineer · Alexander Thamm GmbH —
      linkedin.com/in/dustin-walker-pro/
    </footer>
  </div>
);

export const MarkdownCheatSheet: React.FC = () => {
  const frame = useCurrentFrame();
  if (frame !== 0) return null;
  return (
    <Slide
      showDecorations={false}
      style={{
        background: paper,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <CheatSheetPage />
    </Slide>
  );
};
