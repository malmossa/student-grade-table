var table = document.querySelector("tbody");
var header = document.querySelector("header");
var gradeTable = new GradeTable(table);
var pageHeader = new PageHeader(header);
var appInstantiate = new App(gradeTable, pageHeader);
appInstantiate.start();
