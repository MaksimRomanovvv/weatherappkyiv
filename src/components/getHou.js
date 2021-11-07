export default function getHou (time){
    if(time.getHours().toString().split('').length === 1){
return `0${time.getHours()}`
    }
   return time.getHours()
}