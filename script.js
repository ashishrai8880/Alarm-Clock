console.log("Alarm Clock");

// This code to represent current time
let now = document.getElementById('time');
setInterval(() => {
    now.innerText = new Date();
}, 1000);


let set = document.getElementById('set');
set.addEventListener('click', setAlarm);

// function to set alarm 
function setAlarm(e) {
    let alarm = document.getElementById('alarm');
    var alarmTime = new Date(alarm.value);
    // console.log(alarm);
    alarm.value = "";
    let currentTime = new Date();
    console.log(alarmTime);
    let ringTime = alarmTime - currentTime;
    console.log(ringTime);
    if(ringTime>= 0){
        let alert = document.getElementById('alert');
        alert.innerHTML = '<div id = "success"> You Have Successfully Set Your Alarm !! </div>' ;
        setTimeout(() => {
            alert.innerHTML = '';
        }, 5000);
    }else{
        let alert = document.getElementById('alert');
        alert.innerHTML = '<div id = "failure"> Please Enter Correct Time !! </div>' ;
        setTimeout(() => {
            alert.innerHTML = '';
        }, 3000);
    }

    if (ringTime >= 0) {
        setTimeout(() => {
            ringBell();
        }, ringTime);

    }
    e.preventDefault();
}

// function to play alarm tone
function ringBell() {
    // let song = new Audio('1.mp3');
    // song.play();
    var audio = new Audio('alarm.mp3');
    audio.play();
}
