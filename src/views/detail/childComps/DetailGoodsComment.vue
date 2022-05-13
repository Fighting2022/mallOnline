<template>
  <div class="comment-area" v-if="Object.keys(UserComment[0]).length !== 0" >
      <div class="top">
        <span >用户评价</span>
        <span>更多</span>
      </div>
      <div class="user-info">
        <img :src="UserComment[0].user.avatar" alt="">
        <div>{{UserComment[0].user.uname}}</div>
      </div>
      <div class="comment">
        <p>{{UserComment[0].content}}</p>
        <div class="goods-info">
          <span>{{UserComment[0].created | showdate}}</span>
          <span>{{UserComment[0].style}}</span>
        </div>
      </div>
      <div class="goods-image">
       <!-- <img :src="UserComment[0].images[0]" alt=""> -->
       <img v-for="item in UserComment[0].images" alt="" :key="item.id" :src="item">
      </div>
  </div>
</template>

<script>
import {formatDate} from "../../../common/utils"
export default {
  name: "DetailGoodsComment",
  props:{
    UserComment:{
      type:Array,
      default(){
        return []
      }
    }
  },filters:{
    showdate(value){
      const date = new Date(value*1000)
      return formatDate(date,"yyyy-MM-dd hh:mm:ss")
    }
  }
};
</script>

<style scoped>
.comment-area{
  height: 330px;
  box-sizing: border-box;
  padding:5px 12px;
}
.comment-area .top{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.comment-area .top span:nth-child(1){
  font-size: 15px;
}
.comment-area .top span:nth-child(2){
  font-size: 13px;
}
.comment-area .user-info{
  display: flex;
  align-items: center;
  height: 60px;
}
.comment-area .user-info img{
  width: 42px;
  height: 42px;
  margin-right: 10px;
}
.comment-area .comment{
  margin: 10px 0;
}
.comment-area .comment p{
  padding-bottom: 10px;
}
.comment-area .comment .goods-info{
  font-size: 12px;
  color: #999;
}
.goods-info span:nth-child(1){
  margin-right: 5px;
}
.goods-image img{
  width: 70px;
  height: 70px;
  margin-right: 10px;
}
</style>