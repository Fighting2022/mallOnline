//封装toast组件
import Vue from "vue"
import Toast from "./Toast.vue"

const obj = {}

obj.install = function(vue){
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  
  //2.通过new操作符,根据组件构造器,创建出来一个组件对象
  const toast = new toastConstructor

  //3.将组件对象,手动挂载到某一个元素上面
  toast.$mount(document.createElement("div"))

  //4.toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  //5.将原型上的$toast对象指向toast
  Vue.prototype.$toast = toast
}

export default obj