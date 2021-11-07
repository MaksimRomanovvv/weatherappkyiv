import cloudy from '../img/cloudy.png';
import clear from '../img//clear.png';
import fewclouds from '../img/fewclouds.png';
import rain from '../img/rain.png';

export default function weatherImg (data){
    if(data.list[0].weather[0].main === 'Clouds'){
        if(data.list[0].weather[0].description === 'few clouds'){
            document.querySelector('.main-img').setAttribute('src',`${fewclouds}`);
        }
            document.querySelector('.main-img').setAttribute('src',`${cloudy}`);
        }
        if(data.list[0].weather[0].main === 'Rain'){
        
            document.querySelector('.main-img').setAttribute('src',`${rain}`);
        }
        if(data.list[0].weather[0].main === 'Clear'){
        
            document.querySelector('.main-img').setAttribute('src',`${clear}`);
        }
}