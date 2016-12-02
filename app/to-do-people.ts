/// <reference path="to-do-classes-interfaces.ts"/>

module ToDoList {
  var steve: ToDoList.IPerson = {name: "Steve B", email: "strang3tim@gmail.com"}
  var batman: ToDoList.IPerson = {name: "Bruce Wayne", email: "bruce@wayne.org"}
  var superman: ToDoList.IPerson = {name: "Clark Kent", email: "clark@dailyplanet.com"}

  export var people = {
    "steve": steve,
    "batman": batman,
    "superman": batman
  };
}
