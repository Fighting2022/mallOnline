<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button  :ischecked ="isSelectAll" @click.native="selectALLclick"></check-button>
      <div class="all" >全选</div>
    </div>
    <div class="center">
      <div>合计:¥{{ totalPrice }}</div>
    </div>
    <div class="right">去计算({{totalCount}})</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/content/checkbutton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartlist"]),
    totalPrice() {
      return this.cartlist
        .filter((item) => {
          return item.checked;
        }).reduce((prevalue, item) => {
          return prevalue + item.price * item.count
        },0).toFixed(2)
    },
    totalCount() {
      return this.cartlist.filter(item =>{
        return item.checked
      }).reduce((prevalue, item) => {
          return prevalue + item.count;
        },0);
    },
    isSelectAll(){
      if(this.cartlist.length === 0) return false
      return !this.cartlist.find(item => !item.checked)
    }
  },
  methods:{
    selectALLclick(){
      if(this.isSelectAll){
        this.cartlist.forEach( item => {
          item.checked = false
        })
      } else {
        this.cartlist.forEach(item => item.checked = true)
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  height: 45px;
  background-color: rgb(238, 238, 238);
}
.bottom-bar .left {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 100%;
}
.bottom-bar .left .all {
  margin-left: 3px;
}
.bottom-bar .center {
  flex: 1;
}
.bottom-bar .right {
  height: 45px;
  width: 100px;
  color: #fff;
  background-color: red;
  line-height: 45px;
  text-align: center;
}
</style>