<template>
    <div class="header">
        <router-link tag="div" to="/" class="header-icon" v-show="headerShow">
            <span class="iconfont back-icon">&#xe624;</span>
        </router-link>
        <router-link tag="div" to="/" class="header-title" v-show="!headerShow" :style="opacity">
            <span class="iconfont back-icon">&#xe624;</span>
            <h2 class="title">
                景点详情
            </h2>
        </router-link>
    </div>
</template>
<script>
export default{
    name:'detailHeader',
    data (){
        return{
            headerShow:true,
            opacity:{
                opacity:0
            }
        }
    },
    methods:{
       handleScroll(){
        //    console.log(document.documentElement.scrollTop)
            let top=document.documentElement.scrollTop
            if(top>60){
                let opacity=top/140
                opacity=opacity > 1 ? 1 : opacity
                this.opacity={opacity}
                this.headerShow=false
            }else{
                 this.headerShow=true
            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>
<style lang='scss' scoped>
@import '@/assets/style/vabriles.styl';
    .header{
        position: fixed;
        top:0px;
        left: 0px;
        right: 0px;
        height: 86px;
        line-height: 86px;
        text-align:center;
        // box-sizing: border-box;
        .header-icon{
            width:56px;
            line-height: 56px;
            border-radius: 50%;
            margin-left:10px;
            margin-top:10px;
            background: rgba(0,0,0,0.5);
             .back-icon{
                color:#fff;
                font-size: 24px;
            }
        }
        .header-title{
            position: fixed;
            left: 0px;
            top:0px;
            right: 0px;
            display: flex;
            background: $bgColor;
            padding-left:10px;
            z-index: 10000;
            .back-icon{
                color:#fff;
                font-size: 24px;
            }
            .title{
                flex:1;
                font-size: 30px;
                color: #fff;
                font-weight: bold;
            }
        }
        
       
    }
</style>

