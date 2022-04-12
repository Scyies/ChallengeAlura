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