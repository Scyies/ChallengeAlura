import { produtosService } from "./produtosService.js";

const criaNovoProduto = (imagem, nome, preco, descricao) => {
    const linhaProdutoNovo = document.createElement('div');
    linhaProdutoNovo.classList.add("produto");
    const conteudo = `
    <img class='imagem-produto' src='${imagem}'></img>
    <p class='produto-nome'>${nome}</p>
    <p class='produto-preco'>${preco}</p>
    <a href='descricao-produto.html' class='produto-verProduto--link'><p class='produto-verProduto'>${descricao}</p>
    `;
    linhaProdutoNovo.innerHTML = conteudo;
    return linhaProdutoNovo;
}

const repositorio = document.querySelector('.produtos');

produtosService.listaProdutos()
.then(data => {
    data.forEach(elemento => {
        repositorio.appendChild(criaNovoProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.descricao))
    })
});