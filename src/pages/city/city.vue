<template>
    <div class="city">
        <cityHeader></cityHeader>
        <search :cities="cities"></search>
        <List :hotCities="hotCities" :cities="cities" :letter="letter"></List>
        <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
    </div>
</template>
<script>
import cityHeader from './components/cityHeader.vue'
import Search from './components/search.vue'
import List from './components/list.vue'
import Alphabet from './components/alphabet.vue'
export default{
    name:'city',
    data () {
        return{
            cities:{},
            hotCities:[],
            letter:'',
        }
    },
    components:{
        cityHeader,
        Search,
        List,
        Alphabet
    },
    mounted () {
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            this.$http.get('/api/city.json').then(this.getCityInfoSucc)
        },
        getCityInfoSucc(res){
            res=res.data
            if(res.ret&&res.data){
                this.cities=res.data.cities
                this.hotCities=res.data.hotCities
            }
        },
        handleLetterChange(letter){
            // console.log(letter)
            this.letter=letter
        }
    }
}
</script>
<style lang='scss' scoped>
    // .city{
    //     position: relative;
    // }
</style>

