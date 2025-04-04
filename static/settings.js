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
    fetch('/test1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "pomodoro_length": document.getElementById("pomodoro-length").value })
    }).then(output => { output.json(); });
    if (document.getElementById("session-message").innerText == "Time to focus!") {
        document.getElementById("time").innerText = `${document.getElementById("pomodoro-length").value}:00`;
    }
}

document.getElementById("short-break-length").addEventListener("input", setShortBreakTime);
function setShortBreakTime() {
    fetch('/test2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'short_break_length': document.getElementById("short-break-length").value })
    }).then(output => { output.json(); });
    if (document.getElementById("session-message").innerText == "Time for a break!") {
        document.getElementById("time").innerText = `${document.getElementById("short-break-length").value}:00`;
    }
}

document.getElementById("long-break-length").addEventListener("input", setLongBreakTime);
function setLongBreakTime() {
    fetch('/test3', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'long_break_length': document.getElementById("long-break-length").value })
    }).then(output => { output.json(); });
    if (document.getElementById("session-message").innerText == "Extended break time!") {
        document.getElementById("time").innerText = `${document.getElementById("long-break-length").value}:00`;
    }
}
document.getElementById("long-break-count").addEventListener("input", setLongBreakCount);
function setLongBreakCount() {
    fetch('/test4', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'long_break_count': document.getElementById("long-break-count").value })
    }).then(output => { output.json(); });
} 