<template>
  <div>
    <product-list-item
      v-for="item in cartlist"
      :key="item.id"
      :item="item"
    ></product-list-item>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  computed: {
    ...mapGetters(["cartlist"])
  },
};
</script>

<style scoped>
</style>