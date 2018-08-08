import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
Vue.use(Vuex)


export default new Vuex.Store({
    // 简单使用
    // state:{
    //     city:defaultCity
    // },
    // mutations:{
    //     changeCity(state,city){
    //         state.city=city
    //         localStorage.setItem('city',city)
    //     }
    // }
    state,
    mutations
})