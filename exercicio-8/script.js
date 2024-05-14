const url = 'cards.json'

window.onload = () => {
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => 
        data.cards.forEach(charac => {
            let article = document.createElement('article')
            article.innerHTML = `<img src=${charac.imagem}><div class="info"><h2>${charac.nome}</h2><h3>${charac.alinhamento}</h3></div>`
            article.classList.add("card")
            article.style.backgroundColor = charac.cor
            document.getElementById('container-cards').appendChild(article)
        }
    ))
}