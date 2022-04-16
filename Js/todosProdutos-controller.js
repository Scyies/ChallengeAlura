import { produtosService } from "./produtosService.js";

const criaNovoProduto = (imagem, nome, preco, quantidade, id) => {
    const linhaProdutoNovo = document.createElement('div');
    linhaProdutoNovo.classList.add("produto");
    const conteudo = `
                <div class='imagem-container'>
                    <div class='imagem-btn--container'>
                        <input type='image' id='btn-excluir' class='alou' src='../img/VectorExcluir.png'</input>
                        <input type='image' id='btn-editar' src='../img/VectorEditar.png'</input>
                    </div>    
                    <img class='imagem-produto' src='${imagem}'></img>
                </div>
                <p class='produto-nome'>${nome}</p>
                <p class='produto-preco'>${preco}</p>
                <p class='produto-nome'>${quantidade}</p>
    `;
    linhaProdutoNovo.innerHTML = conteudo;
    linhaProdutoNovo.dataset.id = id;
    console.log(linhaProdutoNovo.id);
    return linhaProdutoNovo;
}

const repositorio = document.querySelector('.produtos');

repositorio.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className === 'alou';
    if (botaoDeletar) {
        const linhaProduto = evento.target.closest('.produto');
        let id = linhaProduto.dataset.id
        produtosService.removeProduto(id)
        .then( () => {
            console.log("alo")
            linhaProduto.remove();
        })
    }
})

produtosService.listaProdutos()
.then(data => {
    data.forEach(elemento => {
        repositorio.appendChild(criaNovoProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.quantidade, elemento.id))
    })
});
