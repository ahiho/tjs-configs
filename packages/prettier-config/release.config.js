const name = "@ahiho/prettier-config";
const srcRoot = `packages/prettier-config`;

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
        npmPublish: true,
        pkgRoot: `dist/${srcRoot}`,
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
