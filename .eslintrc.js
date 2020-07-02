const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'generator-star-spacing': 'off',  // 强制 generator 函数中 * 号周围使用一致的空格
    'no-debugger': isProd ? 'error' : 'off',  // 禁用 debugger
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'arrow-spacing': 'warn', // 强制箭头函数的箭头前后使用一致的空格
    'no-dupe-keys': 'off', // 禁止对象字面量中出现重复的 key
    'camelcase': 'off', // 强制使用骆驼拼写法命名约定
    'no-undef': 'off',  // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'one-var': 'off', // 强制函数中的变量要么一起声明要么分开声明
    'except-parens': 'off', // 禁止在返回语句中赋值
    'semi': 'off', // 要求或禁止使用分号代替 ASI
    'handle-callback-err': 'off', // 要求回调函数中有容错处理
    'quotes': 'off', // 强制使用一致的反勾号、双引号或单引号
    'space-before-function-paren': 'off', // 要求或禁止函数圆括号之前有一个空格
  },
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaFeatures": {
      "legacyDecorators": true
    }
  }
}
