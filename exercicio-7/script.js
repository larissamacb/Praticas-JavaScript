const azulInverno = {
    nomeTitulo: 'azul-inverno',
    nomeCor: '- Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const estelar = {
    nomeTitulo: 'estelar',
    nomeCor: '- Estelar',
    pasta: 'imagens-estelar'
}

const meiaNoite = {
    nomeTitulo: 'meia-noite',
    nomeCor: '- Meia-noite',
    pasta: 'imagens-meia-noite'
}

const rosaClaro = {
    nomeTitulo: 'rosa-claro',
    nomeCor: '- Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const verdeCipreste = {
    nomeTitulo: 'verde-cipreste',
    nomeCor: '- Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanhos = ['41 mm', '45 mm']

let imagemSelecionada = 1
const imagemVisualizacao = document.querySelector('#imagem-visualizacao')

function trocarImagem() {
    let idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idOpcaoSelecionada.charAt(0)
    imagemVisualizacao.src = 'img/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}

let tamanhoSelecionado = 1
const tituloProduto = document.querySelector('#titulo-produto')

function trocarTamanho() {
    let idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0)
    tituloProduto.textContent = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nomeTitulo + ' para caixa de ' + opcoesTamanhos[tamanhoSelecionado]
    if (opcoesTamanhos[tamanhoSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add('caixa-pequena')
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

let corSelecionada = 1
let nomeCorSelecionada = document.querySelector('#nome-cor-selecionada')
const imagemMiniatura0 = document.getElementById('0-imagem-miniatura')
const imagemMiniatura1 = document.getElementById('1-imagem-miniatura')
const imagemMiniatura2 = document.getElementById('2-imagem-miniatura')

function trocarCor() {
    let idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = idOpcaoSelecionada.charAt(0)

    tituloProduto.textContent = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nomeTitulo + ' para caixa de ' + opcoesTamanhos[tamanhoSelecionado]
    nomeCorSelecionada.textContent = opcoesCores[corSelecionada].nomeCor

    imagemMiniatura0.src = 'img/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg'
    imagemMiniatura1.src = 'img/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg'
    imagemMiniatura2.src = 'img/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg'
    imagemVisualizacao.src = 'img/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'
}