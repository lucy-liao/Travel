<template>
    <div class="header-icon">
        <a class="item" href="#" v-for="item of list" :key="item.id">
            <div class="icon">
                <img :src="item.imgUrl" alt="">
            </div>
            <p class="desc">{{item.desc}}</p>
        </a>
    </div>
</template>
<script>
export default{
    name:'homeicon',
    props:{list:Array}
}
</script>
<style lang='scss' scoped>
    .header-icon{
        padding: 5px ;
        width:100%;
        height: 50vw;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        .item{
            width:25%;
            height:50%;
            // background: blue;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           .icon{
               width:120px;
                height:120px;
                margin-bottom:10px;
                img{
                    width:100%;
                    height:100%;
                }
           }
            .desc{
                color:#333;
                font-size:28px;
            }
        }
    }
</style>
