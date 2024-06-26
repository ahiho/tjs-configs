const name = "@ahiho/eslint-config-react";
const srcRoot = `packages/eslint-config-react`;

module.exports = {
  extends: "release.config.base.js",
  branches: ["main"],
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: `${name}@\${version}`,
  commitPaths: [`${srcRoot}/*`],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
        pkgRoot: srcRoot,
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message:
          `chore(release): ${name} ` +
          "${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
