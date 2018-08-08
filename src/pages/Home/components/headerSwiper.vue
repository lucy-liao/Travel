<template>
  <div class="wrapper">
      <mt-swipe>
        <mt-swipe-item v-for="item in list" :key="item.id">
            <img :src="item.imgUrl" alt="">
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>
<script>
export default{
     name:'swiper',
     props:{list:Array},
     data (){
         return{
            //  swipeList:[
            //      {id:0,img_url:"https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png"},
            //      {id:1,img_url:"https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/sc_sqdc_20180727.jpg"},
            //      {id:2,img_url:"https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg"},                 
            //  ]
            
         }
     }
}
</script>
<style lang='scss'scoped>
    .wrapper{
        width:100%;
        height: 32.5vw;
            img{
                width:100%;
                height:100%;
            }
    }
    
</style>

