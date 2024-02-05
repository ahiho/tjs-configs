import glob from 'glob';

import { getConsumingRoot } from './get-consuming-root';
import { hasKeyInObj } from './has-key-in-obj';

const getDependencyTypePath = (dependency, type): string => {
  switch (type) {
    case 'dev':
      return `devDependencies.${dependency}`;
    case 'peer':
      return `peerDependencies.${dependency}`;
    default:
      return `dependencies.${dependency}`;
  }
};

export const hasConfig = (sources): boolean => {
  return sources.some((source) => {
    const root = getConsumingRoot();

    const packageJson = require(`${root}/package.json`);

    switch (source.type) {
      case 'file':
        return !!glob.sync(source.pattern, { cwd: root }).length;
      case 'package.json':
        return hasKeyInObj(source.property, packageJson);
      case 'dependency':
        return hasKeyInObj(getDependencyTypePath(source.dependency, source.dependencyType), packageJson);
      default:
        return false;
    }
  });
};
