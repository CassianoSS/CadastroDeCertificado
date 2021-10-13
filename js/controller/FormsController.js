class FormsController {
  constructor() {
    let $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);
    this._formNumber = 1;
    this._chooseTab1 = $("#chooseTab1");
    this._chooseTab2 = $("#chooseTab2");
    this._chooseTab3 = $("#chooseTab3");
    this._btnNext = $("#btnNext");
    this._btnFinish = $("#btnFinish");
    this._tab1 = $("#tab1");
    this._tab2 = $("#midias");
    this._tab3 = $("#tab3");
    this._popupFinsh = $('.fundoBlack');
  }

  nextForm() {
    switch (this._formNumber) {
      case 1:
        if (validationForm1()) {
          this._chooseTab1.classList.remove("choose");
          this._chooseTab2.classList.add("choose");
          this._tab1.classList.add("displayNone");
          this._tab2.classList.remove("displayNone");
          this._tab3.classList.add("displayNone");
          this._formNumber++;
        }
        break;
      case 2:
        if (validationForm2()) {
          this._chooseTab2.classList.remove("choose");
          this._chooseTab3.classList.add("choose");
          this._tab1.classList.add("displayNone");
          this._tab2.classList.add("displayNone");
          this._tab3.classList.remove("displayNone");
          this._btnNext.classList.add("displayNone");
          this._btnFinish.classList.remove("displayNone");
          this._formNumber++;
        }
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
        if (validationForm1() && validationForm2()) {
          this._chooseTab1.classList.remove("choose");
          this._chooseTab2.classList.remove("choose");
          this._chooseTab3.classList.add("choose");
          this._tab1.classList.add("displayNone");
          this._tab2.classList.add("displayNone");
          this._tab3.classList.remove("displayNone");
          this._btnNext.classList.add("displayNone");
          this._btnFinish.classList.remove("displayNone");
          this._formNumber = 3;
        }
        break;
    }
  }

  finishForm() {
    console.log("Implementar Finish");
    if(validationForm3()){
      this._popupFinsh.classList.remove("displayNone");
    }
  }
}

function clearForm(e){
  if(e.target.classList['0'] === 'fundoBlack'){
    for (let i = 1; i <= 3; i++) {
      let validationItems = $$(`.input-tab${i}`);
      validationItems.forEach(item => {
        if(item.type === 'checkbox'){
          item.checked = false;
        } else {
          item.value = '';
        }
      });
    }
    new FormsController().clickChoice('chooseTab1');
    new FormsController()._popupFinsh.classList.add("displayNone");
  }
}

function createListener(){
  document.querySelector('.fundoBlack').addEventListener('click', clearForm);
};

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

