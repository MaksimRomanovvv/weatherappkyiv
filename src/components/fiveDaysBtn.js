import {todayBtn} from './todayBtn.js';
import cloudy from '../img/cloudy.png';
import clear from '../img//clear.png';
import fewclouds from '../img/fewclouds.png';
import rain from '../img/rain.png';

import {chartPressure, currentData} from './findCity.js';
import fiveDaysRender from '../tamplates/fiveDaysRender.hbs';
import {dataChart} from '../index.js';
import {myChart} from '../index.js';
import {allTemp} from './findCity.js';
import {allPressure} from './findCity.js';
import {allWind} from './findCity.js';
import {allHumidity} from './findCity.js';
export function fiveDaysBtn(){
    
document.querySelector('.chart-btn').style.display = 'block';
    
let num=3;
    document.querySelector('.weather').style.display = 'none';
        document.querySelector('.quote-block').style.display = 'none';
        document.querySelector('.five-day-block').style.display = 'block';
        document.querySelector('.five-check-weather').style.display = 'flex';
        document.querySelector('.five-today').addEventListener('click',todayBtn);

document.querySelector('.main-weather').addEventListener('click',(e)=>{

if(e.target.classList.contains('next')){
    if(num===5){
        return
    }
document.querySelector(`.day${num+1}`).style.display = 'block';
document.querySelector(`.day${num-2}`).style.display = 'none';
num+=1;
console.log(num);
}

if(e.target.classList.contains('prev')){
    if(num===3){
        return
    }
    document.querySelector(`.day${num-3}`).style.display = 'block';
    document.querySelector(`.day${num}`).style.display = 'none';
    num-=1;
  
    }
    if(e.target.classList.contains('check-more')){
       document.querySelectorAll('.check-more').forEach(el => {
           el.style.opacity=0.3
       });
     e.target.style.opacity = 1;


        document.querySelector('.five-day-block').style.marginTop = '200px';
document.querySelector('.weather-more').style.display = 'flex';
// document.querySelector('.five-day-block').style.position = 'relative';
let elems = [];
 currentData.list.forEach(el => {
    if(elems.length === 7){
        return
    }

    if(new Date(el.dt*1000-20000000).getDay() === +e.target.id){
        
        elems.push(el)
    }
  
 });
elems.forEach(el => {
    // console.log(el)
    el.dt_new = `${el.dt_txt.split('')[11]}${el.dt_txt.split('')[12]}`;
el.main.temp = `${Math.round(el.main.temp)}`;


if(el.weather[0].main === 'Clouds'){
    if(el.weather[0].description === 'few clouds'){
        el.visibility = `${fewclouds}`;
    }
    el.visibility = `${cloudy}`;
    }
    if(el.weather[0].main === 'Rain'){
    
        el.visibility = `${rain}`;
    }
    if(el.weather[0].main === 'Clear'){
    
        el.visibility = `${clear}`;
    }

});
console.log(elems);

 document.querySelector('.weather-more').innerHTML = fiveDaysRender(elems)
    }
});
//    document.querySelector('.scroll-hours').addEventListener('click',()=>{
//        document.querySelector('.weather-more').classList.toggle('move-weather')
//    })
   document.querySelector('.chart-btn').addEventListener('click', ()=>{
     
    
    document.querySelector('.five-day-block').style.marginTop = '200px';
       document.querySelector('.container-chart').style.display = 'block'; 
       document.querySelector('.chart-btn').style.display = 'none';

//        document.querySelector('.chart-pressure').addEventListener('click', (e)=>{
// if(dataChart.datasets.includes(allPressure)){
//         dataChart.datasets.forEach(el => {
//             if(el.label === 'Atmosphere Pressure, m/m'){
//                 e.target.classList.add('check-label')
//                 dataChart.datasets.splice(dataChart.datasets.indexOf(el),1)
//                 myChart.update();
//                 return
//             } });}
//        else {
//         e.target.classList.toggle('check-label')
//         dataChart.datasets.push(allPressure);
//         myChart.update();
//        }
   
//        })

//        document.querySelector('.chart-temp').addEventListener('click', (e)=>{
//         if(dataChart.datasets.includes(allTemp)){
//                 dataChart.datasets.forEach(el => {
//                     if(el.label === 'Temperature, C°'){
//                          e.target.classList.add('check-label')
//                         dataChart.datasets.splice(dataChart.datasets.indexOf(el),1)
//                         myChart.update();
//                         return
//                     } });}
//                else {
//                    e.target.classList.toggle('check-label')
//                 dataChart.datasets.push(allTemp);
//                 myChart.update();
//                }
           
//                })

//                document.querySelector('.chart-humidity').addEventListener('click', (e)=>{
//                 if(dataChart.datasets.includes(allHumidity)){
//                         dataChart.datasets.forEach(el => {
//                             if(el.label === 'Humidity, %'){
//                                  e.target.classList.add('check-label')
//                                 dataChart.datasets.splice(dataChart.datasets.indexOf(el),1)
//                                 myChart.update();
//                                 return
//                             } });}
//                        else {
//                            e.target.classList.toggle('check-label')
//                         dataChart.datasets.push(allHumidity);
//                         myChart.update();
//                        }
                   
//                        })

//                        document.querySelector('.chart-wind').addEventListener('click', (e)=>{
//                         if(dataChart.datasets.includes(allWind)){
//                                 dataChart.datasets.forEach(el => {
//                                     if(el.label === 'Wind Speed, m/s'){
//                                          e.target.classList.add('check-label')
//                                         dataChart.datasets.splice(dataChart.datasets.indexOf(el),1)
//                                         myChart.update();
//                                         return
//                                     } });}
//                                else {
//                                    e.target.classList.toggle('check-label')
//                                 dataChart.datasets.push(allWind);
//                                 myChart.update();
//                                }
                        //    
                            //    })
       document.querySelector('.chart-btn-hide').addEventListener('click',()=>{
        document.querySelector('.container-chart').style.display = 'none';
        document.querySelector('.chart-btn').style.display = 'block';

       })
   })

}