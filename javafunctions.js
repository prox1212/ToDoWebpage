// creating a task
const taskList = {} // dictionary for tasks and their unique id
let taskCount = 0 // for giving each task a unique id
function logTask() {
    let taskInput = document.getElementById("taskName"); // get the input element
    let taskValue = taskInput.value; // get the value from the input field
    
    if (taskValue.trim() === "") { 
        console.log("No task entered."); // check if input is empty
        return; // stop execution if no task is entered
    }


    for (const key in taskList) {
        if (taskList[key].name === taskValue) {
          console.log("This task already exists"); // loop to find duplicate task names
        }
    }

    console.log("Task added:", taskValue); // log the task name

    // create div for task
    let div = document.createElement("div");
    div.setAttribute("id", ("task" + (taskCount)));
    div.setAttribute("class", ("taskItem"));
    document.getElementById("displayTasks").appendChild(div);
    taskList["task" + taskCount] = ({id: "task" + taskCount, name: taskValue });

    // task details
    let tasks = document.createElement("p"); // create a new paragraph element for the task
    tasks.setAttribute("id", ("task" + (taskCount))); // gives each task its own unique id
    const taskID = "task" + taskCount; // creates id
    const taskName = taskList[taskID].name; // gets the name of an object with the specific id
    tasks.innerHTML = String(taskName);
    document.getElementById("task" + (taskCount)).appendChild(tasks);

    // mark tasks as complete
    let checkbox = document.createElement("input"); // create input
    let mark_complete = document.createElement("label"); // create label for checkbox
    checkbox.type = "checkbox"; // set input to checkbox for users to mark their tasks as complete with
    mark_complete.append("Mark task as complete");
    mark_complete.appendChild(checkbox); // attach label to checkbox
    document.getElementById("task" + (taskCount)).appendChild(mark_complete);

    // delete button
    let deleteBtn = document.createElement("button"); // create a button so that the task can be edited (deleted)
    deleteBtn.setAttribute("id", ("task" + (taskCount))); // sets the delete button to the same id as its corresponding task
    deleteBtn.setAttribute("onclick", ("deleteTask(this.id)")) // using the this.id parameter to pass the id of the button that was clicked
    deleteBtn.innerHTML = ("Delete");
    document.getElementById("task" + (taskCount)).appendChild(deleteBtn);
    taskCount += 1;
}

// deleting a task
function deleteTask(clicked_id) {
    console.log("task deleted: " + (clicked_id)); // debugging

    delete taskList[clicked_id] // deletes the record with the specific id (one where the button was clicked)

    console.log(taskList) // debugging, checking if its empty

    const element = document.getElementById(clicked_id);
    element.remove(); // removes the elements from the page so that the user doesnt see the task anymore
}

function deleteAllTasks() {
    document.getElementById('displayTasks').innerHTML = ''; // clears the displayTasks div of all elements
    taskList = {} // clears all records from the task dictionary
    taskCount = 0 // resets unique id count to 0
    
    console.log("erased all tasks.") // debugging
    console.log(taskList, taskCount)
}