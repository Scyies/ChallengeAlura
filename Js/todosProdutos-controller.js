import { produtosService } from "./produtosService.js";

const criaNovoProduto = (imagem, nome, preco, quantidade, id) => {
    const linhaProdutoNovo = document.createElement('div');
    linhaProdutoNovo.classList.add("produto");
    const conteudo = `
                <div class='imagem-container'>
                    <div class='imagem-btn--container'>
                        <input type='image' id='btn-excluir' src='../img/VectorExcluir.png'</input>
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
    return linhaProdutoNovo;
}

const repositorio = document.querySelector('.produtos');

// quando colocar btn para remover produto
repositorio.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className === '';
    if (botaoDeletar) {
        console.log("alo")
        // const linhaProduto = evento.target.closest('');
        // let id = linhaProduto.dataset.id;
        // produtosService.removeProduto(id)
        // .then( () => {
        //     linhaProduto.remove();
        // })
    }
})

produtosService.listaProdutos()
.then(data => {
    data.forEach(elemento => {
        repositorio.appendChild(criaNovoProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.descricao, elemento.id))
    })
});