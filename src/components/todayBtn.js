import {currentCity} from './findCity.js';
import timer from './timer.js';
import {findCity} from './findCity.js';
import renderFavCity from './renderFavCity.js';
import favoriteCity from './favoriteCity.js';
import {fiveDaysBtn} from './fiveDaysBtn.js';
import backImg from '../img/bgimg.jpg';
export function todayBtn(){
// document.body.style.backgroundImage = `url(${backImg})`;

  document.querySelector('.weather').style.display = 'block';
  document.querySelector('.quote-block').style.display = 'block';
  document.querySelector('.five-day-block').style.display = 'none';
  document.querySelector('.five-check-weather').style.display = 'none';
  document.querySelector('.five-days').addEventListener('click', fiveDaysBtn);
  document.querySelector('.container-chart').style.display = 'none';
  document.querySelector('.chart-btn').style.display = 'none';
}