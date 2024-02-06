# @ahiho/prettier-config

Ahiho's Prettier config.

Read the [Prettier config docs](https://prettier.io/docs/en/index.html) for more information.

## Requirement

- [NodeJS](https://nodejs.org) (version >= 14.x and <= 21)

## Installation

```shell
yarn add --dev @ahiho/prettier-config
```

## Usage

After installing, update `package.json` file to add the following properties.

```text
"prettier": "@ahiho/prettier-config",
```

The Prettier config can be applied to the root `package.json` in a Lerna project.

Additionally, you can use the following binaries to run Prettier with the default glob `js,jsx,mjs,ts,tsx,json,md,yml,yaml`.

```text
"scripts": {
  "format:check": "prettier-config check",
  "format:write": "prettier-config write",
},
```
