<template>
  <div class="shopinfo">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <div class="name">{{ shop.name }}</div>
    </div>
    <div class="shop-middle">
      <div class="left">
        <div class="item">
          <p>{{ sellNumber }}</p>
          <p>总销量</p>
        </div>
        <div class="item">
          <p>{{ shop.goodsCount }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <table>
          <tr v-for="item in shop.score" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
            <td v-show="item.isBetter"><span>高</span></td>
            <td v-show="!item.isBetter"><span>低</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="more">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    sellNumber() {
      return Math.floor(this.shop.sell / 10000) + "万";
    },
  },
};
</script>

<style scoped>
.shopinfo {
  height: 240px;
  box-sizing: border-box;
  padding: 25px 8px;
}
.shop-top {
  display: flex;
  align-items: center;
  height: 45px;
}
.shop-top img {
  width: 45px;
  margin-right: 10px;
}
.shop-middle {
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin-top: 15px;
}
.shop-middle table {
  text-align: center;
}
.shop-middle .left {
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.shop-middle .left .item {
  text-align: center;
}
.shop-middle .left .item p {
  margin-bottom: 8px;
}
.shop-middle .right {
  display: flex;
  justify-content: center;
  width: 180px;
}
.shop-middle .right td {
  font-size: 12px;
  padding: 0 5px;
}
.shop-middle .right tr td:nth-child(3) span {
  font-size: 13px;
  color: #fff;
  background-color: var(--color-high-text);
}
.shop-middle .right tr td:nth-child(4) span {
  font-size: 13px;
  color: #fff;
  background-color: rgb(94, 167, 50);
}
.shop-bottom {
  height: 30px;
  margin-top: 10px;
}
.shop-bottom .more {
  width: 150px;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 13px;
  text-align: center;
  line-height: 30px;
  background-color: rgb(242, 245, 248);
}
</style>