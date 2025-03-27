document.getElementById("start").addEventListener("click", count_down, { once: true });
var pomodoro_session_count = 0;
document.getElementById("time").innerText = `${localStorage.getItem("workTime")}:00`
function count_down() {
    document.getElementById("start").style.boxShadow = "";
    document.getElementById("start").innerText = "PAUSE";
    document.getElementById("start").addEventListener("click", pause, { once: true });
    const interval = setInterval(timer, 1000);
    function pause() {
        clearInterval(interval)
        document.getElementById("start").style.boxShadow = "5px 2.5px 2.5px black";
        document.getElementById("start").innerText = "START";
        document.getElementById("start").addEventListener("click", count_down, { once: true });
    }
    function timer() {
        var session_duration = document.getElementById("time").innerText;
        var minutes_duration = session_duration.split(":")[0]
        var seconds_duration = session_duration.split(":")[1]
        if (minutes_duration == 0 && seconds_duration == 0) {
            if (document.getElementById("session-message").innerText == "Time to focus!") {
                pomodoro_session_count++
                if (localStorage.getItem('workCount') > pomodoro_session_count) {
                    document.getElementById("short-break-session").click();
                    auto_start_break_checker()
                    return clearInterval(interval)
                }
                else {
                    pomodoro_session_count = 0
                    document.getElementById("long-break-session").click();
                    auto_start_break_checker()
                    return clearInterval(interval)
                }
            }
            else if (document.getElementById("session-message").innerText == "Time for a break!" || document.getElementById("session-message").innerText == "Extended break time!") {
                document.getElementById("pomodoro-session").click();
                auto_start_pomodoro_checker()
                return clearInterval(interval)
            }
        }
        if (seconds_duration == 0) {
            minutes_duration--
        }
        seconds_duration--
        seconds_duration = (seconds_duration + 60) % 60
        if (seconds_duration < 10 && seconds_duration.toString.length == 1) {
            seconds_duration = "0" + seconds_duration
        }
        if (minutes_duration < 10 && minutes_duration.toString.length == 1) {
            minutes_duration = "0" + minutes_duration
        }
        document.getElementById("time").innerText = `${minutes_duration}:${seconds_duration}`;
        document.getElementsByTagName("title")[0].innerText = `${minutes_duration}:${seconds_duration} - ${document.getElementById("session-message").innerText}`;
    }
    function auto_start_break_checker() {
        if (document.getElementById("auto-start-break").checked == true) {
            document.getElementById("start").click()
        }
    }
    function auto_start_pomodoro_checker() {
        if (document.getElementById("auto-start-pomodoro").checked == true) {
            document.getElementById("start").click()
        }
    }
}