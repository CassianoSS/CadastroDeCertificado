class FormsController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._formNumber = 1;
    this._chooseTab1 = $("#chooseTab1");
    this._chooseTab2 = $("#chooseTab2");
    this._chooseTab3 = $("#chooseTab3");
    this._btnNext = $("#btnNext");
    this._btnFinish = $("#btnFinish");
    this._tab1 = $("#tab1");
    this._tab2 = $("#midias");
    this._tab3 = $("#tab3");
  }

  nextForm() {
    switch (this._formNumber) {
      case 1:
        if (validationForm1()) {
          this._chooseTab1.classList.remove("choose");
          this._chooseTab2.classList.add("choose");
          this._formNumber++;
        }
        break;
      case 2:
        // if(validationForm2()){
        this._chooseTab2.classList.remove("choose");
        this._chooseTab3.classList.add("choose");
        this._btnNext.classList.add("displayNone");
        this._btnFinish.classList.remove("displayNone");
        this._formNumber++;
        // }
        break;
    }
  }

  clickChoice(form) {
    switch (form) {
      case "chooseTab1":
        this._chooseTab2.classList.remove("choose");
        this._chooseTab3.classList.remove("choose");
        this._tab1.classList.remove("displayNone");
        this._tab2.classList.add("displayNone");
        this._tab3.classList.add("displayNone");
        this._btnFinish.classList.add("displayNone");
        this._btnNext.classList.remove("displayNone");
        this._chooseTab1.classList.add("choose");
        this._formNumber = 1;
        break;
      case "chooseTab2":
        if (validationForm1()) {
          this._chooseTab1.classList.remove("choose");
          this._chooseTab3.classList.remove("choose");
          this._tab1.classList.add("displayNone");
          this._tab2.classList.remove("displayNone");
          this._tab3.classList.add("displayNone");
          this._btnFinish.classList.add("displayNone");
          this._btnNext.classList.remove("displayNone");
          this._chooseTab2.classList.add("choose");
          this._formNumber = 2;
        }
        break;
      case "chooseTab3":
        // if(validationForm1() && validationForm2()){
        this._chooseTab1.classList.remove("choose");
        this._chooseTab2.classList.remove("choose");
        this._chooseTab3.classList.add("choose");
        this._tab1.classList.add("displayNone");
        this._tab2.classList.add("displayNone");
        this._tab3.classList.remove("displayNone");
        this._btnNext.classList.add("displayNone");
        this._btnFinish.classList.remove("displayNone");
        this._formNumber = 3;
        // }
        break;
    }
  }

  finishForm() {
    console.log("Implementar Finish");
  }
}
