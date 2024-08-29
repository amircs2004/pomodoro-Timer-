//bring elements from the html file 
//we need to add event listeners to the buttons and also add a countDown to P
const startEL = document.getElementById("Start")
const stoptEL = document.getElementById("stop")
const resetEL = document.getElementById("reset")
const TimerEL = document.getElementById("Timer")

let interval
let timeLeft =1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft/60)
    let seconds =timeLeft % 60 
     let formatedTime =`${minutes.toString().padStart(2 ,"0")}:${seconds.toString().padStart(2,"0")}`

TimerEL.innerHTML = formatedTime
}

function startTimer() {
    interval =setInterval (()=>{ 
       timeLeft--;
        updateTimer()
        if (timeLeft === 0) {
            clearInterval(interval)
            alert("times up")
            timeLeft =1500
            updateTimer()
        }
    },1000) 
}
function stopTimer() {
    clearInterval(interval)
}
function resetTimer() {
    timeLeft = 1500
    updateTimer()
}


startEL.addEventListener("click" ,startTimer)
stoptEL.addEventListener("click" ,stopTimer)
resetEL.addEventListener("click" ,resetTimer)