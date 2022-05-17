<template>
  <div class="item">
    <div class="left">
      <check-button @click.native="buttonclick" :ischecked="item.checked"></check-button>
    </div>
    <div class="center">
      <img :src="item.image" alt="" />
    </div>
    <div class="right">
      <div class="title">{{ item.title }}}</div>
      <div class="desc">{{ item.desc }}}</div>
      <div class="bottom">
        <div class="price">¥{{ item.price }}</div>
        <div class="count">x{{ item.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkbutton/CheckButton.vue"
export default {
  name: "ProductListItem",
  components:{
    CheckButton
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    buttonclick(){
      this.item.checked = !this.item.checked
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 8px;
  border-bottom: 2px solid rgb(231, 231, 231);
}
.item .left{
  display:flex;
  align-items: center;
  margin-right: 10px;
}
.item .center{
  display: flex;
  align-items: center;
}
.item .center img {
  width: 90px;
  height: 100px;
  border-radius: 5px;
}
.item .right {
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 6px 10px;
  overflow: hidden;

}
.item .right .title,
.item .right .desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item .right .title {
  font-size: 17px;
  color: #333;
}
.item .right .desc {
  font-size: 12px;
  color: #666;
}
.item .bottom{
  display: flex;
  /* height: 20px; */
  align-items: center;
  justify-content: space-between;
}
.item .bottom .price{
  font-weight: 700;
  font-size: 17px;
  color: var( --color-tint);
}
</style>