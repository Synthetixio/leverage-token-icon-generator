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
    if (/[a-zA-Z]/.test(char)) {
      asset += char;
    } else if (/[0-9]/.test(char)) {
      leverage = parseInt(char, 10);
    } else {
      long = char === "L";
    }
  }

  return { asset, leverage, long };
}

export async function generateIcon(
  leveragedToken: LeveragedToken
): Promise<void> {
  console.log(
    `${leveragedToken.asset}${leveragedToken.leverage}${
      leveragedToken.long ? "L" : "S"
    }`
  );
}

export async function generateIcons(params: {
  asset: string | null;
  px: number;
}): Promise<{ message: string }> {
  console.log(params);
  if (params.asset) {
    await generateIcon(symbolToLeveragedToken(params.asset));
  } else {
    const assets = ["BTC", "ETH", "BNB"];
    const leverages = [1, 2, 3];
    const longs = [true, false];

    for (const asset of assets) {
      for (const leverage of leverages) {
        for (const long of longs) {
          await generateIcon({ asset, leverage, long });
        }
      }
    }
  }
  return { message: "Generated icons" };
}
