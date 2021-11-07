export const KEY = 'e0b65b8f7cc892402e13eaf34ed7859b';
import getHou from './getHou.js';
import getMin from './getMin.js';
import changeTime from "./changeTime.js";
import weatherImg from './weatherimg.js';
import {zeroDate} from '../index';
import { fromJSON } from 'postcss';
export let currentCity = 'kyiv';
import cloudy from '../img/cloudy.png';
import clear from '../img//clear.png';
import fewclouds from '../img/fewclouds.png';
import rain from '../img/rain.png';
import {dataChart} from '../index.js';
import {config} from '../index.js';
import {labels} from '../index.js';
import {myChart} from '../index.js';
export let allTemp = {
    label: 'Temperature, C°',
    backgroundColor: 'rgba(255, 107, 9, 1)',
    borderColor: 'rgba(255, 107, 9, 1)',
    data: [ ],
  };
export let allHumidity = {
    label: 'Humidity, %',
    backgroundColor: 'rgba(9, 6, 235, 1)',
    borderColor: 'rgba(9, 6, 235, 1)',
    data: [ ],
  };
export let allWind = {
    label: 'Wind Speed, m/s',
    backgroundColor: 'rgba(234, 154, 5, 1)',
    borderColor: 'rgba(234, 154, 5, 1)',
    data: [ ],
  };
export let allPressure = {
    label: 'Atmosphere Pressure, m/m',
    backgroundColor: 'rgba(6, 120, 6, 1)',
    borderColor: 'rgba(6, 120, 6, 1)',
    data: [ ],
  };
const weekDay = ['Sunday','Monday','Thusday','Wednesday','Thrirsday','Friday','Saturday'];
const monthCurrent = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sepr", "Oct", "Nov", "Dec"
];
export let chartPressure = [];
export let currentData = [];
export  function findCity (name){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&appid=${KEY}`)
.then((response) => {
    return response.json()})
.then((data)=>{
 console.log(data);
    if(data.message === 'city not found'){
        document.querySelector('header').insertAdjacentHTML('beforeend', `<div class="error">  City not found!</div>`);
        setTimeout(() => {
           document.querySelector('.error').remove() 
        }, 3000);
        return 
    }
currentData = data;
// console.log(labels);
currentCity = data.city.name;
document.querySelector('.five-city').textContent = currentCity;
   

document.querySelector('.temperature').textContent = `${Math.round(data.list[0].main.temp)}`;
document.querySelector('.city-name').textContent = `${data.city.name},${data.city.country}`;
document.querySelector('.five-city').textContent = `${data.city.name},${data.city.country}`;
// document.querySelector('.temperature-min').textContent = `${Math.round(data.list[0].main.temp_min)}°`;
// document.querySelector('.temperature-max').textContent = `${Math.round(data.list[0].main.temp_max)}°`;
let dateSunrise = new Date(data.city.sunrise*1000);
let dateSunset = new Date(data.city.sunset*1000);
document.querySelector('.sunrise').textContent = `${+getHou(dateSunrise)+1}:${getMin(dateSunrise)}`;

document.querySelector('.sunset').textContent = `${+getHou(dateSunset)+1}:${getMin(dateSunset)}`;

changeTime(data.city.timezone/60);
weatherImg(data);

let currentDay = new Date(data.list[0].dt*1000-10000);

const getAllTemp = function(arr,day){

    // let images =[];
let temp = [];
arr.forEach((el)=> {

    if(new Date(el.dt*1000-10000).getDay() === day){
temp.push(el.main.temp_min)
// images.push(el.weather[0].main)

    }

}
);

return temp
}
const getAllTempMax = function(arr,day){

    // let images =[];
let temp = [];
arr.forEach((el)=> {

    if(new Date(el.dt*1000-10000).getDay() === day){
temp.push(el.main.temp_max)
// images.push(el.weather[0].main)

    }

}
);

return temp
}

const getAllHumidity = function(arr,day){

    // let images =[];
let hum = [];
arr.forEach((el)=> {

    if(new Date(el.dt*1000-10000).getDay() === day){
     
hum.push(el.main.humidity)
// images.push(el.weather[0].main)

    }

}
);

return hum
}

const getAllWind = function(arr,day){

    // let images =[];
let wind = [];
arr.forEach((el)=> {

    if(new Date(el.dt*1000-10000).getDay() === day){
    
wind.push(el.wind.speed)
// images.push(el.weather[0].main)

    }

}
);

return wind
}

const getAllPressure = function(arr,day){

    // let images =[];
let pressure = [];
arr.forEach((el)=> {

    if(new Date(el.dt*1000-10000).getDay() === day){
      
        pressure.push(el.main.pressure)
// images.push(el.weather[0].main)

    }

}
);

return pressure
}

const getAllImg = function(arr,day){

    let images =[];
if (day > 6){
    day -= 6;
    // arr.forEach((el)=> {

    //     if(new Date(el.dt*1000-15000).getDay() === 0){
    
    
    // images.push(el.weather[0].main)
    
    //     }
      
    // }
    
}
 

arr.forEach((el)=> {

    if(new Date(el.dt*1000-15000).getDay() === day){


images.push(el.weather[0].main)

    }
  
}
);

return images
}
// console.log(getAllImg(data.list,currentDay.getDay()));

for (let i = 1; i < 6; i++) {
let arr = getAllImg(data.list,currentDay.getDay()+i-1)

if(arr.includes('Rain')){
    document.querySelector(`.day${i}`).querySelector('.five-img').setAttribute('src',`${rain}`)
    continue;
}
if(arr.includes('Clouds') && arr.includes('Clear')){
    document.querySelector(`.day${i}`).querySelector('.five-img').setAttribute('src',`${fewclouds}`)
    continue;
}
if(arr.includes('Clouds')){
    document.querySelector(`.day${i}`).querySelector('.five-img').setAttribute('src',`${cloudy}`)
    continue;
}
if(arr.includes('Clear')){
    document.querySelector(`.day${i}`).querySelector('.five-img').setAttribute('src',`${clear}`)
    continue;
} 
}


document.querySelector('.temperature-min').textContent = `${Math.round(Math.min(...getAllTemp(data.list,currentDay.getDay())))}°`
document.querySelector('.temperature-max').textContent = `${Math.round(Math.max(...getAllTempMax(data.list,currentDay.getDay())))}°`
dataChart.datasets[0].data = [];
console.log();
    dataChart.datasets[1].data = [];
    dataChart.datasets[2].data = [];
    dataChart.datasets[3].data = [];
  
for (let i = 1; i < 6; i++) {
    
    // allTemp.data.push(Math.max(...getAllTemp(data.list,currentDay.getDay())))
    
    // allHumidity.data.push(Math.max(...getAllHumidity(data.list,currentDay.getDay())))
    
    // allWind.data.push(Math.max(...getAllWind(data.list,currentDay.getDay())))
    
    // allPressure.data.push(Math.max(...getAllPressure(data.list,currentDay.getDay())))
    
dataChart.datasets[0].data.push(Math.max(...getAllTemp(data.list,currentDay.getDay())));
dataChart.datasets[1].data.push(Math.max(...getAllHumidity(data.list,currentDay.getDay())));
dataChart.datasets[2].data.push(Math.max(...getAllWind(data.list,currentDay.getDay())));
dataChart.datasets[3].data.push(Math.max(...getAllPressure(data.list,currentDay.getDay())));

   document.querySelector(`.day${i}`).querySelector('.min').textContent = `${Math.round(Math.min(...getAllTemp(data.list,currentDay.getDay())))}°`
   document.querySelector(`.day${i}`).querySelector('.max').textContent = `${Math.round(Math.max(...getAllTempMax(data.list,currentDay.getDay())))}°`
   let numDay=currentDay.getDay();
   document.querySelector(`.day${i}`).querySelector('.check-more').setAttribute('id',numDay)
   document.querySelector(`.day${i}`).querySelector('.five-day').textContent = weekDay[numDay];
//  console.log(labels);
   document.querySelector(`.day${i}`).querySelector('.five-date').textContent = `${currentDay.getDate()}  ${monthCurrent[currentDay.getMonth()] }`
 labels[i-1]=`${monthCurrent[currentDay.getMonth()]} ${currentDay.getDate()},${currentDay.getFullYear()}`
   currentDay.setDate(currentDay.getDate()+1)
 
}
myChart.update();
// dataChart.datasets.push(allTemp,allPressure,allWind,allHumidity)
// config.options.plugins.legend.display = false;
})


}