class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades (grades) {
    this.tableElement.innerHTML = "";
    console.log(grades)
    for ( var i = 0; i < grades.length; i ++ ) {
      var trow = document.createElement("tr");
      var tName = document.createElement("td");
      tName.appendChild(document.createTextNode(grades[i].name));
      trow.appendChild(tName);

      var tCourse = document.createElement("td");
      tCourse.appendChild(document.createTextNode(grades[i].course));
      trow.appendChild(tCourse);

      var tGrade = document.createElement("td");
      tGrade.appendChild(document.createTextNode(grades[i].grade));
      trow.appendChild(tGrade);

      this.tableElement.appendChild(trow);
    }

  }

}
