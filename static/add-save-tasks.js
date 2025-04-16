document.getElementById("save-task-settings").style.backgroundColor =
  "darkgray";

document.getElementById("add-task").addEventListener("click", openTaskSettings);
function openTaskSettings(event) {
  event.stopPropagation();
  document.getElementById("settings").style.boxShadow = "5px 2.5px 2.5px black";
  dialog.showModal();
}
document
  .getElementById("save-task-settings")
  .addEventListener("click", createTask);
function createTask() {
  const newTask = document.createElement("div");
  const newTaskName = document.createTextNode(
    document.getElementById("task-name").value.toString()
  );
  newTask.append(newTaskName);

  const taskAttr = document.createAttribute("class");
  taskAttr.value = "task-template";
  newTask.setAttributeNode(taskAttr);

  const delTask = document.createElement("button");
  const delTaskSymbol = document.createTextNode("X");
  const delTaskAttr = document.createAttribute("class");
  delTaskAttr.value = "task-delete";
  delTask.append(delTaskSymbol);
  delTask.setAttributeNode(delTaskAttr);

  newTask.appendChild(delTask);
  addTask = document.getElementById("add-task");
  document.body.insertBefore(newTask, addTask);

  setTaskName();
  function setTaskName() {
    document.getElementById("task-heading").innerText =
      document.getElementById("task-name").value;
  }

  fetch("/savesettings", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      task_name: document.getElementById("task-name").value,
      pomodoro_length: document.getElementById("pomodoro-length").value,
      short_break_length: document.getElementById("short-break-length").value,
      long_break_length: document.getElementById("long-break-length").value,
      long_break_count: document.getElementById("long-break-count").value,
    }),
  }).then((output) => {
    output.json().then((data) => newTask.setAttribute("id", data));
  });
}
