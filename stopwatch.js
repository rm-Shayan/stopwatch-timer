/// code for button active




document.addEventListener("DOMContentLoaded", function () {
    let mainUI = document.getElementById("BOFStopwatch");
    let timerUi = document.getElementById("ui");
    let startBtn = document.getElementById("playButton");
    let timeInSec2 = document.getElementById("timeInSecond2");
    let stopBtn = document.getElementById("stopBtn");
    let resetBtn = document.getElementById("resetBtn");
    let nextUi = document.getElementById("uiOg");
    let timersUi = document.getElementById("timer-Ui"); 
    let stopTimeUi = document.getElementById("textInsideCircle");
    let againStartBtn = document.getElementById("againPlay");
    let againResetBtn = document.getElementById("resetBtnAgain");
 

 






    let timerBtn = document.getElementById("timerBtn1");
    let stopWatchBtn = document.getElementById("stopwatchBtn1");
    let stopWatchBtn2 = document.getElementById("stopwatch");
    
    function activate(event) {
        
        timerBtn.classList.remove("active");
        stopWatchBtn.classList.remove("active");
        stopWatchBtn2.classList.remove("active");
    
    
        event.target.classList.add("active");
    
        if (event.target.id === "timerBtn1") {
            console.log("Timer UI activated");
    
            timersUi.style.display = "block";
            mainUI.style.display = "none";
            timerUi.style.display = "none";
            nextUi.style.display = "none";
    
        } else if (event.target.id === "stopwatchBtn1" ) {
            console.log("Stopwatch UI activated");
    
            timersUi.style.display = "none";
            mainUI.style.display = "block";
            timerUi.style.display = "none";
            nextUi.style.display = "none";
        } else if( event.target.id === "stopwatch"){
            console.log("Stopwatch UI activated");
            timersUi.style.display = "none";
            mainUI.style.display = "block";
            timerUi.style.display = "none";
            nextUi.style.display = "none";
        }
    }
    
    timerBtn.addEventListener("click", activate);
    stopWatchBtn.addEventListener("click", activate);
    stopWatchBtn2.addEventListener("click", activate);  



    let input=document.getElementById("inputOfNumber");
    let btn1=document.getElementById("data1");
    let btn2=document.getElementById("data2");
    let btn3=document.getElementById("data3")
    
    
  function addValueToInput(event) {
    
    console.log(event.target.childNodes[0].childNodes[1])
    input.value=event.target.childNodes[0].childNodes[1].innerText
 
  

}
    
    btn1.addEventListener("click", addValueToInput);
    btn2.addEventListener("click", addValueToInput);
    btn3.addEventListener("click", addValueToInput);
    

  if (!mainUI || !timerUi || !startBtn || !timeInSec2 || !stopBtn || !resetBtn || !nextUi) {
      console.error("❌ One or more elements not found. Check your HTML IDs.");
      return;
  }

  let sec = 0;
  let min = 0;
  let timer = null;
  let isRunning = false;
  let clickTimeout;



  function updateTimer() {
      sec++;
      if (sec === 60) {
          min++;
          sec = 0;
      }
      timeInSec2.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`;
  }
  // 🟢 Start Timer
  startBtn.addEventListener("click", function () {
      mainUI.style.display = "none";
      timerUi.style.display = "block";

      if (!isRunning) {
          isRunning = true;
          timer = setInterval(updateTimer, 1000);
      }
  });

  stopBtn.addEventListener("click", function () {
      clickTimeout = setTimeout(() => {
          if (isRunning) {
              clearInterval(timer);
              isRunning = false;
              nextUi.style.display = "block";
              mainUI.style.display = "none";
      timerUi.style.display = "none"; 
      
    stopTimeUi.innerText = `${min}:${sec < 10 ? "0" + sec : sec}`;

          }
      }, 200);
  });

  againStartBtn.addEventListener("click",function(){

    nextUi.style.display = "none";
    mainUI.style.display = "none";
timerUi.style.display = "block"; 

if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
}


  })



againResetBtn.addEventListener("click",function(){
    console.log("⏯ Resetting Timer");

    sec = 0;
    min = 0;
    timeInSec2.innerText = "0:00";

    clearInterval(timer);
    isRunning = false;
    mainUI.style.display = "block";
    timerUi.style.display = "none";
    nextUi.style.display = "none"; 

})





  resetBtn.addEventListener("click", function () {
      console.log("⏯ Resetting Timer");

      sec = 0;
      min = 0;
      timeInSec2.innerText = "0:00";

      clearInterval(timer);
      isRunning = false;
      mainUI.style.display = "block";
      timerUi.style.display = "none";
      nextUi.style.display = "none"; 
  });
})