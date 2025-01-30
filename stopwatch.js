/// code for button active




document.addEventListener("DOMContentLoaded", function () {
  let mainUI = document.getElementById("BOFStopwatch");
  let timerUi = document.getElementById("ui");
  let startBtn = document.getElementById("playButton");
  let timeInSec2 = document.getElementById("timeInSecond2");
  let stopBtn = document.getElementById("stopBtn");
  let resetBtn = document.getElementById("resetBtn");
  let nextUi = document.getElementById("uiOg");  // ✅ Fix: Corrected syntax

  // ✅ Check if all required elements exist
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
          }
      }, 200);
  });
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
});