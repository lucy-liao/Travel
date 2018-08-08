<template>
  <div class="recommend">
      <div class="recommend-title">热门推荐</div>
      <ul>
          <router-link tag="li"  class="item border-bottom" v-for="item in list" :key="item.id" :to="'/detail/'+item.id">
              <img :src="item.imgUrl">
              <div class="item-info">
                  <p class="item-title">{{item.title}}</p>
                  <p class="item-desc">{{item.desc}}</p>
                  <button class="item-button">查看更多</button>
              </div>
          </router-link>
      </ul>
  </div>
</template>
<script>
export default{
    name:'recommend',
    props:{list:Array}
}
</script>
<style lang='scss' scoped>
    .recommend{
        width:100%;
        height:100%;
        .recommend-title{
            width:100%;
            height:60px;
            line-height: 60px;
            background-color: #eee;
            text-indent: 15px;
            font-size: 30px;
        }
        .item{
            display: flex;
            padding:15px;
            img{
                width:120px;
                height:120px;
            }
            .item-info{
                flex:1;
                margin-left:15px;
                .item-title{
                    line-height: 40px;
                    font-size:28px;
                }
                .item-desc{
                    line-height: 28px;
                    font-size:24px;
                    color: #616161
                }
                .item-button{
                    background: #ff9300;
                    line-height: 34px;
                    border-radius: 10px;
                    // text-align:center;
                    padding:0px 15px;
                    margin-top: 15px;
                    color:#fff;
                }
            }
        
        }
    }
    
</style>

