let valorDigitado = document.querySelector('#valor-em-reais')
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')
// Isso forma um array

let valorDoDolar    = 4.92       
let valorDoEuro     = 5.34    
let valorDaLibra    = 6.25      
let valorDoBitcoin  = 208093.05
let valorEmReal     = 0

let moedaEstrangeira = ''
let moedaConvertida = 0

let btnConverter = document.querySelector('.converter')
let btnLimpar = document.querySelector('#limpar')

// Função Principal

btnConverter.addEventListener('click', (e) =>{
    valorEmReal = parseFloat(valorDigitado.value)
    for(i = 0; i < moedaSelecionada.length; i++){
        if(moedaSelecionada[i].checked){
            moedaEstrangeira = moedaSelecionada[i].value
        }
    }

    switch(moedaEstrangeira){
        case 'Dólar':
            moedaConvertida = valorEmReal / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
            break
        case 'Euro':
            moedaConvertida = valorEmReal / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
            break
        case 'Libra':
            moedaConvertida = valorEmReal / valorDaLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
            break
        case 'Bitcoins':
            moedaConvertida = valorEmReal / valorDoBitcoin
            mensagemFormatada(parseFloat(moedaConvertida).toFixed(5))
            break
        default:
            mensagem.textContent('Moeda não reconhecida')
            break
    }
    e.preventDefault()
})

let mensagem = document.querySelector('p')

function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmReal) ? valorEmReal = 0 : ''
    mensagem.textContent = 'O valor de ' + (valorEmReal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ' convertido em ' + moedaEstrangeira + ' é ' + moedaConvertida
}

// Botôes

btnLimpar.addEventListener('click', () => {
    mensagem.textContent = 'Digite o valor, escolha a moeda e converta'
    btnConverter.classList.add('botao-desativado')
})

// Os eventos abaixo verificam toda vez que o input do número e a seleção das checkboxes forem modificadas (com o input e o change). Quando o evento ocorre, a função ativarDesativarBotao é chamada.

valorDigitado.addEventListener('input', ativarDesativarBotao);

moedaSelecionada.forEach((radio) => {
    radio.addEventListener('change', ativarDesativarBotao);
});

function ativarDesativarBotao() {
    if (!isNaN(parseFloat(valorDigitado.value)) && parseFloat(valorDigitado.value) > 0 && document.querySelector('input[name="moedaEstrangeira"]:checked')) {
        btnConverter.classList.remove('botao-desativado');
        btnConverter.removeAttribute('disabled');
    } else {
        btnConverter.classList.add('botao-desativado');
        btnConverter.setAttribute('disabled', true);
    }
}