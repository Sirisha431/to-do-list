document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear the input
});