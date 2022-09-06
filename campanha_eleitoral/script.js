let divGeral = document.getElementsByClassName('fundo-triangulado')[0]
let quadrados = '<div class="triangulo"></div>'



for (let index = 0; index < 45; index++) {
    divGeral.innerHTML += quadrados
    
}