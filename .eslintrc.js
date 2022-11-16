require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  ignorePatterns: ["node_modules", "dist", "coverage"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
  },
  overrides: [
    {
      files: ["*.js", "vite.config.ts"],
      env: {
        node: true,
      },
    },
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
};
