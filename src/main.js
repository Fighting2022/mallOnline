import Vue from "vue";
import App from "./App.vue"
import router from "./router"
import store from "./store/index"

import toast from "./components/common/toast/index"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

//安装Toast插件
Vue.use(toast)

//解决移动端300毫秒延迟
import FastClick  from "fastclick"
FastClick.attach(document.body)


new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app")
