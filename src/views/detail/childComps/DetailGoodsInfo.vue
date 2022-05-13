<template>
  <div class="goods-info" v-if="DetailImag.length !== 0">
    <div v-for="item in DetailImag[0].list" :key="item.id">
      <img :src="item" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    DetailImag: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods-info {
  width: 100%;
  border-bottom: 5px solid rgb(242, 245, 248);
}

.goods-info img {
  width: 100%;
}
</style>