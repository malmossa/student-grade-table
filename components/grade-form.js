class GradeForm {
  constructor (formElement) {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement = formElement;
  }

  onSubmit (createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit (event) {

    console.log("HELLO!");
    var formData = new FormData(event.target);
    var nameInput = formData.get(this.name);
    var courseInput = formData.get(this.course);
    var gradeInput = formData.get(this.grade);

    this.createGrade(nameInput, courseInput, gradeInput);
    this.reset();
    event.preventDefault();
  }
}
