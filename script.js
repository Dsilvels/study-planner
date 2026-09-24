const form = document.querySelector("form");
const taskInput = document.querySelector("#task");
const dueDateInput = document.querySelector("#due-date");
const taskList = document.querySelector("#tasks-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (taskText === "" || dueDate === "") {
    return;
  }

  // Create the visible task row.
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskDetails = document.createElement("span");
  taskDetails.textContent = `${taskText} - Due: ${dueDate}`;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";

  // Remove this task when its Delete button is clicked.
  deleteButton.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.append(taskDetails, deleteButton);
  taskList.appendChild(taskItem);

  form.reset();
  taskInput.focus();
});
