<template>
  <div class="list">
      <div class="item" 
            v-for="(item,index) in list" 
            :key="index"
      >
          <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
          </div>
          <div class="item-children" v-if="item.children">
                <detailList :list="item.children"></detailList>
          </div>
      </div>
  </div>
</template>
<script>
export default{
    name:'detailList',
    props:{list:Array}
}
</script>
<style lang='scss' scoped>
@import '@/assets/style/vabriles.styl';

        .item-title{
            line-height:40px;
            font-size:24px;
            padding:10px;
            color:$bgColor;
        }
         .item-title-icon{
                position: relative;
                top:10px;
                left:10px;
                margin-right:10px;
                display:inline-block;
                width:25px;
                height: 25px;
                background: url("http://s.qunarzz.com/piao/image/touch/sight/detail.png") no-repeat;
                background-size:30px 24px;
            }
            .item-children{
                padding-left:20px;
            }
</style>

