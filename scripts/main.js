function updateCounters() {
  const totalCount = document.getElementById("total-count");
  const totalTodos = document.getElementsByClassName("todo").length;
  totalCount.innerHTML = totalTodos;

  const completedCount = document.getElementById("completed-count");
  const completedTodos = document.getElementsByClassName("completed").length;
  completedCount.innerHTML = completedTodos;

  const todoCount = document.getElementById("todo-count");
  const uncompletedTodos = totalTodos - completedTodos;
  todoCount.innerHTML = uncompletedTodos;
}

function toggleDone(event) {
  // get the checkbox from the event object
  const checkbox = event.target;

  if (checkbox.checked) {
    // change the checkbox so that it shows up as completed
    checkbox.parentElement.parentElement.className = "todo completed";
  } else {
    // change the checkbox so that it shows up as todo
    checkbox.parentElement.parentElement.className = "todo";
  }
  // update the counters, now that we have updated the checkbox
  updateCounters();
}

// add a "change" event listener to every checkbox,
const checkboxes = document.querySelectorAll(".todo input");

// and use the "toggleDone" function as the callback
for (let i = 0; i < checkboxes.length; i++) {
  const element = checkboxes[i];
  element.addEventListener("change", toggleDone);
}

updateCounters();
