export const config = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    (message: string): boolean =>
      /^Bumps \[.+]\(.+\) from .+ to .+\.$/m.test(message),
    (message: string): boolean => /^chore\(release\): .+/m.test(message),
  ],
};
