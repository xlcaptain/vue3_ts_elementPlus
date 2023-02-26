const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
  // resolve: {
  //   // 在导入语句没带文件后缀时，webpack会自动按照顺序添加后缀名查找
  //   extensions: ['.ts', '.vue', '.json'],
  //   // 配置别名
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js',
  //     // 将项目根目录中，src的路径配置为别名@
  //     '@': resolve('src'),
  //   }
  // },
})
