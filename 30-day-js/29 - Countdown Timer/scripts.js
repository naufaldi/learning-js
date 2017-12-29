let countdown ;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
function timer(seconds) {
    //clear evisting countdown
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds *1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    // console.log({now,then});
    //set interval utk menghitung mundur detik 
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then -  Date.now()) / 1000);
        //check if  we should stop it
        if(secondsLeft <= 0 ){
            clearInterval(countdown);
            return;
        }
        //display it
        // console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    },1000);
}

function displayTimeLeft(seconds){
    // console.log(seconds);
    const minutes = Math.floor(seconds/60);
    const remainSeconds = seconds %60;
    const display = `${minutes}:${remainSeconds < 10 ? '0' : '' }${remainSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}
//timestamp ambil waktu
function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    // const adjustedMinutes = minutes < 10 ? '0' : '';
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

//dataset.time akan mengambil string dari data string yg ada

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    // console.log(seconds);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click',startTimer) );
document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
});