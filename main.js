var taskData = {tasks:[]};
function onload() {
  foo = document.getElementById('inputID');
}

function addTask(){
  var task = { task: {info: foo.value, date: new Date()}};
  taskData.tasks.push(task);
  console.log('addTask ran!');
}
