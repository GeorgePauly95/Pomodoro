document.getElementById("pomodoro-session").style.boxShadow = "5px 2.5px 2.5px black";

document.getElementById("pomodoro-session").addEventListener("click", () => template_session("#3A5BDC", "Time to focus!", ["5px 2.5px 2.5px black", "", ""], setPomodoroTime));
document.getElementById("short-break-session").addEventListener("click", () => template_session("#2A9D8F", "Time for a break!", ["", "5px 2.5px 2.5px black", ""], setShortBreakTime));
document.getElementById("long-break-session").addEventListener("click", () => template_session("#A37ACE", "Extended break time!", ["", "", "5px 2.5px 2.5px black"], setLongBreakTime));

function template_session(color, session_message, [pomodoro_shadow, short_break_shadow, long_break_shadow], setTime) {
    document.body.style.backgroundColor = color;
    document.getElementById("session-message").innerText = session_message;
    document.getElementById("pomodoro-session").style.boxShadow = pomodoro_shadow;
    document.getElementById("short-break-session").style.boxShadow = short_break_shadow;
    document.getElementById("long-break-session").style.boxShadow = long_break_shadow;
    setTime();
    if (document.getElementById("start").innerText == "PAUSE") {
        document.getElementById("start").click()
    }
}