<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"></detail-nav-bar>
    <scroll class="scroll">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :Goods="Goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-desc :Desc="Desc"></detail-desc>
      <detail-goods-info :DetailImag="DetailImag"></detail-goods-info>
      <detail-params-info :GoodsParam="GoodsParam"></detail-params-info>
      <detail-goods-comment :UserComment="UserComment"></detail-goods-comment>
      <goods-list :goods="RecommendData"></goods-list>
    </scroll>
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
  },
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
      RecommendData: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    // 请求数据
    getData(this.iid).then((res) => {
      console.log(res);
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
      console.log(res);
      console.log(this.RecommendData);
    });
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.nav-bar {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>