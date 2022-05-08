// 这个配置文件的配置会和公共的配置进行合并
module.exports = {
  configureWebpack: {
    resolve: {
      // 别名,给src文件夹下的文件夹配置别名
      //router&store不需要,因为可以在文件中获取相应的值
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
