import { LeveragedToken } from ".";
import * as fs from "fs";
import { createCanvas, Image } from "canvas";

const ASSET_ICON_PERCENT = 0.66666;

export async function generateIcon(
  lt: LeveragedToken,
  px: number
): Promise<void> {
  const symbol = `${lt.asset}${lt.leverage}${lt.long ? "L" : "S"}`;
  console.log(`Generating: ${symbol} (${px}px)`);

  // Create canvas
  const canvas = createCanvas(px, px);
  const ctx = canvas.getContext("2d");

  // Draw circle
  ctx.beginPath();
  ctx.arc(px / 2, px / 2, px / 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = "pink";
  ctx.fill();

  // Draw Asset on canvas
  const img = new Image();
  const asssetSize = px * ASSET_ICON_PERCENT;
  const start = (px - asssetSize) / 2;
  img.onload = () => ctx.drawImage(img, start, start, asssetSize, asssetSize);
  img.src = `./asset-icons/${lt.asset}.png`;

  // Write to file
  try {
    fs.mkdirSync("icons", { recursive: true });
    const out = fs.createWriteStream(`icons/${symbol}.png`);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
  } catch (e) {
    console.log(`Error generating: ${symbol}`);
    console.log(e);
    return;
  }

  console.log(`Generated: ${symbol}`);
}
