/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  export var describeTasksForPerson = function(assignee:IPerson, taskCollection: Task[]): String[] {
    // the above function says 'take a assignee of type IPerson and an array of tasks; return an array of Strings'
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
