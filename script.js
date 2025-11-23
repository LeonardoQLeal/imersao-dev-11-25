let cardcontainer = document.querySelector(".card-container");
let botaoBusca = document.querySelector("#botao-busca");
let campoBusca = document.querySelector("#campo-busca");
let dados = [];

async function IniciarBusca() {
    // Se os dados ainda não foram carregados, busca do data.json
    if (dados.length === 0) {
        let resposta = await fetch("data.json");
        dados = await resposta.json();
    }

    let termoBusca = campoBusca.value.toLowerCase();

    let dadosFiltrados = dados.filter(dado => {
        return dado.nome.toLowerCase().includes(termoBusca) || 
               dado.descricao.toLowerCase().includes(termoBusca);
    });

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    // Limpa os cards existentes antes de renderizar novos
    cardcontainer.innerHTML = "";

    for (let dado of dados){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardcontainer.appendChild(article);
    }
}

botaoBusca.addEventListener('click', IniciarBusca);
campoBusca.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        IniciarBusca();
    }
});