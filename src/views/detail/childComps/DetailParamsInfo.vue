<template>
  <div class="params-info" v-if="Object.keys(GoodsParam).length !== 0">
    <!-- 获取商品的尺码信息 -->
    <table v-for="item1 in GoodsParam.rule.tables" :key="item1.id" class="rule">
      <tr v-for="item2 in item1" :key="item2.id">
        <td v-for="item3 in item2" :key="item3.id">{{ item3 }}</td>
      </tr>
    </table>
    <table class="info">
      <!-- 获取商品的厂家信息 -->
      <tr v-for="item4 in GoodsParam.info.set" :key="item4.id">
        <td v-for="item5 in item4" :key="item5.id">{{ item5 }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    GoodsParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.params-info {
  padding: 20px 10px;
}
.rule {
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
.info {
  box-sizing: border-box;

  width: 100%;
  border-collapse: collapse;
}
.params-info td {
  border-bottom: 1px solid rgb(246, 246, 246);
}
.rule tr td:nth-child(1) {
  height: 42px;
  text-align: left;
  width: 90px;
}
.info tr td:nth-child(2),
.info tr td:nth-child(3),
.info tr td:nth-child(4) {
  color: var(--color-tint);
}
.info tr td:nth-child(1) {
  height: 42px;
  text-align: left;
  width: 90px;
}
</style>