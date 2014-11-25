// var 
var needed= document.getElementById('userWant');
var addingTask = document.getElementsByTagName("button")[0];
var completeTask= document.getElementById('completed-order');
var incompleteTask= document.getElementById('incompleted-order');
// var add= document.getElementById('addTask');


var createNewOrder = function(taskString){

	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");

	// modify elements
	checkBox.type = "checkbox";
	label.innerText = taskString;
	editButton.className= "edit";
	editInput.type= "text";
	editButton.innerText= "Edit";
	deleteButton.innerText= "Delete";
	deleteButton.className= "delete"

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);


	return listItem;
}


var neededValue = function(){

	 console.log("adding...");

	var listItem = createNewOrder(needed.value);

	//this is used to append
	incompleteTask.appendChild(listItem);
	// bindTaskEvents(listItem, completedTask);
}

addingTask.onclick = neededValue;


//Users be able to edit items that have been added
var editedTask = function(){
	// var edited= document.getElementById('editTask');
	// return edited;
	console.log("task edited...");
}


// When delete is clicked, items get erased
var delItem = function(){

	console.log("deleted...");
}



//marking some tasks as completed
var completedTask = function() {
	console.log("completed...")

	var listItem = this.parentNode;
	completeTask.appendChild(listItem);
	bindTaskEvents(listItem, incompletedTask);
}


//marking some tasks as incompleted
var incompletedTask =function() {
	console.log("incomplete...")

	var listItem = this.parentNode;
	incompleteTask.appendChild(listItem);
	bindTaskEvents(listItem, completedTask);
}


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	//to ensure that the add and delete covers all children
	console.log("Bind List Items...");

	var checkBox = taskListItem.querySelector("input[type=checkBox]");
	var edited= taskListItem.querySelector('button.editTask');
	var del = taskListItem.querySelector('button.deleteTask');

	// console.log(edited);
	edited.onclick =  editedTask;

	del.onclick = delItem;

	checkBox.onChange = checkBoxEventHandler;
}

// addingTask.onclick = neededValue;


//completed tasks
for (var i=0; i<incompleteTask.children.length; i++) {

	bindTaskEvents(incompleteTask.children[i], completeTask);
}


//incomplete tasks
for (var i=0; i < completeTask.children.length; i++) {

	bindTaskEvents(completeTask.children[i], incompleteTask);
}
