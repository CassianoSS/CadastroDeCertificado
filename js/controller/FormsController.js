class FormsController{
  constructor() { 
    let $ = document.querySelector.bind(document);
    this._formNumber = 1;
    this._chooseTab1 = $('#chooseTab1');
    this._chooseTab2 = $('#chooseTab2');
    this._chooseTab3 = $('#chooseTab3');
    this._btnNext = $('#btnNext');
    this._btnFinish = $('#btnFinish');
  }

  nextForm(){
    switch (this._formNumber) {
      case 1:
        // if(validationForm1()){
          this._chooseTab1.classList.remove('choose');
          this._chooseTab2.classList.add('choose');
          this._formNumber ++;
        // }
        break;
      case 2:
        // if(validationForm2()){
          this._chooseTab2.classList.remove('choose');
          this._chooseTab3.classList.add('choose');
          this._btnNext.classList.add('displayNone');
          this._btnFinish.classList.remove('displayNone');
          this._formNumber ++;
        // }
        break;
      }
    }

    clickChoice(form){
      switch (form) {
        case 'chooseTab1':
          this._chooseTab2.classList.remove('choose');
          this._chooseTab3.classList.remove('choose');
          this._btnFinish.classList.add('displayNone');
          this._btnNext.classList.remove('displayNone');
          this._chooseTab1.classList.add('choose');
          this._formNumber = 1;
          break;
        case 'chooseTab2':
          // if(validationForm1()){
            this._chooseTab1.classList.remove('choose');
            this._chooseTab3.classList.remove('choose');
            this._btnFinish.classList.add('displayNone');
            this._btnNext.classList.remove('displayNone');
            this._chooseTab2.classList.add('choose');
            this._formNumber = 2;
          // }
          break;
        case 'chooseTab3':
          // if(validationForm1() && validationForm2()){
            this._chooseTab1.classList.remove('choose');
            this._chooseTab2.classList.remove('choose');
            this._chooseTab3.classList.add('choose');
            this._btnNext.classList.add('displayNone');
            this._btnFinish.classList.remove('displayNone');
            this._formNumber = 3;
          // }
          break;
      }
    }
    
    finishForm(){
      console.log('Implementar Finish');
    }
}
