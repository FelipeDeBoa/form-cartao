const INPUT_NUMERO = document.getElementById("numero");
const ERRO_NUMERO = document.getElementById("erro-numero");
const INPUT_CPF = document.getElementById("cpf");
const ERRO_CPF = document.getElementById("erro-cpf");
const INPUT_CODIGO = document.getElementById("codigo");
const ERRO_CODIGO = document.getElementById("erro-codigo");
const INPUT_NOME = document.getElementById("nome");
const INPUT_ANO = document.getElementById("ano");
const INPUT_MES = document.getElementById("mes");

document.getElementById('form-pagamento').addEventListener('submit', (event) => {
    event.preventDefault();
    if (INPUT_NUMERO.value === '') {
        INPUT_NUMERO.classList.add('is-invalid');
    }
    if (INPUT_CPF.value === '') {
        INPUT_CPF.classList.add('is-invalid');
    }
    if (INPUT_CODIGO.value === '') {
        INPUT_CODIGO.classList.add('is-invalid');
    }    
    if (INPUT_NOME.value === '') {
        INPUT_NOME.classList.add('is-invalid');
    } 
    /****************CORRIGIR***********************/
    if (INPUT_ANO.value === '') {
        INPUT_ANO.classList.add('is-invalid');
    } 
     /****************CORRIGIR***********************/
    if (INPUT_MES.value === '') {
        INPUT_MES.classList.add('is-invalid');
    } 
});

INPUT_NUMERO.addEventListener('keyup', () => {
    INPUT_NUMERO.classList.remove('is-invalid');

    if (INPUT_NUMERO.value.length === 16) {
        INPUT_NUMERO.classList.add('is-valid');
    }
});

INPUT_NUMERO.addEventListener('keyup', () => {
  INPUT_NUMERO.classList.remove('is-invalid');

  if (INPUT_NUMERO.value.length === 16) {
      INPUT_NUMERO.classList.add('is-valid');
  }
});

INPUT_CPF.addEventListener('keyup', () => {
  INPUT_CPF.classList.remove('is-invalid');

  if (INPUT_CPF.value.length === 11) {
      INPUT_CPF.classList.add('is-valid');
  }
});

INPUT_CODIGO.addEventListener('keyup', () => {
  INPUT_CODIGO.classList.remove('is-invalid');

  if (INPUT_CODIGO.value.length === 3) {
      INPUT_CODIGO.classList.add('is-valid');
  }
});

INPUT_NOME.addEventListener('keyup', () => {
  INPUT_NOME.classList.remove('is-invalid');

  if (INPUT_NOME.value.length > 3) {
      INPUT_NOME.classList.add('is-valid');
  }
});
/******************************************************/

INPUT_NUMERO.addEventListener("keyup", () => {
  let numero = document.getElementById("numero").value;
  INPUT_NUMERO.classList.remove("is-invalid");
  ERRO_NUMERO.classList.add("d-none");

  if (isNaN(numero.substr(-1, 1))) {
    //INPUT_NUMERO.value = numero.replace(/[^0-9]/g, '');
    INPUT_NUMERO.classList.add("is-invalid");
    ERRO_NUMERO.classList.remove("d-none");
  }

  if (INPUT_NUMERO.value === "") {
    INPUT_NUMERO.placeholder = "0000 0000 0000 0000";
  }
});

INPUT_CPF.addEventListener("keyup", () => {
  let cpf = document.getElementById("cpf").value;
  INPUT_CPF.classList.remove("is-invalid");
  ERRO_CPF.classList.add("d-none");

  if (isNaN(cpf.substr(-1, 1))) {
    //INPUT_CPF.value = cpf.replace(/[^0-9]/g, '');
    INPUT_CPF.classList.add("is-invalid");
    ERRO_CPF.classList.remove("d-none");
  }

  if (INPUT_CPF.value === "") {
    INPUT_CPF.placeholder = "Ex: 032.980.773-06";
  }
});

INPUT_CODIGO.addEventListener("keyup", () => {
  let codigo = document.getElementById("codigo").value;
  INPUT_CODIGO.classList.remove("is-invalid");
  ERRO_CODIGO.classList.add("d-none");

  if (isNaN(codigo.substr(-1, 1))) {
    //INPUT_CODIGO.value = codigo.replace(/[^0-9]/g, '');
    INPUT_CODIGO.classList.add("is-invalid");
    ERRO_CODIGO.classList.remove("d-none");
  }

  if (INPUT_CODIGO.value === "") {
    INPUT_CODIGO.placeholder = "Ex: 032";
  }
});

INPUT_NOME.addEventListener("keyup", () => {
  let codigo = document.getElementById("codigo").value;
  INPUT_NOME.classList.remove("is-invalid");
  ERRO_NOME.classList.add("d-none");

  if (isNaN(codigo.substr(-1, 1))) {
    //INPUT_CODIGO.value = codigo.replace(/[^0-9]/g, '');
    INPUT_NOME.classList.add("is-invalid");
    ERRO_NOME.classList.remove("d-none");
  }

  if (INPUT_NOME.value === "") {
    INPUT_NOME.placeholder = "Ex: Felipe Lisboa";     
  }
});