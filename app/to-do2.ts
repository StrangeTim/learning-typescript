interface IPerson {
  name: string;
  email: string;
}

interface ITask {
  description: string;
  priority: string;
  done: boolean;
  markDone(): void;
  assignedTo?: IPerson;
  // the ? after the name means that this property is OPTIONAL
  // (i.e. if a task is assigned then the person it is assigned to MUST follow the rules of the IPerson interface)
}

class Task implements ITask{
  done: boolean = false;  // Note: this 'done' is a property NOT a variable. adding 'var' here will break it
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {
  constructor(public description: string, public priority: string, public assignedTo?: IPerson) {
    super(description, priority);
    // 'assignedTo' here is listed as optional so is not included in the SUPER call. It will get applied to the super call only if it is used.
  }
}

class HobbyTask extends Task{
  constructor(public description: string){
    super(description, "low"); //this will always pass the string 'low' to the parent 'priority' parameter
  }
}

class WorkTask extends Task{
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
    super(description,priority, assignedTo);
  }
}

var steve: IPerson = {name: "Steve B", email: "strang3tim@gmail.com"}
var batman: IPerson = {name: "Bruce Wayne", email: "bruce@wayne.org"}
var superman: IPerson = {name: "Clark Kent", email: "clark@dailyplanet.com"}
// These are examples of interfaces being used for objects, not classes. How Useful!

var tasks: Task[] = [];
tasks.push(new HomeTask("do the dishes.","high", steve));
tasks.push(new HomeTask("buy candy.", "low"));
tasks.push(new HomeTask("Wash the laundry.", "high"));
tasks[0].markDone();

tasks.push(new HobbyTask("play board games."));
tasks.push(new HobbyTask("build a model."))

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate()+1);
var nextDay = new Date();
nextDay.setDate(today.getDate()+2);

tasks.push(new WorkTask(today, "Write Code.", "high", steve));
tasks.push(new WorkTask(tomorrow, "Clean printer", "medium", batman));
tasks.push(new WorkTask(nextDay, "shoot nerf guns", "low", superman));
// Don't forget to include an 'assignedTo' for each WorkTask since it was added to the constructor without the optional '?'!

console.log(tasks);
