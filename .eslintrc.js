module.exports = {
  // 사전에 정의된 전역 변수를 설정합니다.
  env: {
    browser: true,
    node: true,
    jest: true,
    Kakao: true,
  },

  // 사용 가능한 규칙 세트입니다.
  extends: [
    // 'plugin:vue/vue3-essential', // Vue Lv1
    // 'plugin:vue/vue3-strongly-recommended', // Vue Lv2
    // 'plugin:vue/vue3-recommended', // Vue Lv3
    'eslint:recommended'
  ],
    // 구문 분석할 패키지를 설정합니다.(Babel, ES6^ => ES5)
  "parserOptions": {
    "parser": 'babel-eslint',
    "sourceType": "module",
    "ecmaVersion": 2020
  },
}
