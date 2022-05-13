<template>
  <div class="homeswiper">
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt=""  @load="bannerimgloaded"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isshow:false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    bannerimgloaded(){
     if(!this.isshow){
        this.$emit("bannerimgloaded")
        this.isshow = true
     }
    }
  },
};
</script>

<style scoped>
  
</style>