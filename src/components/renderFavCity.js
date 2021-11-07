import favCity from '../tamplates/favCity.hbs';
// import {scrollNumberFav} from '../index.js';
export default function renderFavCity(){
    document.querySelector('.favorite-city-block').innerHTML = favCity(JSON.parse(localStorage.getItem('cities')));
    
    if(JSON.parse(localStorage.getItem('cities')).length === 0){
        document.querySelector('.next-city').style.display = 'none';
    }


    if(JSON.parse(localStorage.getItem('cities')).length > 2){
    document.querySelector('.favorite-city-block').children[0].style.display = 'flex';
    document.querySelector('.favorite-city-block').children[1].style.display = 'flex';
    document.querySelector('.favorite-city-block').children[2].style.display = 'flex';
}
    if(JSON.parse(localStorage.getItem('cities')).length <= 2){
        for (let i = 0; i < JSON.parse(localStorage.getItem('cities')).length; i++) {
            document.querySelector('.favorite-city-block').children[i].style.display = 'flex';
            
        }
    }

}