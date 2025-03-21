document.getElementById("pomodoro-session").addEventListener("click", pomodoro_session);
document.getElementById("short-break-session").addEventListener("click", short_break_session);
document.getElementById("long-break-session").addEventListener("click", long_break_session);
function pomodoro_session(){
    document.body.style.backgroundColor = "#3A5BDC";
    document.getElementById("session-message").innerText = "Time to focus!";
    document.getElementById("pomodoro-session").style.boxShadow = "10px 5px 5px black";
    document.getElementById("short-break-session").style.boxShadow = "";
    document.getElementById("long-break-session").style.boxShadow = "";
    setPomodoroTime()
    clearInterval()
    if (document.getElementById("time").innerText == ":00"){
        document.getElementById("time").innerText = `${document.querySelector("input[id='pomodoro-length']").placeholder}:00`;

    }
}
function short_break_session(){    
    document.body.style.backgroundColor = "#2A9D8F";
    document.getElementById("session-message").innerText = "Time for a break!";
    document.getElementById("pomodoro-session").style.boxShadow = "";
    document.getElementById("short-break-session").style.boxShadow = "10px 5px 5px black";
    document.getElementById("long-break-session").style.boxShadow = "";
    setShortBreakTime()
    clearInterval()
    if (document.getElementById("time").innerText == ":00"){
        document.getElementById("time").innerText = `${document.querySelector("input[id='short-break-length']").placeholder}:00`;

    }    
}
function long_break_session(){
    document.body.style.backgroundColor = "#A37ACE";
    document.getElementById("session-message").innerText = "Extended break time!";
    document.getElementById("pomodoro-session").style.boxShadow = "";
    document.getElementById("short-break-session").style.boxShadow = "";
    document.getElementById("long-break-session").style.boxShadow = "10px 5px 5px black";
    setLongBreakTime()
    clearInterval()
    if (document.getElementById("time").innerText == ":00"){
        document.getElementById("time").innerText = `${document.querySelector("input[id='long-break-length']").placeholder}:00`;

    }
}