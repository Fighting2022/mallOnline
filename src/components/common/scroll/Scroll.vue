<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bscroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建bs对象
    this.scroll = new bscroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("backtop", position);
    }),
      //3.监听上拉加载 但是只会加载一次
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
  },
  methods: {
    backtop(x, y, time = 300) {
      //判断属性是否有值

      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    //再次加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    //刷新可滚动区域的高度
    refresh() {
      this.scroll && this.scroll.refresh();
   
    },
  },
};
</script>

<style scoped>
</style>