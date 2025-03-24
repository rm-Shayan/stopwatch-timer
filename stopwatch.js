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
 

 
let stopWatchInTimer=document.getElementById("stopwatch");
stopWatchInTimer.addEventListener("click",()=>{
    timerUi.style.display="none";
    mainUI.style.display="block"
})





    let timerBtn = document.getElementById("timerBtn1");
    let timerBtn2=document.getElementById("timerBtn2")
    let timerBtn3=document.getElementById("timerBtn3")
    let stopWatchBtn = document.getElementById("stopwatchBtn1");
    let stopWatchBtn2 = document.getElementById("stopwatch");
    
    function activate(event) {
        
        timerBtn.classList.remove("active");
        stopWatchBtn.classList.remove("active");
        stopWatchBtn2.classList.remove("active");
        timerBtn2.classList.remove("active");
        timerBtn3.classList.remove("active");
    
    
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
        }else if(event.target.id=="timerBtn2"){
            console.log("Timer UI activated");
    
            timersUi.style.display = "block";
            mainUI.style.display = "none";
            timerUi.style.display = "none";
            nextUi.style.display = "none";
        }else if(event.target.id=="timerBtn3"){
            console.log("Timer UI activated");
    
            timersUi.style.display = "block";
            mainUI.style.display = "none";
            timerUi.style.display = "none";
            nextUi.style.display = "none";
        }
    }
    
    timerBtn.addEventListener("click", activate);
    timerBtn2.addEventListener("click", activate);
    timerBtn3.addEventListener("click", activate);
    stopWatchBtn.addEventListener("click", activate);
    stopWatchBtn2.addEventListener("click", activate);  



    let input=document.getElementById("input");
    let btn1=document.getElementById("data1");
    let btn2=document.getElementById("data2");
    let btn3=document.getElementById("data3");
    let btnStartTimer=document.getElementById("btnStartTimer");
     let btnPauseTimer=document.getElementById("btnPauseTimer")
    
  function addValueToInput(event) {
    
   if(event.target.id=="data1"){
input.value="00:30"
   }else if(event.target.id=="data2"){
    input.value="1:00" 
   }else if(event.target.id=="data3"){
    input.value="5:00"
   }
 
  

}
    
    btn1.addEventListener("click", addValueToInput);
    btn2.addEventListener("click", addValueToInput);
    btn3.addEventListener("click", addValueToInput);

    





    let interval ;

btnPauseTimer.addEventListener("click",()=>{
    btnStartTimer.style.display="block";
        btnPauseTimer.style.display="none";
        clearInterval( interval );
})

    btnStartTimer.addEventListener("click", () => {
        
        btnStartTimer.style.display="none";
        btnPauseTimer.style.display="block";
        
        if (!input.value || !input.value.includes(":")) {
            return alert("Enter time in format HH:MM:SS");
        }

        let time = input.value.trim().split(":");

        if (time.length !== 3) {
            return alert("Invalid format! Use HH:MM:SS");
        }

        let hours = parseInt(time[0]) || 0;
        let minutes = parseInt(time[1]) || 0;
        let sec = parseInt(time[2]) || 0;

        if (isNaN(hours) || isNaN(minutes) || isNaN(sec)) {
            return alert("Invalid numbers! Use HH:MM:SS");
        }

        input.disabled = true; // Disable input when timer starts

        function updateDisplay() {
            let formattedTime =
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
            
            input.value = formattedTime; // Update input value dynamically
            // timerDisplay.innerText = formattedTime; // Show on screen
        }

        updateDisplay(); // Initial Display

         interval = setInterval(() => {
            if (hours === 0 && minutes === 0 && sec === 0) {
                clearInterval(interval);
                alert("Timer Finished!");
                input.disabled = false; // Enable input again
                btnStartTimer.style.display="block";
                btnPauseTimer.style.display="none";
                
                return;
            }

            if (sec === 0) {
                if (minutes > 0) {
                    sec = 59;
                    minutes--;
                } else if (hours > 0) {
                    minutes = 59;
                    sec = 59;
                    hours--;
                }
            } else {
                sec--;
            }

            updateDisplay();
        }, 1000);
    });
    














    
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