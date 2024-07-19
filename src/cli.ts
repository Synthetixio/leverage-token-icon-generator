#!/usr/bin/env node

import { program } from "commander";

import { generateIcons } from "./index";

program
  .version("1.0.0")
  .option(
    "-a, --asset [symbol]",
    "Leveraged Token Symbol to generate icon for (e.g. BTC2L). Defaults to generating all icons"
  )
  .option("-p, --px [size]", "Size of the icon in pixels [32]", "32")
  .parse(process.argv);

const options = program.opts();

generateIcons({
  asset: options.asset,
  px: options.px,
}).then((result) => console.log(result.message));
