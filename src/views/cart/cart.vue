<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <product-list></product-list>
    </scroll>
    <product-bottom-bar></product-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue"
import ProductList from "./childComps/ProductList.vue"
import ProductBottomBar from './childComps/ProductBottomBar.vue'

import { mapGetters } from "vuex";

export default {
  name: "cart",
  components: {
    NavBar,
    ProductList,
    Scroll,
    ProductBottomBar
  },
  computed:{
    ...mapGetters(["cartLength"])
  },
  activated(){
    this.$refs.scroll.refresh()
  }

}
</script>

<style scoped>
.cart{
  position: relative;
  height:100vh;
  width: 100vh;
}
.nav-bar {
  color: #fff;
  background-color: var(--color-high-text);
}
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 94px;
  right: 0;
  left:0;
}
</style>
