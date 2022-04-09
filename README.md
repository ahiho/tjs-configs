# @ahiho/tjs-configs

[![code style: eslint](https://img.shields.io/badge/code_style-eslint-4b32c3.svg)](https://github.com/eslint/eslint)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![packaging: lerna](https://img.shields.io/badge/packaging-lerna-cc00ff.svg)](https://lerna.js.org/)
[![release: conventional commits](https://img.shields.io/badge/release-conventional%20commits-f96672.svg)](https://conventionalcommits.org)
[![workflow: github actions](https://img.shields.io/badge/workflow-github%20actions-278cff.svg)](https://github.com/features/actions)

Ahiho's
[ESLint config](http://eslint.org/docs/user-guide/configuring#extending-configuration-files),
[Prettier config](https://prettier.io/docs/en/index.html),
[TSConfig config](https://www.typescriptlang.org/tsconfig).

## Setup

- Clone repo using [ssh](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

  ```shell script
  git clone git@github.com:ahiho/tjs-configs.git
  ```

- Install project dependencies

  ```shell script
  yarn install
  ```

## Usage

Before start, You need a token with Ahiho's private packages access.

You can create one [here](https://github.com/settings/tokens/new?scopes=read:packages).

In your project root folder, create a file `.npmrc` with content:

```
@ahiho:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PERSONAL_TOKEN
```

Now you have access to Ahiho's private packages.

```shell
yarn add --dev @ahiho/eslint-config @ahiho/prettier-config @ahiho/tsconfig @ahiho/commitlint-config
```

### Prettier

[README](./packages/prettier-config/README.md)

### ESLint

[README](./packages/eslint-config/README.md)

### TSConfig

[README](./packages/tsconfig/README.md)

### Commitlint

[README](./packages/commitlint-config/README.md)

### Jest

`yarn add --dev ts-jest`

After installing, update a package's `package.json` file to add the following properties.

```text
"jest": {
  "transform": {
    "^.+\\.ts$": "ts-jest"
  }
},
```
