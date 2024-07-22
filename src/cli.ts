#!/usr/bin/env node

import { program } from "commander";

import { generateIcons } from "./index";

program
  .version("1.0.0")
  .option(
    "-a, --asset [symbol]",
    "Asset to generate icons for (e.g. BTC). Defaults to generating all icons"
  )
  .option(
    "-t, --token [symbol]",
    "Leveraged Token Symbol to generate icon for (e.g. BTC2L). Defaults to generating all icons"
  )
  .option("-p, --pixels [size]", "Size of the icon in pixels [500]", "500")
  .parse(process.argv);

const options = program.opts();

generateIcons({
  asset: options.asset,
  pixels: options.pixels,
  token: options.token,
}).then((result) => console.log(result.message));
