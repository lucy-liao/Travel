<template>
  <div class="weekend">
      <div class="weekend-title">周末去哪儿</div>
      <ul>
          <li class="item" v-for="item in list" :key="item.id">
              <img :src="item.imgUrl" alt="">
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>
<script>
export default{
    name:'weekend',
    props:{list:Array}
}
</script>
<style lang='scss' scoped>
    .weekend{
        width:100%;
        height:100%;
        .weekend-title{
            width:100%;
            height:60px;
            line-height: 60px;
            background-color: #eee;
            text-indent: 15px;
            font-size: 30px;
        }
        .item{
            width:100%;
            height:100%;
            img{
                width:100%;
                height:32.5vw;
            }
            .item-info{
                padding:10px 15px 15px 15px;
                .item-title{
                    color:#212121;
                    font-size:24px;
                    line-height: 30px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .item-desc{
                    color:#616161;
                    margin-top:10px;
                    font-size:20px;
                    line-height: 30px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
    }
</style>

