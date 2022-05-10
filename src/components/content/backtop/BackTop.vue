<template>
  <div class="backtop">
    <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name:"backtop",
  }
</script>

<style scoped>
  .backtop{
    position: fixed;
    right: 15px;
    bottom: 55px;
    width: 40px;
    height: 40px;
    z-index: 20;
  }

  .backtop img{
    width: 100%;
    height: 100%;
  }
</style>