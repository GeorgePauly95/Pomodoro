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
    const pomodoro_time = document.getElementById("pomodoro-length").value;
    // document.getElementById("pomodoro-session").click();
    // document.getElementById("time").innerText = `${pomodoro_time}:00`;
    console.log(`this is pomodoro value typed into input: ${pomodoro_time}`)
    if (document.getElementById("session-message").innerText == "Time to focus!") {
        document.getElementById("time").innerText = `${pomodoro_time}:00`;
    }

}

document.getElementById("short-break-length").addEventListener("input", setShortBreakTime);
function setShortBreakTime() {
    const short_break_time = document.getElementById("short-break-length").value;
    // document.getElementById("short-break-session").click();
    // document.getElementById("time").innerText = `${short_break_time}:00`;
    if (document.getElementById("session-message").innerText == "Time for a break!") {
        document.getElementById("time").innerText = `${short_break_time}:00`;
    }
}

document.getElementById("long-break-length").addEventListener("input", setLongBreakTime);
function setLongBreakTime() {
    const long_break_time = document.getElementById("long-break-length").value;
    // document.getElementById("long-break-session").click();
    // document.getElementById("time").innerText = `${long_break_time}:00`;
    if (document.getElementById("session-message").innerText == "Extended break time!") {
        document.getElementById("time").innerText = `${long_break_time}:00`;
    }
}