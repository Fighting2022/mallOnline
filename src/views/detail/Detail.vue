<template>
  <div id="detail">
    <detail-nav-bar
      class="nav-bar"
      @tabcontronlclick="tabcontronlclick"
      ref="navbar"
    ></detail-nav-bar>
    <scroll class="scroll" :probeType="3" @backtop="contenbacktop" ref="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :Goods="Goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-desc :Desc="Desc"></detail-desc>
      <detail-goods-info
        :DetailImag="DetailImag"
        @imgloaded="imgloaded"
      ></detail-goods-info>
      <detail-params-info
        :GoodsParam="GoodsParam"
        ref="goodsparams"
      ></detail-params-info>
      <detail-goods-comment
        :UserComment="UserComment"
        ref="comment"
      ></detail-goods-comment>
      <goods-list :goods="RecommendData" ref="recommend"></goods-list>
    </scroll>
    <back-top v-show="isshow"></back-top>
    <detail-bottom-bar @addcart="addtocart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailDesc from "./childComps/DetailDesc.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import DetailGoodsComment from "./childComps/DetailGoodsComment.vue";
import GoodsList from "../../components/content/goodlist/GoodsList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import BackTop from "../../components/content/backtop/BackTop.vue";

import { itemListenerMixin } from "../../common/mixin";
import { debounce } from "../../common/utils";
import { mapActions } from "vuex";
import {
  getData,
  Shop,
  Goods,
  GoodsParam,
  getRecommendData,
} from "../../network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailDesc,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailGoodsComment,
    GoodsList,
    Scroll,
    DetailBottomBar,
    BackTop,
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: null,
      shop: {},
      Goods: {},
      Desc: {},
      DetailImag: [],
      GoodsParam: {},
      UserComment: [],
      RecommendData: [],
      //参数组件的位置信息
      ParamsY: 0,
      //导航按钮展示数据
      isshow: false,
      themescolltoY: [],
      scrollYdebounceFn: null,
      currentIndex: 0,
    };
  },
  methods: {
    //监听滚动的位置
    contenbacktop(position) {
      // console.log(position);
      this.isShow = -position.y > 1000;
      // console.log( this.isShow )

      //2.positionY和主题中的值进行比较
      //[0, 15828, 17101, 17431]
      //positionY 在 0 和 15828 之间  idnex = 0
      //positionY 在 15828 和 17101 之间  idnex = 1
      //positionY 在 17101 和 17431 之间  idnex = 2
      //positionY 大于 17431 idnex = 3
      // console.log(this.themescolltoY.length)
      let length = this.themescolltoY.length;
      for (let index = 0; index < length - 1; index++) {
        if (
          //方法一:
          // this.currentIndex !== index && ((index < length - 1 &&-position.y >= this.themescolltoY[index] &&-position.y < this.themescolltoY[index + 1]) ||
          // (index === length - 1 && -position.y >= this.themescolltoY[index]))
          this.currentIndex !== index &&
          -position.y >= this.themescolltoY[index] &&
          -position.y < this.themescolltoY[index + 1]
        ) {
          this.currentIndex = index;
          this.$refs.navbar.currentIndex = index;
        }
      }
    },
    //监听图片是否加载完成
    imgloaded() {
      this.refresh();
      this.scrollYdebounceFn();
    },
    //监听nav-bar的点击
    tabcontronlclick(index) {
      this.$refs.scroll.backtop(0, -this.themescolltoY[index], 20);
    },
    //映射vuex中的actions
    ...mapActions(["addCart"]),
    //监听添加购物车事件
    addtocart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.Goods.title;
      product.price = this.Goods.realPrice;
      product.iid = this.iid;
      product.desc = this.Desc.desc;

      //方式一
      //this.$store.dispatch("addCart", product).then(res => console.log(res)).catch(err => console.log(err))
      //方式二

      this.addCart(product).then(
        (res) => {
          this.$toast.show(res, 2000);
        },
        (err) => {
          this.$toast.show(err, 2000);
        }
      );
    },
  },
  destroyed() {
    this.$bus.$off("imageloaded", this.itemImgListener);
  },
  created() {
    this.iid = this.$route.params.iid;
    // 请求数据
    getData(this.iid).then((res) => {
      //获取顶部的轮播图数据
      this.topImages = res.result.itemInfo.topImages;
      //创建店铺信息的对象
      this.shop = new Shop(res.result.shopInfo);
      //创建商品的信息
      this.Goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      //创建描述信息
      this.Desc = res.result.detailInfo;
      //创建商品详情信息-图片
      this.DetailImag = res.result.detailInfo.detailImage;
      //创建商品的详情信息-厂家-尺码信息
      this.GoodsParam = new GoodsParam(res.result.itemParams);
      //获取商品的评论信息
      this.UserComment = res.result.rate.list;
    });
    //请求推荐的数据
    getRecommendData().then((res) => {
      this.RecommendData = res.data.list;

      this.scrollYdebounceFn = debounce(() => {
        this.themescolltoY = [0];
        this.themescolltoY.push(this.$refs.goodsparams.$el.offsetTop);
        this.themescolltoY.push(this.$refs.comment.$el.offsetTop);
        this.themescolltoY.push(this.$refs.recommend.$el.offsetTop);
        this.themescolltoY.push(Number.MAX_VALUE);
      }, 200);
    });
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 100;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow: hidden;
  background-color: #fff;
}
.nav-bar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>