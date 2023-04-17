let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let clock = document.getElementById("clock");

stopBtn.style.display='none';
resetBtn.style.display='none';

let hour = 0;
let minute = 0;
let second = 0;
let count;
let flag=false;

startBtn.addEventListener('click' , function(){
    
    startBtn.style.display='none';
    stopBtn.style.display='initial';
    resetBtn.style.display='initial';

    count = setInterval(stopWatch,1000);
    
});

stopBtn.addEventListener('click' , function(){
    
    clearInterval(count);
    stopBtn.style.display="none";
    startBtn.style.display="initial";



});

resetBtn.addEventListener('click' , function(){

    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('clock').innerHTML = "00:00:00";
    clearInterval(count);
    startBtn.style.display='initial';
    stopBtn.style.display='none';
    resetBtn.style.display='none';

});

function stopWatch(){

    second++;
    if(second == 60){
        minute++;
        second = 0;

        if(minute == 60){
            hour++;
            minute = 0;
            second = 0;

            if(hour == 24){
                hour = 0;
                minute = 0;
                second = 0;
            }
        }
    }

    document.getElementById("clock").innerHTML=hour+":"+minute+":"+second;


    
}