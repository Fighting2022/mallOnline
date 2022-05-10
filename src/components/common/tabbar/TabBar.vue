<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name:"TabBar",
  }
</script>

<style scoped>
  #tab-bar{
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   background-color: #f5f5f5;
  }
</style>
