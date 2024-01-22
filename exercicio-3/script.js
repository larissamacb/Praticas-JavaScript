let formulario = document.querySelector('#formulario')
let nota1 = document.querySelector('#nota1')
let nota2 = document.querySelector('#nota2')

let btnCalcular = document.querySelector('#calcular')
let btnLimpar = document.querySelector('#limpar')

let mediaDisplay = document.querySelector('#media')
let situacao = document.querySelector('.situacao')
let aviso = document.querySelector('.aviso')

function validarNumero(){
    let num1 = nota1.value
    let num2 = nota2.value
    if (num1<0 || num1>10 || num2<0 || num2>10){
        formulario.reset()
        aviso.textContent = "Digite números de 0 a 10"
        aviso.classList.add('aviso-ativado')
        setTimeout(function(){
            aviso.textContent = ""
            aviso.classList.remove('aviso-ativado')
        }, 3000);
    }
}

function entenderSituacao(media){
    let situacaoFinal = ' '
    if (media>=7){
        situacaoFinal = 'Aprovado(a)'
    } else if (media<=3){
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }

    situacao.textContent = situacaoFinal
    formatarSituacao(situacaoFinal)
}

function formatarSituacao(situacaoFinal){
    
    console.log(situacaoFinal)
    switch(situacaoFinal){
        case 'Aprovado(a)':
            situacao.classList.remove('reprovado', 'recuperacao')
            situacao.classList.add('aprovado')
            break
        case 'Reprovado(a)':
            situacao.classList.remove('aprovado', 'recuperacao')
            situacao.classList.add('reprovado')
            break
        case 'Recuperação':
            situacao.classList.remove('reprovado', 'aprovado')
            situacao.classList.add('recuperacao')
            break
    }
}

btnCalcular.addEventListener('click', function(e) {
    let notaUm = parseFloat(nota1.value);
    let notaDois = parseFloat(nota2.value);

    if (isNaN(notaUm) || isNaN(notaDois) || notaUm < 0 || notaUm > 10 || notaDois < 0 || notaDois > 10) {
        erro()
    } else {
        let media = (notaUm + notaDois) / 2;
        mediaDisplay.value = media.toFixed(1);
        entenderSituacao(media);
    }

    e.preventDefault();
});

btnLimpar.addEventListener('click', function(){
    situacao.classList.remove('aprovado', 'reprovado', 'recuperacao')
})