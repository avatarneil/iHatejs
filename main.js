var taskData = {tasks:[]};
var i=0;
function onload() {
  foo = document.getElementById('inputID');
}

function addTask(){
  var task = { task: {index: i,info: foo.value, date: new Date()}};
  taskData.tasks.push(task);
  console.log('addTask ran!',JSON.stringify(taskData));
  addHtmlTask(i);
  i+=1;
}

function addHtmlTask(index){
  var infopara = document.createElement("P");
  var datepara = document.createElement("P");
  var taskDiv = document.createElement("DIV");
  var check = document.createElement("INPUT"); //<input type="checkbox" name="vehicle" value="Bike">
  check.setAttribute("type","checkbox");
  check.setAttribute("name","checkbox");
  check.setAttribute("value","Task completed");
  check.setAttribute("onclick","removeTask()")
  infopara.setAttribute("class","info");
  datepara.setAttribute("class","data");
  taskDiv.setAttribute("class","taskDiv")
  var info = document.createTextNode(taskData.tasks[index].task.info);
  var date = document.createTextNode(taskData.tasks[index].task.date);
  infopara.appendChild(info);
  datepara.appendChild(date);
  taskDiv.appendChild(infopara);
  taskDiv.appendChild(datepara);
  taskDiv.appendChild(check);
  document.getElementById("top").appendChild(taskDiv);
}

function removeTask(){
}
