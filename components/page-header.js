class PageHeader {
  constructor (headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage (newAverage) {
    console.log(newAverage);
    var avDisplay = document.querySelector("span");
    avDisplay.textContent = newAverage
  }
}
