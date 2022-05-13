<template>
  <div class="tab-control">
    <div class="item"
         v-for="(item,index) in titles" :key="item.id"
         :class= "{active:currentIndex === index}"
         @click="itemClick(index)">
         <span>{{item}}</span></div>
  </div>
</template>

<script>
  export default {
    name:"TabControl",
    data() {
      return {
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit("tabClick",index)
      }
    },
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    margin-bottom: 5px;
    text-align: center;
    line-height: 40px;
  }

  .tab-control .item{
    flex: 1;
    height: 40px;
  }

  .tab-control .item span{
    padding: 0 3px 3px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>