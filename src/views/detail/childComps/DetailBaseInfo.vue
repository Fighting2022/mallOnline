<template>
  <div id="detailbaseinfo" v-if="Object.keys(Goods).length !== 0">
    <div class="title">{{ Goods.title }}</div>
    <div class="price">
      <span class="new-price">{{ Goods.newPrice }}</span>
      <span class="old-price"> {{ Goods.oldPrice }}</span>
      <span class="discount">{{ Goods.discount }}</span>
    </div>
    <div class="goods-info">
      <div class="item">{{ Goods.colums[0] }}</div>
      <div class="item">{{ Goods.colums[1] }}</div>
      <div class="item">{{ Goods.colums[2] }}</div>
    </div>
    <div class="services">
      <div class="item">
        <img :src="Goods.services[0].icon" alt="" />
        <span>{{ Goods.services[0].name }}</span>
      </div>
      <div class="item">
        <img :src="Goods.services[1].icon" alt="" />
        <span>{{ Goods.services[1].name }}</span>
      </div>
      <div class="item">
        <img :src="Goods.services[2].icon" alt="" />
        <span>{{ Goods.services[2].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    Goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
#detailbaseinfo {
  width: 100%;
  height: 190px;
  margin-top: 10px;
  border-bottom: 8px solid rgb(242, 245, 248);
}

.price {
  height: 28px;
  background-color: #fff;
  margin: 10px 0;
}
.price .new-price {
  font-size: 24px;
  color: var(--color-high-text);
}

.price .old-price {
  margin-left: 5px;
  font-size: 12px;
  color: var(--color-text);
  text-decoration: line-through;
}
.price .discount {
  display: inline-block;
  font-size: 12px;
  padding: 2px 5px;
  margin-left: 5px;
  color: #fff;
  border-radius: 10px;
  border-bottom: 1px solid var(--color-text);
  background-color: var(--color-high-text);
}
.goods-info {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}
.services {
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
}
.services .item {
  display: flex;
}
.services .item img {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
</style>