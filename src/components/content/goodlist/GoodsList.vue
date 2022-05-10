<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.id" :item="item" ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"
  export default {
    name:"GoodsList",
    props:{
      goods:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 3vw;
  }
</style>