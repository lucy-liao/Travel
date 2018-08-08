<template>
    <div>
        <div class="banner" @click="showGallary">
            <img class="banner-img" :src="img" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    {{this.name}}
                </div>
                <div class="banner-num">
                    <span class="iconfont arrow-icon">&#xe624;</span>
                    {{imgs.length}}
                </div>
            </div>
        </div>
        <Gallary v-show="gallaryShow" @close="handleGallaryHide" :imgs="imgs" ></Gallary>
  </div>
</template>
<script>
import Gallary from'common/gallay/gallary.vue'
    export default{
        name:'banner',
        props:{
            img:String,
            imgs:Array,
            name:String
        },
        components:{
            Gallary,
        },
        data(){
            return{
                gallaryShow:false
            }
        },
        methods:{
            showGallary(){
                this.gallaryShow=true;
            },
            handleGallaryHide(){
                this.gallaryShow=false
            }
        }
    }
</script>
<style lang='scss' scoped>
    .banner{
        overflow: hidden;
         height:55vw;
         position: relative;
        .banner-img{
            width:100%;
        }
        .banner-info{
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: 0px;
            height: 50px;
            line-height: 50px;
            display: flex;
            padding :5px;
            color:#fff;
            background: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
            .banner-title{
                flex:1;
                font-size: 24px;
                font-weight: bold;
            }
            .banner-num{
                height:30px;
                line-height: 30px;
                padding:0px 20px;
                background: #000;
                border-radius: 15px;
                text-align: center;
                margin-top: 15px;
            }
        }
    }
</style>