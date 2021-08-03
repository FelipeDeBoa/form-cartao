const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');

document.getElementById('form-endereco').addEventListener('submit', (event) => {
    event.preventDefault();

    if (INPUT_CEP.value.length < 8) {
        INPUT_CEP.classList.add('is-invalid');
    }
    if (INPUT_LOGRADOURO.value === '') {
        INPUT_LOGRADOURO.classList.add('is-invalid');
    }
    if (INPUT_NUMERO.value === '') {
        INPUT_NUMERO.classList.add('is-invalid');
    }
    if (INPUT_CIDADE.value === '') {
        INPUT_CIDADE.classList.add('is-invalid');
    }
    if (INPUT_BAIRRO.value === '') {
        INPUT_BAIRRO.classList.add('is-invalid');
    }
    if (INPUT_UF.value.length !== 2) {
        INPUT_UF.classList.add('is-invalid');
    }
});

INPUT_CEP.addEventListener('keyup', () => {
    INPUT_CEP.classList.remove('is-invalid');

    if (INPUT_CEP.value.length === 8) {
        INPUT_CEP.classList.add('is-valid');
    }
});
INPUT_LOGRADOURO.addEventListener('keyup', () => {
    INPUT_LOGRADOURO.classList.remove('is-invalid');

    if (INPUT_LOGRADOURO.value.length > 3) {
        INPUT_LOGRADOURO.classList.add('is-valid');
    }
});
INPUT_BAIRRO.addEventListener('keyup', () => {
    INPUT_BAIRRO.classList.remove('is-invalid');

    if (INPUT_BAIRRO.value.length > 3) {
        INPUT_BAIRRO.classList.add('is-valid');
    }
});
INPUT_UF.addEventListener('keyup', () => {
    INPUT_UF.classList.remove('is-invalid');

    if (INPUT_UF.value.length != 2) {
        INPUT_UF.classList.add('is-valid');
    }
});
INPUT_NUMERO.addEventListener('keyup', () => {
    INPUT_NUMERO.classList.remove('is-invalid');

    if (INPUT_NUMERO.value.length > 0) {
        INPUT_NUMERO.classList.add('is-valid');
    }
});
INPUT_CIDADE.addEventListener('keyup', () => {
    INPUT_CIDADE.classList.remove('is-invalid');

    if (INPUT_CIDADE.value.length > 3) {
        INPUT_CIDADE.classList.add('is-valid');
    }
});

///Tema DARK e Light 

let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function(){
    if (this.checked) {
        document.documentElement.setAttribute('data-theme','dark');
    } else {
        document.documentElement.setAttribute('data-theme','light');
    }
});
