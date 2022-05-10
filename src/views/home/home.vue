<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="scroll" 
            ref="scroll" 
            :probe-type="3" 
            @backtop="contenbacktop"
            :pull-up-load="true"
            @pullingUp="loadmore">
      <home-swriper :banners="banners"></home-swriper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control :titles="['流行','新款','精选']"
                  @tabClick="tabClick"></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick"  v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar.vue"
  
  import HomeSwriper from "./childComps/HomeSwriper.vue"
  import RecommendView from "./childComps/RecommendView.vue"
  import Feature from "./childComps/Feature.vue"
  import TabControl from "../../components/content/tabControl/TabControl.vue"
  import GoodsList from "../../components/content/goodlist/GoodsList.vue"
  import Scroll from "../../components/common/scroll/Scroll.vue"
  import BackTop from "../../components/content/backtop/BackTop.vue"

  import { getHomeMulitidata , getHomeGoods} from "../../network/home"
  

  export default {
    name:"home",
    components:{
      NavBar,
      HomeSwriper,
      RecommendView,
      Feature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends:[],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]}
        },
        currenType:"pop",
        isShow:false
      }
    },
    created() {
       //1.请求轮播图数据
       this.getHomeMulitidata(),
       //2.请求商品数据
       this.getHomeGoods("pop")
       this.getHomeGoods("new")
       this.getHomeGoods("sell")
      
    },
    mounted() {
       //3.监听图片是否加载完成
      const refresh = this.debounce(this.$refs.scroll.refresh,200)

       this.$bus.$on("imageloaded",() =>{
         refresh()
       })
    },
    computed:{
      showgoods(){
        return this.goods[this.currenType].list
      }
    },
    methods: {

      //封装防抖函数
      debounce(fn,delay){
        let timer = null
        return function(...arg){
          if(timer)clearTimeout(timer)
          timer = setTimeout(() =>{
            fn.call(this,...arg)
          },delay)
        }
      },
      //事件监听
      tabClick(index){
         switch(index){
           case 0:
            this.currenType = "pop"
            break
           case 1:
            this.currenType = "new"
            break
           case 2:
            this.currenType = "sell"
            break
         }
      },

      //监听回到顶部按钮
      backClick(){
           console.log("点击发生了~~")
           this.$refs.scroll.backtop(0,0)
         },
      
      //监听滚动的位置
      contenbacktop(position){
        
        this.isShow = -position.y > 1000
      },
      
      //执行上拉加载更多
      loadmore(){
        this.getHomeGoods(this.currenType)
      },
      
      // 网络请求方法
      getHomeMulitidata(){
        getHomeMulitidata().then(res =>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      },
      //网路请求方法
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then((res) =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        console.log("函数被调用了~~~")
        this.$refs.scroll.finishPullUp()
        })
      }
    },
  }
</script>

<style scoped> 
  .home-nav{
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    z-index: 10;
    color: #fff;
    background-color: var(--color-tint);
  }

  #home{
    height: 100vh;
    position: relative;

  }

  .scroll{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left:0;
  }
</style>
