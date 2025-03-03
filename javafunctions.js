const taskList = []
let taskCount = 0
function logTask() {
    let taskInput = document.getElementById("taskName"); // Get the input element
    let taskValue = taskInput.value; // get the value from the input field
    
    if (taskValue.trim() === "") { 
        console.log("No task entered."); // debugging: Check if input is empty
        return; // Stop execution if no task is entered
    }

    let duplicateTask = taskList.indexOf(taskValue)

    if (duplicateTask >= 0){
        console.log("this task exists already")
    }
    else{
        console.log("Task added:", taskValue); // Should now correctly log the task name
        taskList.push(taskValue);
        let tasks = document.createElement("p");
        tasks.innerHTML = String(taskList[taskCount]);
        taskCount += 1;
        document.getElementById("displayTasks").appendChild(tasks);
    }
}