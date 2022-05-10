<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 设置插槽可以由外面自己决定要插入什么内容 -->
    <div v-if="!isActive"><slot name="item-iron"></slot></div>
    <div v-else><slot name="item-iron-active"></slot></div>
    <div :style="Color"><slot name="item-content"></slot></div>
  </div>
</template>

<script>
  export default {
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
    },
    data() {
      return {

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      Color(){
        return this.isActive ? {color:this.activeColor} :{}
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path)
     },
    }
  }
</script>

<style scoped>
  .tab-bar-item{
      flex: 1;
      height: 49px;
      text-align: center;
    }

    .tab-bar-item img{
      margin-top: 3px;
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-bottom: 2px;
    }
</style>
