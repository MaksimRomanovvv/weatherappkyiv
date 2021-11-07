export default  function getMin(time){
    if(time.getMinutes().toString().split('').length === 1){
return  `0${time.getMinutes()}`
    }
   return time.getMinutes()
}