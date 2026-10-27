// Renders frames.html to PNGs in out/. Usage: node linkedin/render.js
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const FRAMES = [
  // name, css width, css height, scale, languages
  ["launch", 1080, 1350, 1, ["no", "en"]],
  ["farewell", 1080, 1350, 1, ["no", "en"]],
  ["offer", 1080, 1350, 1, ["no", "en"]],
  ["logo", 400, 400, 2, ["no"]],
  ["cover", 1200, 200, 3.5, ["no", "en"]],
  ["banner", 1584, 396, 2, ["no", "en"]],
  ["og", 1200, 630, 1, ["no", "en"]],
];

(async () => {
  const out = path.join(__dirname, "out");
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  for (const [f, w, h, scale, langs] of FRAMES) {
    for (const lang of langs) {
      const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: scale });
      await page.goto(`file://${path.join(__dirname, "frames.html")}?f=${f}&lang=${lang}`);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForLoadState("networkidle");
      const name = f === "logo" ? "novacoach-logo.png" : `novacoach-${f}-${lang}.png`;
      await page.screenshot({ path: path.join(out, name), clip: { x: 0, y: 0, width: w, height: h } });
      await page.close();
      console.log(name, `${w * scale}x${h * scale}`);
    }
  }
  await browser.close();
})();
