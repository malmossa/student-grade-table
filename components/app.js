class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }

  handleGetGradesError (error) {
    console.error(error);
  }

  handleGetGradesSuccess (grades) {
    this.gradeTable.updateGrades(grades);
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
  }
}
