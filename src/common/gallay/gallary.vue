<template>
    <div class="container" @click="handleClose">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide class="swiper-container" v-for="(item,index) in imgs" :key="index">
                    <img :src="item" alt="">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
export default{
    name:'gallary',
     props:{
            imgs:Array,
        },
    data(){
        return{
            swiperOption: {
                pagination : '.swiper-pagination',
                paginationType:'fraction',
                observeParents:true,
                observer:true,
            }
        }
  },
  methods:{
      handleClose(){
          this.$emit('close')
      }
  }
}
</script>
<style lang="scss" scoped>
    .container{
        position: fixed;
        top:0px;
        left: 0px;
        right: 0px;
        bottom:0px;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 10000;
        .wrapper{
            background: #fff;
            height:50%;
            .swiper-container{
                width:100%;
                height:100%;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .swiper-pagination{
                color:#fff;
                bottom:0px;

            }
        }
    }
</style>
