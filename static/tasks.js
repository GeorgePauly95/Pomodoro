document
  .getElementById("add-task")
  .addEventListener("click", showSettingsDialog);

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

  //delete button
  const delTask = document.createElement("button");
  const delTaskSymbol = document.createTextNode("X");
  const delTaskAttr = document.createAttribute("class");
  delTaskAttr.value = "task-delete";
  delTask.append(delTaskSymbol);
  delTask.setAttributeNode(delTaskAttr);
  newTask.appendChild(delTask);

  //add task frontend
  addTask = document.getElementById("add-task");
  document.body.insertBefore(newTask, addTask);

  setTaskHeadingName();
  function setTaskHeadingName() {
    document.getElementById("task-heading").innerText =
      document.getElementById("task-name").value;
  }

  // add task backend and set id attr
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

  // select task frontend
  newTask.addEventListener("click", selectTask);
  function selectTask() {
    const tasks = Array.from(document.getElementsByClassName("task-template"));
    tasks.forEach(colorSelect);
    newTask.style.boxShadow = "2.5px 2.5px 2.5px 2.5px black";
    newTask.style.backgroundColor = "darkgray";
    fetch("/loadTasks").then((output) => {
      output.json().then((data) => data.forEach(loadAddnlTasks));
    });
    function loadAddnlTasks(task) {
      if (task._id == newTask.getAttribute("id")) {
        document.getElementById("task-heading").innerText = task.task_name;
        document.getElementById("task-name").value = task.task_name;
        document.getElementById("pomodoro-length").value = task.pomodoro_length;
        document.getElementById("short-break-length").value =
          task.short_break_length;
        document.getElementById("long-break-length").value =
          task.long_break_length;
        document.getElementById("long-break-count").value =
          task.long_break_count;
      }
    }
  }
  //force click on new task so that it selected task match settings details and task heading
  newTask.click();

  //delete tasks
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
