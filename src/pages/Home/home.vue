<template>
  <div>
      <!-- 头部组件 -->
    <homeHeader></homeHeader>
    <!-- 轮播组件 -->
    <homeSwiper :list="swiperList"></homeSwiper>
    <!-- 图标分类 -->
    <!-- <homeicon :list="iconList"></homeicon> -->
    <homeCategory :list="iconList"></homeCategory>
    <!-- 热销区域 -->
    <homerecommend :list="recommendList"></homerecommend>
    <!-- 周末去哪儿 -->
    <homeWeekend :list="weekendList"></homeWeekend>
  </div>
</template>
<script>
import homeHeader from './components/homeHeader.vue'
import homeSwiper from './components/headerSwiper.vue'
// import homeicon from './components/homeIcon.vue'
import homeCategory from './components/homeCategory.vue'
import homerecommend from'./components/recommend.vue'
import homeWeekend from'./components/weekend.vue'
import {mapState} from 'vuex'
export default{
    name:'home',
    data (){
        return{
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
        }
    },
    components:{
        homeHeader,
        homeSwiper,
        // homeicon,
        homeCategory,
        homerecommend,
        homeWeekend
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
        this.getHomeInfo()
    },
    // 不要缓存
    activated(){
        this.getHomeInfo()
    },
    methods:{
        getHomeInfo(){
            this.$http.get('/api/index.json?city='+this.city).then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            // console.log(res)
            res=res.data
            if(res.ret&&res.data){
                this.swiperList=res.data.swiperList
                this.iconList=res.data.iconList
                this.recommendList=res.data.recommendList
                this.weekendList=res.data.weekendList
            }
        }
    }
}
</script>
<style>

</style>
