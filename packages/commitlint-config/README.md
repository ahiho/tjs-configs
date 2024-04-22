# @ahiho/commitlint-config

Ahiho's full commit lint config.

Read the [Commitlint docs](https://github.com/conventional-changelog/commitlint) for more information.

## Requirement

- [NodeJS](https://nodejs.org) (version >= 18.0.0 and <= 21.x.x)

## Installation

```shell
yarn add --dev @ahiho/commitlint-config
```

## Usage

The commitlint config should be applied to a package's `package.json` in a Lerna project.

```text
"commitlint": {
  "extends": [
    "@ahiho/commitlint-config"
  ]
},
```
