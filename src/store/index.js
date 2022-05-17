import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters"

//1.安装插件
Vue.use(Vuex);

//创建store对象  抽离出来
const state = {
  cartlist: [],
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

//3.挂载到实例上
export default store;
