import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const tiempo = "videoplayer-current-time";


player.on('timeupdate', throttle(onPlay, 1000));
   
function onPlay ({ seconds }) {
    localStorage.setItem(tiempo, seconds)
}

setCurrentTime()
function setCurrentTime(){
    if(!localStorage.getItem(tiempo)){
        return
    }
    player.setCurrentTime(localStorage.getItem(tiempo))
}