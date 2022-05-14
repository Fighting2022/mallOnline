import { debounce } from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener:null,
      refresh:null
    }
  },
  mounted() {
    //对页面刷新做防抖处理
    this.refresh = debounce(this.$refs.scroll.refresh, 200);
    this.itemImgListener = () => {
      this.refresh()
    }
    //取消全局监听
    this.$bus.$on("imageloaded", this.itemImgListener);
  },
}