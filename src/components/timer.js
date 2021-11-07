import getHou from './getHou.js';
import getMin from './getMin.js';
import getSec from './getSec.js';
import {zeroDate} from './changeTime';
const dayWeek = ['Sun','Mon','Thu','Wed','Thr','Fri','Sat',];
const month = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];



export default function timer () {setInterval(()=>{
    zeroDate.setSeconds(zeroDate.getSeconds()+1)
    document.querySelector('.current-date').innerHTML = `${zeroDate.getDate()}<sup>th </sup>    ${dayWeek[zeroDate.getDay()]}`;
    
    document.querySelector('.current-month').textContent = `${month[zeroDate.getMonth()]}`;
    document.querySelector('.day-time').textContent = `${getHou(zeroDate)}:${getMin(zeroDate)}:${getSec(zeroDate)}`;

},1000);}