import { LeveragedToken } from ".";

import * as PImage from "pureimage";
import * as fs from "fs";

export async function generateIcon(
  leveragedToken: LeveragedToken,
  px: number
): Promise<void> {
  const symbol = `${leveragedToken.asset}${leveragedToken.leverage}${
    leveragedToken.long ? "L" : "S"
  }`;
  console.log(`Generating: ${symbol} (${px}px)`);

  // make image
  const img1 = PImage.make(px, px);

  // get canvas context
  const ctx = img1.getContext("2d");

  // fill with red
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, px, px);

  //write to 'out.png'
  fs.mkdirSync("icons", { recursive: true });
  try {
    await PImage.encodePNGToStream(
      img1,
      fs.createWriteStream(`icons/${symbol}.png`)
    );
    console.log(`Generated: ${symbol}`);
  } catch (e) {
    console.log(`Error generating: ${symbol}`);
    console.log(e);
  }
}
