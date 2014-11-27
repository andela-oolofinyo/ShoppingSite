var shoppingList = {
 
    init: function( settings ) {
        shoppingList.needed = document.getElementById('userWant');
        shoppingList.addingTask = document.getElementById("addTask");
        shoppingList.completeTask = document.getElementById('completed-order');
        shoppingList.incompleteTask = document.getElementById('incompleted-order');

        shoppingList.setupListeners();
    },

    setupListeners: function(){
        shoppingList.addingTask.onclick = shoppingList.neededValue;
    },

    neededValue: function(){
        var listItem = shoppingList.createNewOrder(shoppingList.needed.value);
        shoppingList.incompleteTask.appendChild(listItem);
        shoppingList.bindTaskEvents(listItem, shoppingList.completedTask);
    },

    completedTask: function() {
      var listItem = this.parentNode;
      shoppingList.completeTask.appendChild(listItem);
      shoppingList.bindTaskEvents(listItem, shoppingList.incompletedTask);
    },

    incompletedTask: function() {
      var listItem = this.parentNode;
      shoppingList.incompleteTask.appendChild(listItem);
      bindTaskEvents(listItem, shoppingList.completedTask);
    },

    bindTaskEvents: function(taskListItem, checkBoxEventHandler) {
      var checkBox = taskListItem.querySelector("input[type=checkBox]");
      var edited = taskListItem.querySelector('button.editTask');
      var del = taskListItem.querySelector('button.deleteTask');

      checkBox.onchange = checkBoxEventHandler;
    },

    createNewOrder: function(taskString){
      var listItem = document.createElement("li");
      var checkBox = document.createElement("input");
      var label = document.createElement("label");
      var editInput = document.createElement("input");
      var editButton = document.createElement("button");
      var deleteButton = document.createElement("button");

      // modify elements
      checkBox.type = "checkbox";
      label.innerText = taskString;
      editButton.className = "edit";
      editInput.type = "text";
      editButton.innerText = "Edit";
      deleteButton.innerText = "Delete";
      deleteButton.className = "delete"

      listItem.appendChild(checkBox);
      listItem.appendChild(label);
      listItem.appendChild(editInput);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);


      return listItem;
    }
};
 
window.onLoad = shoppingList.init();