<template>
  <div class="alphabet">
      <ul>
          <li v-for="item in letters" 
          :key="item"
          @click="handleLetterClick"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          :ref="item"
          >
            {{item}}
          </li>
      </ul>
  </div>
</template>
<script>
export default{
    name:'alphabet',
    data(){
        return{
            touchState:false,//只有当touchState为true时，才会触发touch事件
            startY:0,
            timer:null
        }
    },
    updated(){
         this.startY=this.$refs['A'][0].offsetTop
    },
    props:{cities:Object},
    computed:{
        letters(){
            let letters=[]
            for (var i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleLetterClick(e){
            // console.log(e.target.innerText)
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchState=true
        },
        handleTouchMove(e){
            // console.log(e.target.innerText)
            if(this.touchState){
                // 节流
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer=setTimeout(()=>{
                    let touchY=e.touches[0].clientY-156
                    let index=Math.floor((touchY-this.startY)/20)
                    console.log(index)
                    if(index>= 0&& index< this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
               
            }
        },
        handleTouchEnd(){
            this.touchState=false
        }
    }
}
</script>
<style lang='scss' scoped>
@import '@/assets/style/vabriles.styl';
    .alphabet{
        position: absolute;
        right: 0px;
        top:156px;
        bottom:0px;
        display: flex;
        justify-content: center;
        align-items: center;
        ul {
            li{
                color: $bgColor;
                width:20px;
                height: 20px;
                margin-top:10px;
            }
        }
    }
</style>

