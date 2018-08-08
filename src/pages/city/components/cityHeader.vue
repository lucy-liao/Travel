<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        城市选择
    </div>
</template>
<script>
export default{
    name:'cityHeader',
}
</script>
<style lang='scss' scoped>
@import '@/assets/style/vabriles.styl';
    .header{
        width:100%;
        height: 86px;
        line-height: 86px;
        background: $bgColor;
        position: relative;
        text-align: center;
        color:#fff;
        font-size: 28px;
        .back-icon{
            width:60px;
            color:#fff;
            font-size:30px;
            position: absolute;
            left: 0px;
            top:0px;
        }
    }
</style>