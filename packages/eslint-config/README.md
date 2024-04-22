# @ahiho/eslint-config

Ahiho's full ESLint config.

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Requirement

- [NodeJS](https://nodejs.org) (version >= 18.0.0 and <= 21.x.x)

## Installation

```shell
yarn add --dev @ahiho/eslint-config
```

## Usage

The ESLint config should be applied to a package's `package.json` in a Lerna project.

The config will automatically detect if there is Typescript or React in the package and apply corresponding configs.

```text
"eslintConfig": {
  "extends": [
    "@ahiho/eslint-config"
  ]
},
```
