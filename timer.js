let session_duration = document.getElementsByClassName("time")[0].innerHTML;
let minutes_duration = session_duration.split(":")[0]
let seconds_duration = session_duration.split(":")[1]


document.getElementsByClassName("start")[0].addEventListener("click", count_down, {once: true});

function count_down(){
    document.getElementsByClassName("start")[0].innerHTML = "PAUSE";
    document.getElementsByClassName("start")[0].addEventListener("click", pause, {once: true});
    const interval = setInterval(timer,1000);

    function pause(){
        clearInterval(interval)
        document.getElementsByClassName("start")[0].innerHTML = "START";
        document.getElementsByClassName("start")[0].addEventListener("click", count_down, {once: true});
    }
    function timer(){
        if (seconds_duration == 0){
            minutes_duration --
        }
        seconds_duration --
        seconds_duration = (seconds_duration + 60) % 60
        if (seconds_duration < 10 && seconds_duration.toString.length == 1){
            seconds_duration = "0" + seconds_duration
        }
        if (minutes_duration < 10 && minutes_duration.toString.length == 1){
            minutes_duration = "0" + minutes_duration
        }
        document.getElementsByTagName("h1")[0].innerHTML = minutes_duration + ":" + seconds_duration;
        document.getElementsByTagName("title")[0].innerHTML = minutes_duration + ":" + seconds_duration + " - " + "Time to Focus!";
        if (minutes_duration <= 0 && seconds_duration == 0){
            clearInterval(interval)
        }
    }
}
