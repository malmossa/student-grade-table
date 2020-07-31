var table = document.querySelector("tbody");
var gradeTable = new GradeTable(table);
var appInstantiate = new App(gradeTable);
appInstantiate.start();
