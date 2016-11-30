class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {

}

class HobbyTask extends Task{
  constructor(public description: string){
    super(description, "low");
  }
}

class WorkTask extends Task{
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description,priority);
  }
}

var tasks: Task[] = [];
tasks.push(new HomeTask("do the dishes.","high"));
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

tasks.push(new WorkTask(today, "Write Code.", "high"));
tasks.push(new WorkTask(tomorrow, "Clean printer", "medium"));
tasks.push(new WorkTask(nextDay, "shoot nerf guns", "low"));

console.log(tasks);
