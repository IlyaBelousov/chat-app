module.exports = {
  root: true,
  env: { browser: true, es2021: true, jest: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:jest/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    '@typescript-eslint',
    'jest'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // We don't always need only one export. For example - utils file, that can contains many exports
    'import/prefer-default-export': 'off',
    // We don't need propTypes rules because we use TypeScript
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    // Object.assign solve the problem of types loss in redux actions
    'prefer-object-spread': 'off',
    // sometimes we write a component/function assuming that it will expand
    "arrow-body-style": "off",
    // we use namespaces for api modules
    "@typescript-eslint/no-namespace": "off",
    // согласились пока что оставить это зло в проекте. Новый код пишем без нижних подчёркиваний
    "@typescript-eslint/naming-convention": "off",
    // Disabled because in some React objects fields start with an underscore
    "no-underscore-dangle": "off",

    // TODO change to 'error'. We have a lot of wrapper with props spreading
    'react/jsx-props-no-spreading': 'warn',
    // TODO change to 'error' or turn off this rule. Very often we don't need to use deps in useEffect
    'react-hooks/exhaustive-deps': 'warn',
    // TODO change to 'error'. We have solutions like "createStyleSheet((Theme) => {})"
    '@typescript-eslint/no-shadow': 'warn',
    // TODO change to 'error'. We have a lot of legacy like "reducer(state = new ReducerRecord(), action)"
    '@typescript-eslint/default-param-last': 'warn',
    // TODO change to 'error'. We have a lot of legacy cycle imports
    'import/no-cycle': 'warn',
    // sometimes we need to ignore TS, because it can be very difficult to use correct types
    '@typescript-eslint/ban-ts-comment': 'warn',

    'max-len': ['error', { code: 120, "ignoreUrls": true }],
    'max-params': ['error', 2],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'import/order': ['error', {
      groups: [['builtin', 'external']],
      'newlines-between': 'always',
    }],
    'import/no-unused-modules': ['error', { unusedExports: true }],
    'func-names': ['error', 'as-needed'],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
  },

  // JS configs in ignorePatterns to fix Parsing error. These files are not be linting!
  // Explanation:
  // - https://stackoverflow.com/questions/58510287/parseroptions-project-has-been-set-for-typescript-eslint-parser
  // It is possible to use "override" for .ts(.tsx) instead. But in that case you need to define same rules
  // for root and "override" configs. Besides, defining all rules in root config provide better linting
  ignorePatterns: ['/.eslintrc.js', '/*.config.js'],
};
