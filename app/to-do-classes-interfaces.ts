module ToDoList {
  export interface IPerson {
    name: string;
    email: string;
  }

  export interface ITask {
    description: string;
    priority: string;
    done: boolean;
    markDone(): void;
    assignedTo?: IPerson;
    // the ? after the name means that this property is OPTIONAL
    // (i.e. if a task is assigned then the person it is assigned to MUST follow the rules of the IPerson interface)
  }

  export class Task implements ITask{
    done: boolean = false;  // Note: this 'done' is a property NOT a variable. adding 'var' here will break it
    constructor(public description: string, public priority: string, public assignedTo?: IPerson) {}
    markDone(){
      this.done = true;
    }
  }

  export class HomeTask extends Task {
    constructor(public description: string, public priority: string, public assignedTo?: IPerson) {
      super(description, priority);
      // 'assignedTo' here is listed as optional so is not included in the SUPER call. It will get applied to the super call only if it is used.
    }
  }

  export class HobbyTask extends Task{
    constructor(public description: string){
      super(description, "low"); //this will always pass the string 'low' to the parent 'priority' parameter
    }
  }

  export class WorkTask extends Task{
    constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
      super(description,priority, assignedTo);
    }
  }
}
