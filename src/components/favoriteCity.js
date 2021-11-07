import cities from '../../node_modules/cities.json';
import {currentCity} from './findCity.js';
import renderFavCity from './renderFavCity.js'
export default function favoriteCity(){
   
        if(localStorage.getItem('cities') === null){
        localStorage.setItem('cities', '[]');
        document.querySelector('.next-city').style.display = 'none';
        }
        if(document.querySelector('.city-search').value === ''){
            
            return
        }
    
            let a = JSON.parse(localStorage.getItem('cities'));
            
        if(a.includes(currentCity)){
          
            return
        }
        
        
        a.unshift(currentCity)
        localStorage.setItem('cities',JSON.stringify(a))
        document.querySelector('.next-city').style.display = 'block';
            renderFavCity();
}