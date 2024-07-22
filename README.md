# Leveraged Token Icon Generator

This is a CLI tool used to generate the icons of the TLX Leveraged Tokens.

## Dependencies

- Install [Node](https://nodejs.org/en/download/package-manager)
- Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- Install [Node Canvas Dependencies](https://github.com/Automattic/node-canvas?tab=readme-ov-file#compiling)

## How to run

- Install packages with `yarn`
- Run script with `yarn start`
- To generate for a specific asset, run `yarn start --asset [SYMBOL]` (e.g. `yarn start --asset BTC`)
- To generate for a specific token, run `yarn start --token [SYMBOL]` (e.g. `yarn start --token BTC2L`)
- To select size of the output, run `yarn start --pixels [SIZE]` (e.g. `yarn start --pixels 500`)
