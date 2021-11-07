const dayWeek = ['Sun','Mon','Thu','Wed','Thr','Fri','Sat'];
const month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

import getHou from './getHou.js';
import getMin from './getMin.js';
import getSec from './getSec.js';

export let zeroDate = new Date();






export default function changeTime(time){

   zeroDate = new Date();
    time += zeroDate.getMinutes();
       zeroDate.setMinutes(time-120);
   document.querySelector('.current-date').innerHTML = `${zeroDate.getDate()}<sup>th </sup>   ${dayWeek[zeroDate.getDay()]}`;
   document.querySelector('.current-month').textContent = `${month[zeroDate.getMonth()]}`;
   document.querySelector('.day-time').textContent = `${getHou(zeroDate)}:${getMin(zeroDate)}:${getSec(zeroDate)}`;
  
   };