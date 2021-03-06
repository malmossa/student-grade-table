class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);

    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }

  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'POST',
      headers: {
        "X-Access-Token": "zRIQRrOR"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      error: this.handleCreateGradeError,
      success: this.handleCreateGradeSuccess,
    });
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  handleGetGradesError (error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var gradeSum = 0;
    for ( var i = 0; i < grades.length; i ++ ) {
      gradeSum += grades[i].grade;
    }
    gradeSum = gradeSum / grades.length;

    this.pageHeader.updateAverage(gradeSum);
  }

  getGrades () {
    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades',
      method: 'GET',
      headers: {
        "X-Access-Token":"zRIQRrOR"
      },
      error: this.handleGetGradesError,
      success: this.handleGetGradesSuccess,
      });
    }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }

  deleteGrade (id) {

    $.ajax({
      url: 'https://sgt.lfzprototypes.com/api/grades/' + id,
      method: 'DELETE',
      headers: {
        "X-Access-Token": "zRIQRrOR"
      },
      error: this.handleDeleteGradeError,
      success: this.handleDeleteGradeSuccess,
    });
  }


  handleDeleteGradeError (error) {
    console.error(error);
  }

  handleDeleteGradeSuccess () {
    this.getGrades();
  }
}
