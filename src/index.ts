import { ASSETS } from "./asset-data";
import { generateIcon } from "./generate-icon";

export interface LeveragedToken {
  asset: string;
  leverage: number;
  long: boolean;
}

function symbolToLeveragedToken(symbol: string): LeveragedToken {
  let asset = "";
  let leverage = 0;
  let long = false;
  const chars = symbol.split("");
  for (const char of chars) {
    if (/[a-zA-Z]/.test(char) && leverage === 0) {
      asset += char;
    } else if (/[0-9]/.test(char)) {
      leverage = parseInt(char, 10);
    } else {
      long = char === "L";
    }
  }

  return { asset, leverage, long };
}

export async function generateIcons(params: {
  asset: string | null;
  pixels: string;
}): Promise<{ message: string }> {
  // Parse pixels
  let pxNumber = 0;
  try {
    pxNumber = parseInt(params.pixels, 10);
    if (isNaN(pxNumber)) return { message: "Invalid px value" };
  } catch (e) {
    return { message: "Invalid px value" };
  }

  // Generate icons
  if (params.asset) {
    await generateIcon(symbolToLeveragedToken(params.asset), pxNumber);
  } else {
    const leverages = [1, 2, 3, 4, 5, 7];
    const longs = [true, false];

    for (const asset of ASSETS) {
      for (const leverage of leverages) {
        for (const long of longs) {
          await generateIcon({ asset, leverage, long }, pxNumber);
        }
      }
    }
  }
  return { message: "Complete" };
}
