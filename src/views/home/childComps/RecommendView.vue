<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.id" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 20px 0;
  border-bottom: 8px solid #eee;
}

.recommend .item {
  flex: 1;
 
}
.recommend .item a{
  display: block;
  text-align: center;
}
.recommend .item img {
  width: 50px;
  height: 50px;
}
</style>