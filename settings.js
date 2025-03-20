const settings_button = document.getElementById("settings").addEventListener("click", showSettingsDialog);
const dialog = document.getElementById("settings-dialog");
function showSettingsDialog(){
    dialog.showModal();
}
const settings_close_button = document.getElementById("settings-close").addEventListener("click", closeSettingsDialog);
function closeSettingsDialog(){
    dialog.close();
}

document.getElementById("pomodoro-length").addEventListener("input", setPomodoroTime);
function setPomodoroTime(){
    const pomodoro_time = document.getElementById("pomodoro-length").value;
    document.getElementById("time").innerText = `${pomodoro_time}:00`
}