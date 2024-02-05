const glob = require("glob");

const { hasKeyInObj } = require("./has-key-in-obj");
const { getConsumingRoot } = require("./get-consuming-root");

const getDependencyTypePath = (dependency, type) => {
  switch (type) {
    case "dev":
      return `devDependencies.${dependency}`;
    case "peer":
      return `peerDependencies.${dependency}`;
    default:
      return `dependencies.${dependency}`;
  }
};

const hasConfig = (sources) => {
  return sources.some((source) => {
    const root = getConsumingRoot();

    const packageJson = require(`${root}/package.json`);

    switch (source.type) {
      case "file":
        return !!glob.sync(source.pattern, { cwd: root }).length;
      case "package.json":
        return hasKeyInObj(source.property, packageJson);
      case "dependency":
        return hasKeyInObj(
          getDependencyTypePath(source.dependency, source.dependencyType),
          packageJson
        );
      default:
        return false;
    }
  });
};

module.exports = { hasConfig };
