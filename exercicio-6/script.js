const comeco = document.querySelector('.comeco')
const btnComecar = document.querySelector('#btn-comecar')

const estruturaQuestoes = document.querySelector('.estrutura-questoes')
const questaoAtiva = document.querySelector('#questao-ativa')
const numQuestao = document.querySelector('#numero-da-questao')
const questao = document.querySelector('#pergunta')
const opcaoA = document.querySelector('.opcao-a')
const opcaoB = document.querySelector('.opcao-b')
const opcaoC = document.querySelector('.opcao-c')

const final = document.querySelector('.final')
const btnRefazer = document.querySelector('#btn-refazer')
const numeroAcertos = document.querySelector('#numero-acertos')
const situacao = document.querySelector('#situacao')

// Questões

const questao1 = {
    numero: 1,
    pergunta: 'Quais são gastrópodes?',
    letraA: 'Caranguejos, lagostas e camarões',
    letraB: 'Lesmas, caracóis e caramujos',
    letraC: 'Tubarões, arraias e quimeras',
    certa: 'B'
}

const questao2 = {
    numero: 2,
    pergunta: 'Com o que suas conchas estão relacionadas?',
    letraA: 'A proteção de seus filhotes',
    letraB: 'Seu sistema digestivo',
    letraC: 'Sua capacidade de respiração pulmonar',
    certa: 'C'
}

const questao3 = {
    numero: 3,
    pergunta: 'Para que servem seus tentáculos de cima?',
    letraA: 'Para cheirar',
    letraB: 'Para atacar',
    letraC: 'Para enxergar',
    certa: 'C'
}

const questao4 = {
    numero: 4,
    pergunta: 'O que permite seu ótimo senso de localização?',
    letraA: 'Seu musgo',
    letraB: 'Seus tentáculos',
    letraC: 'Sua memória',
    certa: 'A'
}

const questao5 = {
    numero: 5,
    pergunta: 'Qual é um mecanismo de defesa das lesmas marinhas?',
    letraA: 'Retrair-se em sua concha',
    letraB: 'Relação de mutualismo com outros animais por proteção',
    letraC: 'Incorporar toxinas do seu alimento',
    certa: 'C'
}

const paginas = [comeco, questao1, questao2, questao3, questao4, questao5, final]

btnComecar.addEventListener('click', () => {
    comeco.style.display = 'none'
    estruturaQuestoes.setAttribute('style', 'display: block')
})

opcaoSelecionada = ''

opcaoA.addEventListener('click', () => {
    opcaoSelecionada = 'A'
    passarQuestao(opcaoSelecionada)
})

opcaoB.addEventListener('click', () => {
    opcaoSelecionada = 'B'
    passarQuestao(opcaoSelecionada)
})

opcaoC.addEventListener('click', () => {
    opcaoSelecionada = 'C'
    passarQuestao(opcaoSelecionada)
})

let paginaAtual = 1
let pontos = 0

function passarQuestao(opcaoSelecionada) {
    if(paginas[paginaAtual].certa === opcaoSelecionada) {
        pontos++
        switch(opcaoSelecionada) {
            case 'A':
                opcaoA.setAttribute('style', 'background-color: rgb(12, 141, 12)')
                break
            case 'B':
                opcaoB.setAttribute('style', 'background-color: rgb(12, 141, 12)')
                break
            case 'C':
                opcaoC.setAttribute('style', 'background-color: rgb(12, 141, 12)')
                break
        }} else {
            switch(opcaoSelecionada) {
                case 'A':
                    opcaoA.setAttribute('style', 'background-color: rgb(215, 35, 35)')
                    break
                case 'B':
                    opcaoB.setAttribute('style', 'background-color: rgb(215, 35, 35)')
                    break
                case 'C':
                    opcaoC.setAttribute('style', 'background-color: rgb(215, 35, 35)')
                    break
            }
        }
        
    setTimeout(function(){
        if(paginaAtual < paginas.length - 2) {
            paginaAtual++
            questaoAtiva.textContent = ' ' + paginaAtual + '/5'
            numQuestao.textContent = paginas[paginaAtual].numero
            questao.textContent = paginas[paginaAtual].pergunta
            opcaoA.textContent = 'A – ' + paginas[paginaAtual].letraA
            opcaoB.textContent = 'B – ' + paginas[paginaAtual].letraB
            opcaoC.textContent = 'C – ' + paginas[paginaAtual].letraC

            opcaoA.setAttribute('style', 'background-color: #31470b')
            opcaoB.setAttribute('style', 'background-color: #31470b')
            opcaoC.setAttribute('style', 'background-color: #31470b')
        } else {
            estruturaQuestoes.setAttribute('style', 'display: none')
            final.setAttribute('style', 'display: block')
            numeroAcertos.textContent = 'Você acertou ' + pontos + ' de 5 questões!'
            avaliarResultado(pontos)
        }
    }, 1000)

    return pontos
}

function avaliarResultado(pontos) {
    if(pontos <= 1) {
        situacao.textContent = 'Nossa, você foi horrível!'
    } else if(pontos > 1 && pontos <= 3) {
        situacao.textContent = 'Dá pra melhorar!'
    } else {
        situacao.textContent = 'Parabéns, você foi incrível!'
    }
}

btnRefazer.addEventListener('click', () => {
    opcaoA.setAttribute('style', 'background-color: #31470b')
    opcaoB.setAttribute('style', 'background-color: #31470b')
    opcaoC.setAttribute('style', 'background-color: #31470b')
    final.setAttribute('style', 'display: none')
    comeco.setAttribute('style', 'display: block')
    paginaAtual = 1
    pontos = 0

    questaoAtiva.textContent = ' 1/5';
    numQuestao.textContent = paginas[paginaAtual].numero;
    questao.textContent = paginas[paginaAtual].pergunta;
    opcaoA.textContent = 'A – ' + paginas[paginaAtual].letraA;
    opcaoB.textContent = 'B – ' + paginas[paginaAtual].letraB;
    opcaoC.textContent = 'C – ' + paginas[paginaAtual].letraC;
})