# @ahiho/tsconfig

Ahiho's TSConfig.

Read the [TSConfig docs](https://www.typescriptlang.org/tsconfig) for more information.

## Installation

```shell
yarn add --dev @ahiho/tsconfig
```

## Usage

Create `tsconfig.json` file in the package directory to add the following content.

```json
{
  "extends": "@ahiho/tsconfig"
}
```

Create `tsconfig.release.json` file to add the following content and use it for CI.

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build"
  },
  "exclude": ["**/*.spec.ts", "**/*.test.ts"]
}
```

Packages `build` directories should be added `eslintIgnore` in root `package.json` in a Lerna project.

```text
"eslintIgnore": [
  "packages/**/build"
],
```
