module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    // 这里添加一行规则把这条规则隐藏
    "import/prefer-default-export": 0,
    "no-use-before-define": 0,
    "no-shadow": 0,
    "no-restricted-syntax": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "no-sequences": 0,
    "no-loop-func": 0,
    "no-nested-ternary": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "object-curly-newline": 0,
    quotes: 0,
    "comma-dangle": 0,
  },
};
