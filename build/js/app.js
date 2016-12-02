var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ToDoList;
(function (ToDoList) {
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
    ToDoList.Task = Task;
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
    ToDoList.HomeTask = HomeTask;
    var HobbyTask = (function (_super) {
        __extends(HobbyTask, _super);
        function HobbyTask(description) {
            _super.call(this, description, "low"); //this will always pass the string 'low' to the parent 'priority' parameter
            this.description = description;
        }
        return HobbyTask;
    }(Task));
    ToDoList.HobbyTask = HobbyTask;
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
    ToDoList.WorkTask = WorkTask;
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts"/>
var ToDoList;
(function (ToDoList) {
    var steve = { name: "Steve B", email: "strang3tim@gmail.com" };
    var batman = { name: "Bruce Wayne", email: "bruce@wayne.org" };
    var superman = { name: "Clark Kent", email: "clark@dailyplanet.com" };
    ToDoList.people = {
        "steve": steve,
        "batman": batman,
        "superman": batman
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts" />
var ToDoList;
(function (ToDoList) {
    ToDoList.describeTasksForPerson = function (assignee, taskCollection) {
        // the above function says 'take a assignee of type IPerson and an array of tasks; return an array of Strings'
        var descriptions = [];
        for (var _i = 0, taskCollection_1 = taskCollection; _i < taskCollection_1.length; _i++) {
            var task = taskCollection_1[_i];
            if (task.assignedTo === assignee) {
                descriptions.push(task.description);
            }
        }
        return descriptions;
    };
})(ToDoList || (ToDoList = {}));
/// <reference path="to-do-classes-interfaces.ts"/>
/// <reference path="to-do-people.ts"/>
/// <reference path="to-do-listing.ts"/>
var people = ToDoList.people;
var tasks = [];
tasks.push(new ToDoList.HomeTask("do the dishes.", "high", people.steve));
tasks.push(new ToDoList.HomeTask("buy candy.", "low"));
tasks.push(new ToDoList.HomeTask("Wash the laundry.", "high"));
tasks[0].markDone();
tasks.push(new ToDoList.HobbyTask("play board games."));
tasks.push(new ToDoList.HobbyTask("build a model."));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new ToDoList.WorkTask(today, "Write Code.", "high", people.steve));
tasks.push(new ToDoList.WorkTask(tomorrow, "Clean printer", "medium", people.batman));
tasks.push(new ToDoList.WorkTask(nextDay, "shoot nerf guns", "low", people.superman));
// Don't forget to include an 'assignedTo' for each WorkTask since it was added to the constructor without the optional '?'!
console.log(tasks);
var steveTasks = ToDoList.describeTasksForPerson(people.steve, tasks);
console.log("Here are Steve's tasks: ");
for (var _i = 0, steveTasks_1 = steveTasks; _i < steveTasks_1.length; _i++) {
    var task = steveTasks_1[_i];
    console.log(task);
}
