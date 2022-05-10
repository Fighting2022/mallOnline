<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name:"NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  }

  .nav-bar .left{
    width: 60px;
  }

  .nav-bar .center{
    flex: 1;
    text-align: center;
  }
  
  .nav-bar .right{
    width: 60px;
  }
</style>