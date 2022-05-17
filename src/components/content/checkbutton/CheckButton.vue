<template>
  <div class="check-button"  :class="{checked:ischecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="" >
  </div>
</template>

<script>
  export default {
    name:"CheckButton",
    props:{
      ischecked:{
        type:Boolean,
        default:false,
      }
    }
  }
</script>

<style scoped>
.check-button{
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 3px solid #666;
}
.check-button img{
  width: 100%;
  height: 100%;
}
.checked{
  border-color:var(--color-high-text) ;
  background-color: var(--color-high-text);
}

</style>