function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return 
    }

    
  

    campoPesquisa = campoPesquisa.toLowerCase()


    let resultados = "";
    let titulo = "";
    let sinopse = "";
    let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="texto-sinopse">${dado.sinopse}</p>
                <a href=${dado.opgg}>Ver builds e estatísticas no op.gg</a>
                <br>
                <a href="${dado.top1}">Top 1 Br </a>
                <a href="${dado.tutorial}">Tutoriais no YouTube</a>
    `;
}
}


if (!resultados) {

    const mensagem = document.createElement('p');
  mensagem.textContent = 'Nada foi encontrado';
  // Adicione uma classe para estilização (opcional)
  mensagem.classList.add('mensagem-nao-encontrado');

    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados;

};  