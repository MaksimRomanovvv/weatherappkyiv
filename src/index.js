import styles from './css/style.css';
import { debounce } from '../node_modules/throttle-debounce';
import favoriteCity from './components/favoriteCity.js';
import cities from '../node_modules/cities.json';
import {findCity} from './components/findCity.js';
import cityList from './tamplates/cityList.hbs';
import timer from './components/timer';
import renderFavCity from './components/renderFavCity.js';

import {currentCity} from './components/findCity.js';
import {fiveDaysBtn} from './components/fiveDaysBtn.js';
import html from './fiveDays.html';
import {KEY} from './components/findCity.js';
import {chartPressure} from './components/findCity.js'

favoriteCity();
renderFavCity();

timer();

let chartDate = new Date();
findCity('киев');




document.querySelector('.geo').addEventListener('click',()=>{


navigator.geolocation.getCurrentPosition(function (pos) {
  var crd = pos.coords;
console.log(crd.latitude);
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&appid=${KEY}`)
      .then((response) => {
     
          return response.json()})
      .then((data) => {
        document.querySelector('.city-search').value = `${data.name}`;
      findCity(data.name)
    })
});})


// document.querySelector('.geo').addEventListener('click',()=>{

//   function success(pos) {
//     const crd = pos.coords;
//     console.log(crd.latitude);


//     fetch(`api.openweathermap.org/data/2.5/weather?lat=${Math.round(crd.latitude)}&lon=${Math.round(crd.longitude)}&units=metric&appid=${KEY}`)
//     .then((response) => {
//         return response.json()})
//     .then((data)=>{
//      console.log(data)})

//   }
//   navigator.geolocation.getCurrentPosition(success);
// console.log(lat);
// console.log(lon);

  
  
//   })


window.addEventListener('keydown',(e)=>{
 
})


document.querySelector('.form').addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log(1);
 
    if(document.querySelector('.city-search').value === ''){
      document.querySelector('header').insertAdjacentHTML('beforeend', `<div class="error">  Enter the city! </div>`);
      setTimeout(() => {
         document.querySelector('.error').remove() 
      }, 3000);
      return 
    }
   findCity(document.querySelector('.city-search').value)
  
  })


// window.addEventListener('keydown', (e)=>{
// if(e.keyCode === 13){
//   if(document.querySelector('.city-search').value === ''){
//     document.querySelector('header').insertAdjacentHTML('beforeend', `<div class="error">  Enter the city! </div>`);
//     setTimeout(() => {
//        document.querySelector('.error').remove() 
//     }, 3000);
//     return 
//   }
//  findCity(document.querySelector('.city-search').value)
// }
// })

document.querySelector('.five-days').addEventListener('click',fiveDaysBtn);



const scrollToTopBtn = document.querySelector('.next-city');


function scrollToTop() {
  document.querySelector('.favorite-city-block').lastElementChild.id = 'nomis';
  document.querySelector('#nomis').scrollIntoView({block: "center", behavior: "smooth"});
}


scrollToTopBtn.addEventListener("click", scrollToTop);




// let scrollNubmerFav =2;
// document.querySelector('.next-city').addEventListener('click',(()=>{






// if(JSON.parse(localStorage.getItem('cities')).length <= 3){
//     renderFavCity()
//     return
// }
// if(JSON.parse(localStorage.getItem('cities')).length <= scrollNubmerFav){
//     renderFavCity();
//     scrollNubmerFav =2;
//     return
// }
// if(JSON.parse(localStorage.getItem('cities')).length > 3){

// for (let index = 1; index < scrollNubmerFav+2; index++) {
//     if(document.querySelector('.favorite-city-block').children[index + scrollNubmerFav]){
//     document.querySelector('.favorite-city-block').children[index + scrollNubmerFav].style.display = 'flex';}
//     if(document.querySelector('.favorite-city-block').children[scrollNubmerFav - index + 1]){
//     document.querySelector('.favorite-city-block').children[scrollNubmerFav - index + 1].style.display = 'none';}
// }
// scrollNubmerFav+=3
// }
// }))




document.querySelector('.star').addEventListener('click',favoriteCity);

document.querySelector('.favorite-city-block').addEventListener('click',(e)=>{
if(e.target.classList.contains('city')){
    findCity(e.target.textContent)
    document.querySelector('.city-search').value = e.target.textContent;
}
if(e.target.classList.contains('fav-delete')){

  

  
    let cities = JSON.parse(localStorage.getItem('cities'));
cities.splice(cities.indexOf(e.target.parentNode.firstChild.textContent),1)
if(cities.indexOf(e.target.parentNode.firstChild.textContent) === 0){
   cities.shift()
}
localStorage.setItem('cities',JSON.stringify(cities))
e.target.parentNode.remove();

if(document.querySelector('.favorite-city-block').children.length === 0){
  document.querySelector('.next-city').style.display = 'none';
}
}
})







export let labels = [
 
    
   
  ];
  export const dataChart = {
    labels: labels,
    datasets: [
   {
      label: 'Temperature, C°',
      backgroundColor: 'rgba(255, 107, 9, 1)',
      borderColor: 'rgba(255, 107, 9, 1)',
      data: [ ],
      
    },
    {
       label: 'Humidity, %',
       backgroundColor: 'rgba(9, 6, 235, 1)',
       borderColor: 'rgba(9, 6, 235, 1)',
       data: [ ],
      
     },
     {
        label: 'Wind Speed, m/s',
        backgroundColor: 'rgba(234, 154, 5, 1)',
        borderColor: 'rgba(234, 154, 5, 1)',
        data: [ ],
      },
      {
         label: 'Atmosphere Pressure, m/m',
         backgroundColor: 'rgba(6, 120, 6, 1)',
         borderColor: 'rgba(6, 120, 6, 1)',
         data: [ ],
       }
  ],
    
  };
  Chart.defaults.elements.arc = 'rgba(255, 255, 255, 1)';
  export const config = {
    type: 'line',
    data: dataChart,
    
    options: {
      elements:{

        line:{
          // backgroundColor: 'rgba(255, 255, 255, 1)' ,
          borderColor: 'rgba(255, 255, 255, 1)'
        }
      },
     
      scales: {
        x: {
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.3)'
          }
        },
        y: {
          ticks: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          grid: {
            drawBorder: false,
            color: 'rgba(255, 255, 255, 0.3)'
            },
          },
        },
    plugins: {
      legend: {
      labels:{
        color:'rgba(255, 255, 255, 0.7)',
        boxWidth: 12
      }
  
   
      }}
  }}

  export var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );










