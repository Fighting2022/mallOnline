<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="item">
        <i class="iron one "></i>
        <span>客服</span>
      </div>
      <div class="item">
        <i class="iron two"></i>
        <span>店铺</span>
      </div>
      <div class="item">
        <i class="iron three"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="item cart" @click="addcart">加入购物车</div>
      <div class="item buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailBottomBar",
    methods:{
      addcart(){
        this.$emit("addcart")
      }
    }
    
  }
</script>

<style scoped>
.bottom-bar{
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  height: 60px;
  background-color: #fff;
}
.bottom-bar .left{
  width: 185px;
  display: flex;
}
.bottom-bar .left .item{
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}
.bottom-bar .left .item .iron{
  display: block;
  width: 22px;
  height: 22px;
  margin: 4px auto;
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat;
  background-size: 100%;
}
.bottom-bar .left .item .iron.one{
  background-position: 0 0.16vw;
}
.bottom-bar .left .item .iron.two{
  background-position: 0 -25.84vw;
}
.bottom-bar .left .item .iron.three{
  background-position: 0 -6.84vw;;
}
.bottom-bar .right{
  flex: 1;
  display: flex;
}
.bottom-bar .right .item{
  flex: 1;
  text-align: center;
  line-height: 60px;
  
}

.bottom-bar .right .item.cart{
  color:#000;
  background-color:rgb(255, 232, 23);
}
.bottom-bar .right .item.buy{
  color: #fff;
  background-color:var(--color-high-text);
}
</style>