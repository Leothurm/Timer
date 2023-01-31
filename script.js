let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;


function start(){
    count()
   interval = setInterval(count, 1000)
}
function pause(){
    clearInterval(interval)
}
function stop(){
    clearInterval(interval)
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').innerHTML = '00:00:00'
}

function showZero(digit){
    if(digit<10){
        return '0' + digit
    }else{
        return digit 
    }
}

function count(){
    seconds++
    if(seconds == 60){
        minutes++
        seconds = 0
    }

    if(minutes == 60){
        minutes = 0;
        hours++
    }
    let format = (hours < 10 ? '0'+ hours : hours) + ":" + (minutes < 10 ? '0'+ minutes : minutes) + ":" + (seconds < 10 ? '0'+ seconds : seconds)
    document.getElementById('timer').innerHTML = format
}