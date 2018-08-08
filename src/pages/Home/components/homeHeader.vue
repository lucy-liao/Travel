<template>
    <div class="header">
        <div class='header-back'>
            <div class="iconfont back-icon">&#xe624;</div>
            <!-- <span class="iconfont back-icon">&#xe624;</span> -->
        </div>
        <div class="header-input">
            <span class="iconfont search-icon">&#xe627;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-city">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    export default{
        name:'homeHeader',
        computed:{
            ...mapState(['city'])
        }
    }
</script>
<style lang="scss" scoped>
@import '@/assets/style/vabriles.styl';
    .header{
        display:flex;
        width:100%;
        height: 86px;
        line-height: 86px;
        background-color:$bgColor;
        .header-back{
            width:60px;
            text-align: center;
            float:left;
            .back-icon{
                text-align: center;
                font-size: 40px;
                color:#fff;
            }
        }
        &-input{
            flex:1;
            height: 64px;
            line-height: 64px;
            background-color: #fff;
            border-radius:5px;
            margin: 10px;
            padding-left:20px;
            font-size:20px;
            .search-icon{
                font-size: 20px;
            }
        }
        .header-city{
            min-width:100px;
            float:right;
            color:#fff;
            line-height:86px;
            .arrow-icon{
                font-size:24px;
            }
        }
    }
</style>

