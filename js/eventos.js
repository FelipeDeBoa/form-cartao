document.getElementById('numero').addEventListener('keyup', function () {
    let numero = document.getElementById('numero').value;
    document.getElementById('card_number').innerHTML = numero;
    
    setIconCreditCard('cardBrand', numero)    
});

document.getElementById('nome').addEventListener('keyup', function () {
    let nome = document.getElementById('nome').value;
    document.getElementById('card_name').innerHTML = nome;
});

document.getElementById('codigo').addEventListener('keyup', function () {
    let codigo = document.getElementById('codigo').value;
    document.getElementById('card_cvv').innerHTML = codigo;
});

//document.getElementById('mes').addEventListener('change', function () {
//    let mes = document.getElementById('mes').value;
//   let ano = document.getElementById('ano').value;
//    document.getElementById('card_date').innerHTML = mes+"/"+ano;    
//});

//document.getElementById('ano').addEventListener('change', function () {
//    let mes = document.getElementById('mes').value;
//    let ano = document.getElementById('ano').value;
//    document.getElementById('card_date').innerHTML = mes+"/"+ano;    
//});
// 

document.querySelectorAll('[data-action="date"]').forEach(function(element){
    element.addEventListener('change', function () {
    let mes = document.getElementById('mes').value;
    let ano = document.getElementById('ano').value;
    document.getElementById('card_date').innerHTML = mes+"/"+ano;    
  });
});

document.getElementById('codigo').addEventListener('focus', function () {
    document.getElementById('lado-esquerdo').style.transform = 'rotateY(180deg)';
    
});

document.getElementById('codigo').addEventListener('blur', function () {
    document.getElementById('lado-esquerdo').style.transform = 'rotateY(0deg)';
    
});

