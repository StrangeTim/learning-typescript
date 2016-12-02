/// <reference path="to-do-classes-interfaces.ts"/>
/// <reference path="to-do-people.ts"/>
/// <reference path="to-do-listing.ts"/>

var people = ToDoList.people;

var tasks = [];
tasks.push(new ToDoList.HomeTask("do the dishes.","high", people.steve));
tasks.push(new ToDoList.HomeTask("buy candy.", "low"));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "high"));
tasks[0].markDone();

tasks.push(new ToDoList.HobbyTask("play board games."));
tasks.push(new ToDoList.HobbyTask("build a model."))

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
var nextDay = new Date();
nextDay.setDate(today.getDate()+2);

tasks.push(new ToDoList.WorkTask(today, "Write Code.", "high", people.steve));
tasks.push(new ToDoList.WorkTask(tomorrow, "Clean printer", "medium", people.batman));
tasks.push(new ToDoList.WorkTask(nextDay, "shoot nerf guns", "low", people.superman));
// Don't forget to include an 'assignedTo' for each WorkTask since it was added to the constructor without the optional '?'!

console.log(tasks);
var steveTasks = ToDoList.describeTasksForPerson(people.steve, tasks);
console.log("Here are Steve's tasks: ");
for (var task of steveTasks){
  console.log(task);
}
