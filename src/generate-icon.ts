import { LeveragedToken } from ".";
import * as fs from "fs";
import { createCanvas, Image } from "canvas";
import ASSET_DATA from "./asset-data";

const ASSET_ICON_PERCENT = 0.57;

export async function generateIcon(
  lt: LeveragedToken,
  px: number
): Promise<void> {
  const symbol = `${lt.asset}${lt.leverage}${lt.long ? "L" : "S"}`;
  console.log(`Generating: ${symbol} (${px}px)`);

  const assetData = ASSET_DATA[lt.asset];
  if (!assetData) {
    console.log(`No asset data for: ${lt.asset}`);
    return;
  }

  // Create canvas
  const canvas = createCanvas(px, px);
  const ctx = canvas.getContext("2d");

  // Draw circle
  ctx.beginPath();
  ctx.arc(px / 2, px / 2, px / 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = "#1f1f1f";
  ctx.fill();
  if (assetData.secondaryColor) {
    const gradient = ctx.createLinearGradient(0, px, px, 0);
    gradient.addColorStop(0, assetData.color);
    gradient.addColorStop(1, assetData.secondaryColor);
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.4;
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "saturation";
    ctx.fillStyle = "hsl(0,28%,50%)";
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  } else {
    ctx.fillStyle = assetData.color;
    ctx.globalAlpha = 0.4;
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Draw Asset on canvas
  const img = new Image();
  const asssetSize = px * ASSET_ICON_PERCENT;
  const start = (px - asssetSize) / 2;
  img.onload = () => ctx.drawImage(img, start, start, asssetSize, asssetSize);
  img.src = `./asset-icons/${lt.asset}.png`;

  // Write to file
  try {
    fs.mkdirSync(`icons/${lt.asset}`, { recursive: true });
    const out = fs.createWriteStream(`icons/${lt.asset}/${symbol}.png`);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
  } catch (e) {
    console.log(`Error generating: ${symbol}`);
    console.log(e);
    return;
  }

  console.log(`Generated: ${symbol}`);
}
