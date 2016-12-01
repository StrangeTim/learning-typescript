var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false; // Note: this 'done' is a property NOT a variable. adding 'var' here will break it
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask(description, priority, assignedTo) {
        _super.call(this, description, priority);
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        // 'assignedTo' here is listed as optional so is not included in the SUPER call. It will get applied to the super call only if it is used.
    }
    return HomeTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low"); //this will always pass the string 'low' to the parent 'priority' parameter
        this.description = description;
    }
    return HobbyTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return WorkTask;
}(Task));
var steve = { name: "Steve B", email: "strang3tim@gmail.com" };
var batman = { name: "Bruce Wayne", email: "bruce@wayne.org" };
var superman = { name: "Clark Kent", email: "clark@dailyplanet.com" };
// These are examples of interfaces being used for objects, not classes. How Useful!
var tasks = [];
tasks.push(new HomeTask("do the dishes.", "high", steve));
tasks.push(new HomeTask("buy candy.", "low"));
tasks.push(new HomeTask("Wash the laundry.", "high"));
tasks[0].markDone();
tasks.push(new HobbyTask("play board games."));
tasks.push(new HobbyTask("build a model."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Write Code.", "high", steve));
tasks.push(new WorkTask(tomorrow, "Clean printer", "medium", batman));
tasks.push(new WorkTask(nextDay, "shoot nerf guns", "low", superman));
// Don't forget to include an 'assignedTo' for each WorkTask since it was added to the constructor without the optional '?'!
console.log(tasks);
