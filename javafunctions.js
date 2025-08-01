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
   assembleTask(taskValue);
   //save task to local storage
   localStorage.setItem("dictionary",JSON.stringify(taskList));
}
function assembleTask(taskValue){ //separate function for putting tasks together (adding delete button and checkbox)

    // create div for task
    let div = document.createElement("div");
    div.setAttribute("id", ("task" + (taskCount)));
    div.setAttribute("class", ("taskItem"));
    document.getElementById("displayTasks").appendChild(div);
    taskList["task" + taskCount] = ({id: "task" + taskCount, name: taskValue });

    // task details
    let tasks = document.createElement("b"); // create a new paragraph element for the task
    tasks.setAttribute("id", ("task" + (taskCount))); // gives each task its own unique id
    const taskID = "task" + taskCount; // creates id
    const taskName = taskList[taskID].name; // gets the name of an object with the specific id
    tasks.innerHTML = String(taskName);
    document.getElementById("task" + (taskCount)).appendChild(tasks);

    // mark tasks as complete
    let checkbox = document.createElement("input"); // create input
    let mark_complete = document.createElement("label"); // create label for checkbox
    checkbox.type = "checkbox"; // set input to checkbox for users to mark their tasks as complete with
    checkbox.setAttribute("id", ("task" + (taskCount))); // sets unique id for checkbox
    checkbox.setAttribute("class", ("completed")); // sets class completed so we can find it when its selected
    mark_complete.append("Mark task as complete");
    mark_complete.setAttribute("class", ("checkboxLabel"));
    document.getElementById("task" + (taskCount)).appendChild(mark_complete);
    document.getElementById("task" + (taskCount)).appendChild(checkbox);

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
    localStorage.setItem("dictionary",JSON.stringify(taskList)); //update the list after all the tasks have been removed
}

// deleting all tasks
function deleteAllTasks() {
    for(let id in taskList) //goes through every id in task list and deletes the tasks
     {
        deleteTask(id); //call the deletetTask function for every single task id
     }
    
}

// deleting all tasks marked as complete
function deleteAllCompletedTasks() {
    let completedTasks = [];
    let checkboxes = document.querySelectorAll(".completed"); // finds all tasks with completed checkboxes

    checkboxes.forEach(checkbox => {
        
        if (checkbox.checked) {
            completedTasks.push(checkbox.id); // store checkbox ids
        }
    });

    completedTasks.forEach(taskID => { 
        delete taskList[taskID]; // remove from the dictionary

        let element = document.getElementById(taskID);

        if (element) {
            element.remove(); // remove from the page
        }
    });

    console.log("Deleted completed tasks:", completedTasks);
    localStorage.setItem("dictionary",JSON.stringify(taskList)); //update the list after all the tasks have been removed
}


function loadSavedTasks(){ //function used to load tasks from local memory
    loadList = localStorage.getItem("dictionary"); //fetch the dictionary from local memory
    save = JSON.parse(loadList); //convert string back to dictionary
    console.log(save); //debug 
    for(const key in save) //navigate through the stored task ids
    {
       assembleTask(save[key].name); //display each task in the dictionary
    }
}  
   
  
