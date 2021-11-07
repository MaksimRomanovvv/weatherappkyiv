export default function getSec(time){
    if(time.getSeconds().toString().split('').length === 1){
return `0${time.getSeconds()}`} 
return time.getSeconds()
}