const taskList = []
let taskCount = 0
function logTask() {
    let taskInput = document.getElementById("taskName"); // get the input element
    let taskValue = taskInput.value; // get the value from the input field
    
    if (taskValue.trim() === "") { 
        console.log("No task entered."); // check if input is empty
        return; // stop execution if no task is entered
    }

    let duplicateTask = taskList.indexOf(taskValue);

    if (duplicateTask >= 0){
        console.log("this task exists already"); // stops multiple tasks of the same name being created
    }
    else{
        console.log("Task added:", taskValue); // log the task name
        taskList.push(taskValue);

        // create div for task
        let div = document.createElement("div");
        div.setAttribute("id", ("task" + (taskCount)));
        div.setAttribute("class", ("taskItem"));
        document.getElementById("displayTasks").appendChild(div);

        // task details
        let tasks = document.createElement("p"); // create a new paragraph element for the task
        tasks.setAttribute("id", ("task" + (taskCount))); // gives each task its own unique id
        tasks.innerHTML = String(taskList[taskCount]);
        document.getElementById("task" + (taskCount)).appendChild(tasks);

        // delete button
        let deleteBtn = document.createElement("button"); // create a button so that the task can be eddited (deleted)
        deleteBtn.setAttribute("id", ("task" + (taskCount))); // sets the delete button to the same id as its corresponding task
        deleteBtn.setAttribute("onclick", ("deleteTask(this.id)")) // using the this.id parameter to pass the id of the button that was clicked
        deleteBtn.innerHTML = ("Delete");
        document.getElementById("task" + (taskCount)).appendChild(deleteBtn);

        taskCount += 1;
    }
}

function deleteTask(clicked_id) {
    console.log("task deleted: " + (clicked_id))

    const element = document.getElementById(clicked_id);
    element.remove();

    let task = document.getElementById(clicked_id);
    let taskName = task.value;

    let taskLocation = indexOf(taskName)
    delete taskList[(taskLocation)]
}