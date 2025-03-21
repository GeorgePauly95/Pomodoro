document.getElementById("start").addEventListener("click", count_down, {once: true});

function count_down(){
    document.getElementById("start").innerText = "PAUSE";
    document.getElementById("start").addEventListener("click", pause, {once: true});
    const interval = setInterval(timer,1000);

    function pause(){
        clearInterval(interval)
        document.getElementById("start").innerText = "START";
        document.getElementById("start").addEventListener("click", count_down, {once: true});
    }
    function timer(){
        var session_duration = document.getElementById("time").innerText;
        var minutes_duration = session_duration.split(":")[0]
        var seconds_duration = session_duration.split(":")[1]
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
        document.getElementById("time").innerText = `${minutes_duration}:${seconds_duration}`;
        document.getElementsByTagName("title")[0].innerText = `${minutes_duration}:${seconds_duration} - ${document.getElementById("session-message").innerText}`;
        if (minutes_duration <= 0 && seconds_duration == 0){
            clearInterval(interval)
        }
    }
}