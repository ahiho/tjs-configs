# @ahiho/eslint-config-typescript

Ahiho's TypeScript ESLint config extras.

Read the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Requirement

- [NodeJS](https://nodejs.org) (version >= 18.0.0 and <= 21.x.x)

## Installation

```shell
yarn add --dev @ahiho/eslint-config-ecmascript @ahiho/eslint-config-typescript
```

## Usage

After installing, update `package.json` file to add the following properties.

```text
"eslintConfig": {
  "extends": [
    "@ahiho/eslint-config-ecmascript",
    "@ahiho/eslint-config-typescript"
  ]
},
```
