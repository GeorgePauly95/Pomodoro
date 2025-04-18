fetch("/loadTasks").then((output) => {
  output.json().then((data) => data.forEach(loadTasks));
});

function colorSelect(task) {
  task.style.boxShadow = "";
  task.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
}

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

  newTask.addEventListener("click", selectTask);

  function selectTask() {
    const tasks = Array.from(document.getElementsByClassName("task-template"));
    tasks.forEach(colorSelect);

    newTask.style.boxShadow = "2.5px 2.5px 2.5px 2.5px black";
    newTask.style.backgroundColor = "darkgray";
    document.getElementById("task-heading").innerText = task.task_name;
    document.getElementById("task-name").value = task.task_name;
    document.getElementById("pomodoro-length").value = task.pomodoro_length;
    document.getElementById("short-break-length").value =
      task.short_break_length;
    document.getElementById("long-break-length").value = task.long_break_length;
    document.getElementById("long-break-count").value = task.long_break_count;
  }

  delTask.addEventListener("click", deleteTask);
  function deleteTask() {
    fetch("/deleteTask", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        task_id: newTask.getAttribute("id"),
      }),
    });
    document.getElementById("task-heading").innerText = "";
    document.getElementById("task-heading").style.height = "20px";
    newTask.remove();
  }
}
