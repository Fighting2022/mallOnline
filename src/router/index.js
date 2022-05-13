import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/home/home.vue';


Vue.use(VueRouter);

//创建路由对象
const routers = [
  {
    path: "",
    redirect: "/home",
  },

  {
    path: "/home",
    component: () => import("../views/home/home.vue")
  },

  {
    path: "/category",
    component: () => import("../views/category/category.vue")
  },

  {
    path: "/cart",
    component: () => import("../views/cart/cart.vue")
  },

  {
    path: "/profile",
    component: () => import("../views/profile/profile.vue")
  },
  {
    path: "/detail/:iid",
    component: () => import("../views/detail/Detail.vue")
  }
];

const router = new VueRouter({
  routes: routers,
  mode: "history",
});

//导出路由
export default router;
