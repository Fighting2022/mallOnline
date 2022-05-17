<template>
  <div class="goods-item" @click="goodsclick">
    <a>
      <img :src="showimage" alt="" @load="imageLoad" />
    </a>
    <div class="title">{{ item.title }}</div>
    <div class="info">
      <span class="price">¥{{ item.price }}</span>
      <span class="collect">{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showimage() {
      return this.item.image || this.item.show.img;
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imageloaded");
    },
    goodsclick() {
      this.$router.push("./detail/" + this.item.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 46vw;
  margin-bottom: 5px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item .title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.goods-item .info {
  margin: 5px 0;
  text-align: center;
}

.goods-item .info .price {
  font-weight: 700;
  color: var(--color-tint);
}

.goods-item .info .collect::before {
  content: "";
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 5px;
  background-image: url(../../../assets/img/common/collect.svg);
  background-size: 100%;
}
</style>