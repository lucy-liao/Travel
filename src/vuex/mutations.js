export default {
        changeCity(state,city){
            state.city=city
            localStorage.setItem('city',city)
        }
    }