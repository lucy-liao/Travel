<template>
  <div class="detail">
      <detailBanner  :name="sightName" :img="bannerImg" :imgs="gallaryImgs"></detailBanner>
      <detailHeader></detailHeader>
      <div class="contain">
          <detail-list :list ="list"></detail-list>
      </div>
  </div>
</template>
<script>
import detailBanner from'./components/banner.vue'
import detailHeader from'./components/header.vue'
import detailList from './components/list.vue'
    export default{
        name:'detail',
        components:{
            detailBanner,
            detailHeader,
            detailList
        },
        data () {
            return{
                list:[],
                sightName:'',
                gallaryImgs:[],
                bannerImg:'',
            }
        },
        mounted(){
            this.getDetailInfo()
        },
        methods:{
            getDetailInfo(){
                this.$http.get(`/api/detail.json?${this.$route.params.id}`).then(this.getDetailInfoSucc)
            },
            getDetailInfoSucc(res){
                res=res.data
                if(res.ret &&res.data){
                    this.list=res.data.categoryList
                    this.sightName=res.data.sightName
                    this.gallaryImgs=res.data.gallaryImgs
                    this.bannerImg=res.data.bannerImg
                }
            }
        }
    }
</script>
<style lang='scss' scoped>
    .contain{
        height:1500px;
    }
</style>

