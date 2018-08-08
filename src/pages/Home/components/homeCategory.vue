<template>
  <div class="category">
    <swiper :options="swiperOption" class="swiper-wrapper">
            <swiper-slide class="swiper-slide" v-for="(page,index) in pages" :key="index">
                <a class="item" href="#" v-for="item in page" :key="item.id">
                    <div class="icon">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <p class="desc">{{item.desc}}</p>
                </a>
            </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default{
    name:'homeCategory',
    data(){
        return{
            swiperOption: {
                pagination : '.swiper-pagination',
            }
        }
  },
  props:{list:Array},
  computed:{
     pages(){
         let pages=[]
         this.list.forEach((item,index)=>{
             const page=Math.floor(index/8)
             if(!pages[page]){
                 pages[page]=[];
             }
             pages[page].push(item)
         })
         return pages
     }

  }
}
</script>
<style lang='scss' scoped>
    .category{
        margin-top:10px;
        .swiper-wrapper{
            width:100%;
            height:100%;
            .swiper-slide{
                display: flex;
                flex-wrap: wrap;
                .item{
                    width:25%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    padding-bottom:10px;
                    .icon{
                        width:120px;
                        height:120px;
                        img{
                            width:100%;
                            height:100%;
                        }
                    }
                    .desc{
                        margin-top:10px;
                        color:#666;
                        font-size: 28px;
                    }
                }
            }
        }
    }
</style>

