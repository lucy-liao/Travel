let defaultCity='上海'
if(localStorage.city){
    defaultCity=localStorage.getItem('city')
}
export default{
     city:defaultCity
}