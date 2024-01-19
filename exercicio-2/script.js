let peso = document.querySelector('#peso')
let altura = document.querySelector('#altura')

let btncalcular = document.querySelector('#calcular')

let valorImc = document.querySelector('#imc')
let aviso = document.querySelector('#aviso')

btncalcular.addEventListener('click', function(e) {
    let pesoInserido = parseFloat(peso.value)
    let alturaInserida = parseFloat(altura.value)
    console.log(pesoInserido)
    console.log(alturaInserida)
    let calculoImc = (pesoInserido / (alturaInserida * alturaInserida)).toFixed(1)

    valorImc.value = calculoImc
    //valorImc.setAttribute('value', calculoImc)

    let classificacaoDoPeso = classificacaoImc(calculoImc)
    aviso.textContent = classificacaoDoPeso

    e.preventDefault()
})

function classificacaoImc(calculoImc) {
    let classificacao = 'nulo'
    calculoImc = parseFloat(calculoImc)
    if (calculoImc<18.5) {
        classificacao = 'Baixo peso'
    } else if (calculoImc>=18.5 && calculoImc<25) {
        classificacao = 'Normal'
    } else if (calculoImc>=25 && calculoImc<30) {
        classificacao = 'Sobrepeso'
    } else if (calculoImc>=30) {
        classificacao = 'Obesidade'
    } else {
        classificacao = 'Insira valores válidos'
    }
    console.log(classificacao)
    return classificacao
}

// function classificacaoImc(calculoImc) {
//     let classificacao = 'nulo'
//     switch(true){
//         case(calculoImc<18,5):
//             classificacao = 'Baixo peso'
//         case(calculoImc>=18,5 && calculoImc<25):
//             classificacao = 'Normal'
//         case(calculoImc>=25 && calculoImc<30):
//             classificacao = 'Sobrepeso'
//         case(calculoImc>30):
//             classificacao = 'Obesidade'
//         default:
//             classificacao = 'Insira valores válidos'
//         return classificacao
//     }}