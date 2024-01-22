let numeroSorteado = 0
let sorteado = document.querySelector('#sorteado')
let dado = document.querySelector('img')

let btnSortear = document.querySelector('button')
let audioDado = document.querySelector('audio')

btnSortear.addEventListener('click', function(){
    dado.classList.add('animar')
    sorteado.classList.add('aparecer')
    audioDado.play()

    btnSortear.style.display = 'none'

    setTimeout(function() {
        numeroSorteado = getRandomInt(1,6)
        console.log(numeroSorteado)
        dado.setAttribute('src' , 'img/'+numeroSorteado+'.png')
        sorteado.textContent = numeroSorteado
        
        btnSortear.style.display = 'inline-block'
        
        dado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750)
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }