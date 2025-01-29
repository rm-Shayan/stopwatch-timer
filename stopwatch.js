let btnOfStartStopWatch=document.getElementById("buttonOFstartstopwatch")
let btnOssW=document.getElementById("startStopWatch")
let btun=document.querySelector(".btun")
let btun1=document.querySelector(".btun-1")
let heading=document.getElementById("heading")

btnOssW.addEventListener("click",function(){
btnOssW.style.display="none"
btun.style.display="block"
btun1.style.display="block"

count=0;
let id=setInterval(function(){
    count+=1;
heading.innerHTML=count

},1000)
console.log(id)



})