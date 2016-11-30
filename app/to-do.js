var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
})();
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask() {
        _super.apply(this, arguments);
    }
    return HomeTask;
})(Task);
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
})(Task);
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority) {
        _super.call(this, description, priority);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }
    return WorkTask;
})(Task);
var tasks = [];
tasks.push(new HomeTask("do the dishes.", "high"));
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
tasks.push(new WorkTask(today, "Write Code.", "high"));
tasks.push(new WorkTask(tomorrow, "Clean printer", "medium"));
tasks.push(new WorkTask(nextDay, "shoot nerf guns", "low"));
console.log(tasks);
