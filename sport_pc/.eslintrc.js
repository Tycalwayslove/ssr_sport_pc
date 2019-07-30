module.exports = {
  root: true,
  env: {
    browser: false,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //解决自闭合标签的报错
    'vue/html-self-closing': [
      'off',
      {
        html: {
          void: 'never',
          normal: 'any',
          component: 'any'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    //解决template里面各个属性的排序报错问题
    "vue/attributes-order": ["off", {
      "order": [
        "DEFINITION",
        "LIST_RENDERING",
        "CONDITIONALS",
        "RENDER_MODIFIERS",
        "GLOBAL",
        "UNIQUE",
        "TWO_WAY_BINDING",
        "OTHER_DIRECTIVES",
        "OTHER_ATTR",
        "EVENTS",
        "CONTENT"
      ],
  }],

  "vue/order-in-components": ["off", {
    "order": [
      "el",
      "name",
      "parent",
      "functional",
      ["delimiters", "comments"],
      ["components", "directives", "filters"],
      "extends",
      "mixins",
      "inheritAttrs",
      "model",
      ["props", "propsData"],
      "data",
      "computed",
      "watch",
      "LIFECYCLE_HOOKS",
      "methods",
      ["template", "render"],
      "renderError"
    ]
  }],

}
}
