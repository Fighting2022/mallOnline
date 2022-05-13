<template>
  <div class="desc" v-if="Object.keys(Desc).length !== 0">
    <div class="top">
      <div class="item-desc">
        <p>{{ Desc.desc }}</p>
        <div class="item line1"></div>
        <div class="item line2"></div>
      </div>
      <div class="item-desc-key">{{ Desc.detailImage[0].key }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailDesc",
  props: {
    Desc: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.desc {
  box-sizing: border-box;
  padding: 15px;
  height: 80px;
}

.item-desc {
  position: relative;
  height: 45px;
  font-size: 14px;
  line-height: 45px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-desc .item {
  position: absolute;
  height: 1px;
  width: 90px;
  background-color: #a3a3a5;
}

.item-desc .item.line1 {
  top: 5px;
  left: 0;
}

.item-desc .item.line2 {
  bottom: 0;
  right: 0;
}

.item-desc::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
}

.item-desc::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
}

.item-desc-key {
  font-size: 15px;
}
</style>