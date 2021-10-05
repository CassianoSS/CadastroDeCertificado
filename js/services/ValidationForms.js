/*
Implementar aqui as três funções de validação (form 1, 2 e 3).
Essas serão chamadas no FormsController.js a cada clique dos botões.
*/
var $ = document.querySelector.bind(document);

function validationForm1(){
  let inputName = $('#n1'); //Encontra os inputs da tab1
  let inputNick = $('#nk');
  let inputEmail = $('#email');
  let inputTel = $('#tel');
  let inputNasc = $('#dn');
  let inputIdade = $('#idade');
  let checkboxTermos = $('#checkboxTermos');
  if(inputName.value !== '' && verificaString(inputName.value, ' ')){ //Testa se o nome foi preenchido e se tem espaço
    if (inputNick.value !== '' && inputNick.value.indexOf(' ') === -1) { //Testa se o nickName foi preenchido e não tem espaço em branco
      if (inputEmail.value !== '' && verificaString(inputEmail.value, '@', '.com')) { //Testa se o Email foi preenchido e contém @ e .com
        if (inputTel.value !== '' && !isNaN(inputTel.value.split(' ', '-').join(''))) { //Testa se o telefone foi preenchido e se tem apenas números
          if (inputNasc.value !== '' && !isNaN(inputNasc.value.split('-').join(''))) { //Testa se a data de nascimento foi preenchida corretamente
            if (inputIdade.value !== '' && !isNaN(inputIdade.value.split(' ').join(''))) { //Testa se a idade foi preenchida e se têm apenas número
              if(checkboxTermos.checked){ //Testa se os termos foram aceitos
                return true; // A função validaForm1 só retorna true se passar pela verificação de cada campo do formulário
              } else {
                checkboxTermos.focus();
                checkboxTermos.insertAdjacentHTML('beforebegin', "<p class='aviso'>Você precisa aceitar os termos</p>");
                return false;
              }
            } else {
              inputIdade.focus();
              inputIdade.insertAdjacentHTML('afterend', "<p class='aviso'>Preencha o nome corretamente</p>");
              return false;
            }
          } else {
            inputNasc.focus();
            inputNasc.insertAdjacentHTML('afterend', "<p class='aviso'>Preencha o nascimento corretamente</p>");
            return false;
          }
        } else {
          inputTel.focus();
          inputTel.insertAdjacentHTML('afterend', "<p class='aviso'>Preencha o telefone corretamente</p>");
          return false;
        }
      } else {
        inputEmail.focus();
        inputEmail.insertAdjacentHTML('afterend', "<p class='aviso'>Preencha o email corretamente</p>");
        return false;
      }
    } else {
      inputNick.focus();
      inputNick.insertAdjacentHTML('afterend', "<p class='aviso'>Preencha o NickName corretamente</p>");
      return false;
    }
  } else {
    inputName.focus();
    inputName.insertAdjacentHTML('afterend', "<p class='aviso'>Preencha o nome corretamente</p>");
    return false;
  }
}

//TODO:(Matheus Santos) Implementar validação do tab2 aqui 

function verificaString(word, ...character){ //Função que testa uma string com todos os caracteres passados
  let flag = true
  character.forEach(c => { //Testa cada caractere se existe na palavra (var. word)
    if(word.indexOf(c) === -1){
      flag = false; //Se não encontrar algum caractere passado, altera a flag pra que a função retorne falso
    }
  });
  return flag; //Se todos os caracteres forem encontrados retorna true
}

function correcaoDoDado(){ // É chamado toda vez que um campo é alterado no HTML
  if($('.aviso') !== null){ // Se houver alguma tag com classe 'aviso' indicando que o campo está preenchido de modo incorreto
    $('.aviso').remove(); //Após a mudança no campo remove esse aviso
  }
}