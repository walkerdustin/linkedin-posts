import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { PDFDocument } from "pdf-lib";
import fs from "node:fs";
import path from "node:path";

const RENDER_SCALE = 3;

const compositionId = process.argv[2];

if (!compositionId) {
  console.error("Usage: npm run render -- <carousel-name>");
  console.error("Example: npm run render -- example");
  process.exit(1);
}

async function main() {
  const outDir = path.resolve("./out");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("Bundling Remotion project...");
  const bundleLocation = await bundle({
    entryPoint: path.resolve("./src/index.ts"),
    publicDir: path.resolve("../assets"),
  });

  console.log(`Selecting composition "${compositionId}"...`);
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: compositionId,
  });

  const totalSlides = composition.durationInFrames;
  const w = composition.width;
  const h = composition.height;
  console.log(
    `Rendering ${totalSlides} slides at ${w}x${h} @${RENDER_SCALE}x (${w * RENDER_SCALE}x${h * RENDER_SCALE}px)...`
  );

  const imagePaths: string[] = [];

  for (let frame = 0; frame < totalSlides; frame++) {
    const outputPath = path.join(
      outDir,
      `_temp_${compositionId}_${frame}.png`
    );
    await renderStill({
      composition,
      serveUrl: bundleLocation,
      output: outputPath,
      frame,
      scale: RENDER_SCALE,
    });
    imagePaths.push(outputPath);
    console.log(`  Slide ${frame + 1}/${totalSlides} done.`);
  }

  console.log("Creating PDF...");
  const pdfDoc = await PDFDocument.create();
  const pageWidth = w;
  const pageHeight = h;

  for (const imgPath of imagePaths) {
    const imageBytes = fs.readFileSync(imgPath);
    const pngImage = await pdfDoc.embedPng(imageBytes);
    const page = pdfDoc.addPage([pageWidth, pageHeight]);
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: pageWidth,
      height: pageHeight,
    });
  }

  const pdfPath = path.join(outDir, `${compositionId}.pdf`);
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, pdfBytes);
  console.log(`\nPDF saved to ${pdfPath}`);

  const reviewDir = path.resolve("./review");
  if (fs.existsSync(reviewDir)) {
    fs.rmSync(reviewDir, { recursive: true });
  }
  fs.mkdirSync(reviewDir, { recursive: true });

  for (let i = 0; i < imagePaths.length; i++) {
    const dest = path.join(reviewDir, `slide-${i + 1}.png`);
    fs.copyFileSync(imagePaths[i], dest);
  }
  console.log(`Review PNGs saved to ${reviewDir}`);

  for (const imgPath of imagePaths) {
    fs.unlinkSync(imgPath);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
