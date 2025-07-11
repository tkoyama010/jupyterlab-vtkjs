module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "prettier/prettier": "error",
    // Disable some overly strict rules for better development experience
    "@typescript-eslint/no-magic-numbers": "off",
    "no-magic-numbers": "off",
    "id-length": "off",
    "max-lines": "off",
    "max-lines-per-function": "off",
    "max-statements": "off",
    "no-console": "warn",
    "no-ternary": "off",
    "one-var": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "capitalized-comments": "off",
    "line-comment-position": "off",
    "no-inline-comments": "off",
    "multiline-comment-style": "off",
    "func-style": "off",
    "prefer-named-capture-group": "off",
    "require-unicode-regexp": "off",
    "no-warning-comments": "off",
    "new-cap": "off",
    "no-underscore-dangle": "off",
    "max-params": "off",
    complexity: "off",
    "max-depth": "off",
    "class-methods-use-this": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "no-param-reassign": "off",
    "prefer-destructuring": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-sync": "off",
    "no-process-env": "off",
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "off",
    "no-undefined": "off",
    "prefer-template": "off",
    "object-shorthand": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "off",
    "prefer-spread": "off",
    "prefer-rest-params": "off",
    "arrow-body-style": "off",
    "no-var": "off",
    "vars-on-top": "off",
    "prefer-object-spread": "off",
    "no-implicit-coercion": "off",
    radix: "off",
    "no-negated-condition": "off",
    "prefer-exponentiation-operator": "off",
    "logical-assignment-operators": "off",
    "operator-assignment": "off",
    "prefer-numeric-literals": "off",
    "no-mixed-operators": "off",
    "wrap-iife": "off",
    "no-nested-ternary": "off",
    "no-unneeded-ternary": "off",
    "prefer-regex-literals": "off",
    "default-case": "off",
    "default-case-last": "off",
    "no-else-return": "off",
    "no-lonely-if": "off",
    "consistent-return": "off",
    "array-callback-return": "off",
    "prefer-promise-reject-errors": "off",
    "no-promise-executor-return": "off",
    "require-await": "off",
    "@typescript-eslint/require-await": "off",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "off",
    "no-implicit-globals": "off",
    strict: "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "off",
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "no-sequences": "off",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "prefer-promise-reject-errors": "off",
    "no-new": "off",
    "no-new-func": "off",
    "no-new-object": "off",
    "no-new-wrappers": "off",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "off",
    "no-object-constructor": "off",
    "no-multi-assign": "off",
    "no-bitwise": "off",
    "no-void": "off",
    "no-delete-var": "off",
    "no-label-var": "off",
    "no-labels": "off",
    "no-extra-label": "off",
    "no-unused-labels": "off",
    "no-with": "off",
    "no-eval": "off",
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "off",
    "no-new-func": "off",
    "no-script-url": "off",
    "no-octal-escape": "off",
    "no-regex-spaces": "off",
    "no-div-regex": "off",
    "wrap-regex": "off",
    "no-useless-escape": "off",
    "no-useless-backreference": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "spaced-comment": "off",
    "unicode-bom": "off",
    "no-multiple-empty-lines": "off",
    "no-trailing-spaces": "off",
    "eol-last": "off",
    "linebreak-style": "off",
    "max-len": "off",
    "no-tabs": "off",
    indent: "off",
    "@typescript-eslint/indent": "off",
    quotes: "off",
    "@typescript-eslint/quotes": "off",
    "quote-props": "off",
    semi: "off",
    "@typescript-eslint/semi": "off",
    "semi-spacing": "off",
    "@typescript-eslint/semi-spacing": "off",
    "semi-style": "off",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": "off",
    "comma-style": "off",
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "object-curly-newline": "off",
    "object-property-newline": "off",
    "array-bracket-spacing": "off",
    "@typescript-eslint/array-bracket-spacing": "off",
    "array-bracket-newline": "off",
    "array-element-newline": "off",
    "computed-property-spacing": "off",
    "space-in-parens": "off",
    "@typescript-eslint/space-in-parens": "off",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "off",
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "off",
    "space-unary-ops": "off",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": "off",
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": "off",
    "brace-style": "off",
    "@typescript-eslint/brace-style": "off",
    "block-spacing": "off",
    "@typescript-eslint/block-spacing": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": "off",
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "lines-around-comment": "off",
    "lines-around-directive": "off",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "function-call-argument-newline": "off",
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    "multiline-ternary": "off",
    "operator-linebreak": "off",
    "dot-location": "off",
    "wrap-iife": "off",
    "generator-star-spacing": "off",
    "yield-star-spacing": "off",
    "rest-spread-spacing": "off",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "jsx-quotes": "off",
    "switch-colon-spacing": "off",
    "arrow-parens": "off",
    "arrow-spacing": "off",
    "no-confusing-arrow": "off",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "no-floating-decimal": "off",
    "no-multi-spaces": "off",
    "no-whitespace-before-property": "off",
    "nonblock-statement-body-position": "off",
    "one-var-declaration-per-line": "off",
    "space-before-blocks": "off",
    curly: "off",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "off",
    "accessor-pairs": "off",
    "grouped-accessor-pairs": "off",
    "no-constructor-return": "off",
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "off",
    "no-self-compare": "off",
    "no-template-curly-in-string": "off",
    "no-unmodified-loop-condition": "off",
    "no-unreachable-loop": "off",
    "no-unused-private-class-members": "off",
    "require-atomic-updates": "off",
    camelcase: "off",
    "@typescript-eslint/naming-convention": "off",
    "id-blacklist": "off",
    "id-denylist": "off",
    "id-match": "off",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-modules": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "sort-imports": "off",
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: true,
  },
  ignorePatterns: [
    "lib/",
    "dist/",
    "node_modules/",
    "jupyterlab_vtkjs/",
    "*.d.ts",
    "tests/",
    "jest.config.js",
    "coverage/",
    "style/",
    ".eslintrc.js",
  ],
  overrides: [
    {
      files: ["**/__tests__/**/*", "**/*.test.ts"],
      env: {
        jest: true,
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-var-requires": "off",
        "sort-imports": "off",
      },
    },
  ],
};
