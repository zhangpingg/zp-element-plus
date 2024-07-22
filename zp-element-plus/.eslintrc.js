module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true, // 这是为了兼容defineProps这种API的
  },
  extends: [
    'plugin:vue/vue3-recommended', // 兼容vue3语法规范
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser', // 这个插件其实已经安装了，用来解析template语法
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'windows'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    semi: 2, // 行尾分号结尾
    quotes: ['error', 'single'], // 单引号，如果不是就报错
    'no-var': 'warn', // 没有定义变量，就警告
    'no-unused-vars': 1, // 未使用过的变量
    'no-use-before-define': 2, // 在变量定义之前使用它们
    '@typescript-eslint/ban-types': 0, // 允许使用Object作为类型定义
    '@typescript-eslint/no-explicit-any': 0, // 允许使用any
    '@typescript-eslint/no-non-null-assertion': 0, // 允许非空断言
    '@typescript-eslint/explicit-module-boundary-types': 0, // 允许没有返回值
    '@typescript-eslint/no-this-alias': 0, // 允许给this指定别名
    '@typescript-eslint/no-empty-function': 0, // 空函数报error
    '@typescript-eslint/no-var-requires': 0, // 没有定义
    '@typescript-eslint/no-unused-vars': 2, // 定义了变量，未使用
    'react-hooks/rules-of-hooks': 'warn', // 检查 Hook 的规则
    // 要求组件的命名必须是多个单词组成。off:关闭这个规则，即允许单单词命名的组件
    'vue/multi-word-component-names': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
