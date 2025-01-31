import { ASSETS } from "./asset-data";
import { generateIcon } from "./generate-icon";

export interface LeveragedToken {
  asset: string;
  leverage: number;
  long: boolean;
}

const symbolToLeveragedToken = (symbol: string): LeveragedToken => {
  const result = /([A-Z]+)([0-9]+)(L|S)/.exec(symbol);
  if (result === null) throw new Error("Invalid token symbol");
  const [_, asset, leverageString, longString] = result!;
  return { asset, leverage: Number(leverageString), long: longString === "L" };
};

export async function generateIcons(params: {
  token: string | null;
  asset: string | null;
  pixels: string;
}): Promise<{ message: string }> {
  // Validate params
  if (params.token && params.asset) {
    return { message: "Cannot specify both token and asset" };
  }

  // Parse pixels
  let pxNumber = 0;
  try {
    pxNumber = parseInt(params.pixels, 10);
    if (isNaN(pxNumber)) return { message: "Invalid px value" };
  } catch (e) {
    return { message: "Invalid px value" };
  }

  // Generate icons
  if (params.token) {
    const lt = symbolToLeveragedToken(params.token);
    if (lt.leverage === 0) {
      return { message: "Invalid token" };
    }
    await generateIcon(lt, pxNumber);
  } else {
    const leverages = [3];
    const longs = [true, false];
    for (const leverage of leverages) {
      for (const long of longs) {
        if (params.asset) {
          await generateIcon({ asset: params.asset, leverage, long }, pxNumber);
        } else {
          for (const asset of ASSETS) {
            await generateIcon({ asset, leverage, long }, pxNumber);
          }
        }
      }
    }
  }
  return { message: "Complete" };
}
