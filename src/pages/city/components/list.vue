<template>
    <div class="sity-list" ref="wrapper">
        <div>
            <div class="area">
                <h2 class="title border-bottom">您的位置</h2>
                <div class="list">
                <div class="list-wrapper">
                    <div class="button active">{{this.city}}</div>
                </div>
                </div>
            </div>
            <div class="area">
                <h2 class="title border-bottom">热门城市</h2>
                <div class="list">
                <div class="list-wrapper" v-for="(item,key) in hotCities" :key="key">
                    <div class="button" @click="handleCityChange(item.name)">{{item.name}}</div>
                </div>
                </div>
            </div>
            <div class="area" 
            v-for="(item,key) in cities" 
            :key="key"
            :ref="key"
            >
                <h2 class="title border-bottom" >{{key}}</h2>
                <div class="item-list">
                <div class="list-wrapper border-bottom" v-for="subitem in item" :key="subitem.id">
                    <div class="button" @click="handleCityChange(subitem.name)">{{subitem.name}}</div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default{
    name:'list',
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{click: true,})
    },
    watch:{
        letter(){
            if(this.letter){
                // console.log(this.$refs[this.letter][0])
                let element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    methods:{
        handleCityChange(city){
            this.changeCity(city)
            // this.$store.commit('changeCity',city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    }
}
</script>
<style lang='scss' scoped>
    .sity-list{
        overflow: hidden;
        position: absolute;
        top: 156px;
        left: 0px;
        right: 0px;
        bottom: 0px;
         .area{
            width:100%;
            .title{
                font-size:26px;
                background: #eee;
                height: 42px;
                line-height: 42px;
                padding-left:20px;
                color:#666;
            }
            .list{
                padding:10px 30px 10px 10px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .list-wrapper{
                    width:32%;
                    box-sizing: border-box;
                    margin-bottom:5px;
                    .button{
                        width:100%;
                        box-sizing: border-box;
                        border: 1px solid #ccc;
                        padding:10px 0px;
                        border-radius: 5px;
                        text-align: center;
                        // margin: 5px;
                        &.active{
                            border: 1px solid #00bcd4;
                        }
                    }
                }
            }
            .item-list{
                width:100%;
                height:100%;
                padding-left:20px;
                .list-wrapper{
                    height:50px;
                    line-height: 50px;
                }
            }
        }
    }
   
</style>

