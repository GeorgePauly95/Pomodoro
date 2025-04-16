fetch("/loadConfig")
  .then((output) => output.json())
  .then((final_output) => {
    document.getElementById("task-name").value = final_output.task_name;
    document.getElementById("pomodoro-length").value =
      final_output.pomodoro_length;
    document.getElementById(
      "time"
    ).innerText = `${final_output.pomodoro_length}:00`;
    document.getElementById("short-break-length").value =
      final_output.short_break_length;
    document.getElementById("long-break-length").value =
      final_output.long_break_length;
    document.getElementById("long-break-count").value =
      final_output.long_break_count;
  });

fetch("/loadTasks").then((output) => {
  output.json().then((data) => data.forEach(loadTasks));
});

function loadTasks(task) {
  const newTask = document.createElement("div");
  newTask.innerText = task.task_name;

  const taskAttr = document.createAttribute("class");
  taskAttr.value = "task-template";
  newTask.setAttributeNode(taskAttr);

  const delTask = document.createElement("button");
  const delTaskSymbol = document.createTextNode("X");
  const delTaskAttr = document.createAttribute("class");
  delTaskAttr.value = "task-delete";
  delTask.append(delTaskSymbol);
  delTask.setAttributeNode(delTaskAttr);

  newTask.setAttribute("id", task._id);

  newTask.appendChild(delTask);
  addTask = document.getElementById("add-task");
  document.body.insertBefore(newTask, addTask);

  delTask.addEventListener("click", deleteTask);

  function deleteTask() {
    newTask.remove();
  }
}
