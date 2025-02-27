
function addtask(){
  const task_list = [];
  let task_name = document.getElementById("T_NAME").value;
  let task_priority = document.getElementById("T_PRIORITY").value;
  let task = task_priority +") " + task_name;
  task_list.push(task);
  task_list.sort();
   document.getElementById("T_DISPLAY").textContent += task_list.join('\n');
  return task
}