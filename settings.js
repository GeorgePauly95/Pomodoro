document.getElementsByTagName("body")[0].addEventListener("click", closeSettingsDialog);

const settings_button = document.getElementById("settings").addEventListener("click", showSettingsDialog);
const dialog = document.getElementById("settings-dialog");
function showSettingsDialog(event) {
    event.stopPropagation();
    document.getElementById("settings").style.boxShadow = "5px 2.5px 2.5px black";
    dialog.showModal();
}
document.getElementById("settings-wrapper").addEventListener("click", (e) => { e.stopPropagation(); });

const settings_close_button = document.getElementById("settings-close").addEventListener("click", closeSettingsDialog);
function closeSettingsDialog() {
    document.getElementById("settings").style.boxShadow = "";
    dialog.close();
}

document.getElementById("pomodoro-length").addEventListener("input", setPomodoroTime);
function setPomodoroTime() {
    localStorage.setItem('workTime', `${document.getElementById("pomodoro-length").value}`);
    if (document.getElementById("session-message").innerText == "Time to focus!") {
        document.getElementById("time").innerText = `${localStorage.getItem('workTime')}:00`;
    }
}

document.getElementById("short-break-length").addEventListener("input", setShortBreakTime);
function setShortBreakTime() {
    localStorage.setItem('shortBreakTime', `${document.getElementById("short-break-length").value}`);
    if (document.getElementById("session-message").innerText == "Time for a break!") {
        document.getElementById("time").innerText = `${localStorage.getItem('shortBreakTime')}:00`;
    }
}

document.getElementById("long-break-length").addEventListener("input", setLongBreakTime);
function setLongBreakTime() {
    localStorage.setItem('longBreakTime', `${document.getElementById("long-break-length").value}`);
    if (document.getElementById("session-message").innerText == "Extended break time!") {
        document.getElementById("time").innerText = `${localStorage.getItem('longBreakTime')}:00`;
    }
}
document.getElementById("long-break-count").addEventListener("input", setLongBreakCount);
function setLongBreakCount() {
    localStorage.setItem('workCount', `${document.getElementById("long-break-count").value}`);
}

document.getElementById("auto-start-break").addEventListener("input")