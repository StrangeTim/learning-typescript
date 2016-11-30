class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string) {}
  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task("do the dishes.","high"));
tasks.push(new Task("buy candy.", "low"));
tasks.push(new Task("Wash the laundry.", "high"));
tasks[0].markDone();
console.log(tasks);
