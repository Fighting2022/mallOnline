<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="control1"
      v-show="isshow2"
      class="fixed"
    ></tab-control>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      @backtop="contenbacktop"
      :pull-up-load="true"
      @pullingUp="loadmore"
    >
      <home-swriper
        :banners="banners"
        @bannerimgloaded="bannerimgloadedfn"
      ></home-swriper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="control2"
      ></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

import HomeSwriper from "./childComps/HomeSwriper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import Feature from "./childComps/Feature.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goodlist/GoodsList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";

import { getHomeMulitidata, getHomeGoods } from "../../network/home";
import { itemListenerMixin } from "../../common/mixin";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwriper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currenType: "pop",
      //记录tab-control的高度
      tabcontrol: 0,
      isShow: false,
      isshow2: false,
      saveY: 0,
    };
  },
  created() {
    //1.请求轮播图数据
    this.getHomeMulitidata(),
      //2.请求商品数据
      this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 进入时调用
  activated() {
    this.$refs.scroll.y = this.saveY;
    this.$refs.scroll.refresh();
  },
  //离开时调用
  deactivated() {
    //保存Y的值
    this.saveY = this.$refs.scroll.y;

    //取消全局事件的监听
    this.$bus.$off("imageloaded", this.itemImgListener);
  },

  computed: {
    showgoods() {
      return this.goods[this.currenType].list;
    },
  },

  mounted() {
    //解决两个tabControl选中状态不一致的问题
    this.$refs.control1.currentIndex = this.index;
    this.$refs.control2.currentIndex = this.index;
  },

  methods: {
    //监听tabcontrol的位置
    bannerimgloadedfn() {
      this.tabcontrol = this.$refs.control2.$el.offsetTop;
    },

    //事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currenType = "pop";
          break;
        case 1:
          this.currenType = "new";
          break;
        case 2:
          this.currenType = "sell";
          break;
      }
    },

    //监听回到顶部按钮
    backClick() {
      this.$refs.scroll.backtop(0, 0);
    },

    //监听滚动的位置
    contenbacktop(position) {
      this.isShow = -position.y > 1000;
      this.isshow2 = -position.y > this.tabcontrol;
    },

    //执行上拉加载更多
    loadmore() {
      this.getHomeGoods(this.currenType);
    },

    // 网络请求方法
    getHomeMulitidata() {
      getHomeMulitidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //网路请求方法
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  font-weight: 500;
  color: #fff;
  background-color: var(--color-tint);
}

#home {
  height: 100vh;
  position: relative;
}

.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.fixed {
  position: relative;
  z-index: 20;
  background: #fff;
}
</style>
