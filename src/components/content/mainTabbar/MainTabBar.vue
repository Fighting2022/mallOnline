<template>
  <div>
      <tab-bar>
        <tab-bar-item path="/home" >
          <img src="~assets/img/tabbar/home.svg" alt="" slot="item-iron">
          <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-iron-active">
          <div slot="item-content">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
           <img src="~assets/img/tabbar/category.svg" alt="" slot="item-iron">
           <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-iron-active">
           <div slot="item-content">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
           <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-iron">
           <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="item-iron-active">
           <div slot="item-content">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
           <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-iron">
           <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-iron-active">
           <div slot="item-content">我的</div>
        </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar.vue"
  import TabBarItem from "../../common/tabbar/TabBarItem.vue"
  export default {
    name:"MainTabBar",
    components:{
     TabBar,
     TabBarItem
   }
  }
</script>

<style scoped>

</style>
