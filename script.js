let min = 00;
let sec = 00;
let mil = 00;
var interval;
const minHtml = document.getElementById("min");
const secHtml = document.getElementById("sec");
const milHtml = document.getElementById("mil");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

stopBtn.onclick = function(){
  clearInterval(interval);
}

resetBtn.onclick = function(){
  min = "00";
  sec = "00";
  mil = "00";
  minHtml.innerHTML = min;
  secHtml.innerHTML = sec;
  milHtml.innerHTML = mil;
}

startBtn.onclick = function(){
  clearInterval(interval);
  interval = setInterval(start, 10);
}

function start(){
  mil++;
  if(mil <= 9){
    milHtml.innerHTML= "0" + mil;
  }else if (mil > 99){
    sec++;
    secHtml.innerHTML = "0" + sec;
    if(sec > 9){
      secHtml.innerHTML = sec;
      if(sec > 59){
        sec = 0;
        min++;
        minHtml.innerHTML = "0" + min;
        if(min > 9){
          minHtml.innerHTML = min;
        }
      }
    }
    mil = 0;
    milHtml.innerHTML= "0" + mil;
  }else{
    milHtml.innerHTML= mil;
  }
}

