import { produtosService } from "./produtosService.js";

const produtosTemplate = document.querySelector('[data-template]');
const starwars = document.querySelector('.produtos-primeiraRow');
const consoles = document.querySelector('.produtos-segundaRow');
const diversos = document.querySelector('.produtos-terceiraRow');
const searchInput = document.querySelector('[data-search]');

let produtos = []

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    produtos.forEach(produto => {
        const isVisible = produto.nome.toLowerCase().includes(value) 
    produto.element.classList.toggle('hide', !isVisible)  //para deixar os que não são buscados invisiveis
})
})
produtosService.listaProdutos()
.then(data => {
    produtos = data.map(produto => {
        const card = produtosTemplate.content.cloneNode(true).children[0];
        const nome = card.querySelector('.produto-nome');
        const preco = card.querySelector('.produto-preco');
        const imagem = card.querySelector('.imagem-produto');
        const link = card.querySelector('#verProdutobtn');

        nome.textContent = produto.nome
        preco.textContent = produto.preco
        imagem.src = produto.imagem
        link.href = `./descricao-produto.html?id=${produto.id}`
        if (produto.row == 1) {
            starwars.append(card);
        }
        if (produto.row == 2) {
            consoles.append(card);
        }
        if (produto.row == 3) {
            diversos.append(card);
        }
        return {
            nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
        }
    })
})
