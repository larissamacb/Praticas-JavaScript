let caixa = document.querySelector(".caixa")

function vermelho() {
    caixa.classList.remove('reset', 'caixa-azul', 'caixa-amarela')
    caixa.classList.add('caixa-vermelha')
}
document.querySelector("#vermelho").addEventListener('click', vermelho)

function azul() {
    caixa.classList.remove('caixa-vermelha', 'reset', 'caixa-amarela')
    caixa.classList.add('caixa-azul')
}
document.querySelector("#azul").addEventListener('click', azul)

function amarelo() {
    caixa.classList.remove('caixa-vermelha', 'caixa-azul', 'reset')
    caixa.classList.add('caixa-amarela')
}
document.querySelector("#amarelo").addEventListener('click', amarelo)

function reset() {
    caixa.classList.remove('caixa-vermelha', 'caixa-azul', 'caixa-amarela')
}
document.querySelector("#reset").addEventListener('click', reset)