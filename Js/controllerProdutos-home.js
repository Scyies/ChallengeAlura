import { produtosService } from "./produtosService.js";

const criaNovoProduto = (imagem, nome, preco, descricao, id) => {
    const linhaProdutoNovo = document.createElement('div');
    linhaProdutoNovo.classList.add("produto");
    const conteudo = `
    <img class='imagem-produto' src='${imagem}'></img>
    <p class='produto-nome'>${nome}</p>
    <p class='produto-preco'>${preco}</p>
    <button id='verProdutobtn' onclick='mostrarProdutoDescricao()' class='produto-verProduto--link produto-verProduto'>${descricao}</button>
    `;
    linhaProdutoNovo.innerHTML = conteudo;
    linhaProdutoNovo.dataset.id = id;
    return linhaProdutoNovo;
}

const starwars = document.querySelector('.produtos-primeiraRow');
const consoles = document.querySelector('.produtos-segundaRow');
const diversos = document.querySelector('.produtos-terceiraRow');

produtosService.listaProdutos()
.then(data => {
    data.forEach(elemento => {
        if (elemento.row == "starwars") {
            starwars.appendChild(criaNovoProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.descricao))
        }
        if (elemento.row == "console") {
            consoles.appendChild(criaNovoProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.descricao))
        }
        if (elemento.row == "console") {
            diversos.appendChild(criaNovoProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.descricao))
        }
    })
});