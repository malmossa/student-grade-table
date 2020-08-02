var table = document.querySelector("tbody");
var header = document.querySelector("header");
var form = document.querySelector("#form");
var gradeTable = new GradeTable(table);
var pageHeader = new PageHeader(header);
var gradeForm = new GradeForm(form);
var appInstantiate = new App(gradeTable, pageHeader, gradeForm);
appInstantiate.start();
