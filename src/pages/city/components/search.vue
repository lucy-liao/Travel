<template>
    <div class="search">
        <div class="city-search">
            <input type="text" v-model="keyword" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="wrapper" v-show="keyword">
            <ul>
                <li class="content border-bottom" v-for="item in list" :key="item.id" @click="handleCityChange(item.name)">{{item.name}}</li>
                <li class="content border-bottom" v-show="!list.length">没有匹配到数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
    name:'search',
    data (){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    props:{cities:Object},
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer=setTimeout(()=> {
                const result=[]
                for (var i in this.cities) {
                    this.cities[i].forEach(item=>{
                        if(item.spell.indexOf(this.keyword)>-1 ||item.name.indexOf(this.keyword)>-1){
                            result.push(item)
                        }
                    });
                }
                this.list=result;
            }, 100);
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{click: true,})
    },
    methods:{
        handleCityChange(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    }
}
</script>
<style lang='scss' scoped>
@import '@/assets/style/vabriles.styl';
    .city-search{
        height: 54px;
        background: $bgColor;
        padding:8px;
        input{
            width:100%;
            height:50px;
            text-align: center;
            line-height: 50px;
            border-radius: 5px;
        }
        
    }
    .search-content{
            position: absolute;
            left:0px;
            right:0px;
            bottom:0px;
            top:156px;
            z-index: 100;
            overflow: hidden;
            background: #eee;
            .content{
                padding:5px;
                background: #fff;
                line-height: 50px;
            }
        }
</style>