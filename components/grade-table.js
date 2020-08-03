class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades (grades) {
    this.tableElement.innerHTML = "";
    if ( grades.value === "") {
      this.tableElement.classList.remove("d-none")
    }
    console.log(grades)
    for ( var i = 0; i < grades.length; i ++ ) {
      var newTrow = this.renderGradeRow(grades[i], this.deleteGrade)
      this.renderGradeRow;
      this.deleteGrade;
      this.tableElement.appendChild(newTrow)

  }
  }
  onDeleteClick (deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow (data, deleteGrade) {
    var trow = document.createElement("tr");

    var tName = document.createElement("td");
    tName.appendChild(document.createTextNode(data.name));

    var tCourse = document.createElement("td");
    tCourse.appendChild(document.createTextNode(data.course));

    var tGrade = document.createElement("td");
    tGrade.appendChild(document.createTextNode(data.grade));

    var tBtn = document.createElement("td");
    var button = document.createElement("button");
    button.className = "btn btn-danger btn-secondary";
    button.textContent = "DELETE";
    button.addEventListener("click", function (event) {
      deleteGrade(data.id)
    })
    tBtn.appendChild(button);

    trow.appendChild(tName);
    trow.appendChild(tCourse);
    trow.appendChild(tGrade);
    trow.appendChild(tBtn);

    return trow;
  }

}
