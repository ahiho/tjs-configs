module.exports = {
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  globals: {},
  rules: {
    'accessor-pairs': 'off',
    'block-scoped-var': 'error',
    complexity: [0, 11],
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': 'error',
    'dot-notation': [2, { allowKeywords: true }],
    'dot-location': [2, 'property'],
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'off',
    'no-else-return': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-process-env': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'off',
    'no-void': 'off',
    'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'off',
    'wrap-iife': [2, 'any'],
    yoda: 'error',
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',
    'no-unexpected-multiline': 'off',
    'callback-return': 'off',
    'handle-callback-err': 'off',
    'no-mixed-requires': [0, false],
    'no-new-require': 'off',
    'no-path-concat': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'max-depth': [0, 4],
    'max-len': [0, 80, 4],
    'max-params': [0, 3],
    'max-statements': [0, 10],
    'no-bitwise': 'error',
    'no-plusplus': 'off',
    strict: [0, 'never'],
    'array-bracket-spacing': 'off',
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': 'off',
    'consistent-this': [2, '_this'],
    'eol-last': 'error',
    'func-names': 0,
    'func-style': 'off',
    'id-length': 'off',
    indent: [2, 2, { SwitchCase: 1 }],
    'jsx-quotes': 'error',
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'lines-around-comment': 'off',
    'linebreak-style': 'off',
    'max-nested-callbacks': 'off',
    'new-cap': [2, { newIsCap: true }],
    'new-parens': 'off',
    'newline-after-var': 'off',
    'no-array-constructor': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [2, { max: 2, maxEOF: 1 }],
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'no-unsafe-finally': 'error',
    'object-curly-spacing': 'off',
    'one-var': [2, 'never'],
    'operator-assignment': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': [2, 'never'],
    'quote-props': 'off',
    quotes: [2, 'single', 'avoid-escape'],
    'id-match': 'off',
    'semi-spacing': [2, { before: false, after: true }],
    semi: [2, 'never'],
    'sort-vars': 'off',
    'keyword-spacing': [2, { before: true, after: true, overrides: {} }],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'off',
    'space-infix-ops': 'error',
    'space-unary-ops': 'off',
    'spaced-comment': [
      2,
      'always',
      {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'],
      },
    ],
    'wrap-regex': 'off',
    'init-declarations': 'off',
    'no-case-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'off',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'off',
    'no-undef': 'off',
    'no-undefined': 'off',
    'no-unused-vars': [2, { vars: 'local', args: 'after-used' }],
    'no-use-before-define': [2, { functions: false }],
  },
};
