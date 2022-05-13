<template>
  <nav-bar>
    <div slot="left" class="backbtn" @click="backhome">
      <img src="../../../assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in titles"
        :key="item.id"
        class="item"
        @click="itemclick(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
      console.log("函数被执行了~");
    },
    backhome() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.title .item {
  flex: 1;
}
.backbtn {
  text-align: center;
  line-height: 30px;
}
.backbtn img {
  width: 30px;
  height: 30px;
  margin-top: 7px;
}
.active {
  color: var(--color-tint);
}
</style>