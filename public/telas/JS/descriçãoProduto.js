import { produtosService } from "./produtosService.js";

let produtos = [];

const repositorio = document.querySelector('.produtos');

const produtosTemplate = document.querySelector('[data-form]')

produtosService.listaProdutos()
.then(data => {
    produtos = data.map(produto => {
        const card = produtosTemplate.content.cloneNode(true).children[0];
        const nome = card.querySelector('[data-nome]');
        const preco = card.querySelector('[data-preco]');
        const imagem = card.querySelector('[data-imagem]');
        const link = card.querySelector('#verProdutobtn');
        const pegaURL = new URL(window.location);
        const id = pegaURL.searchParams.get('id');

        nome.textContent = produto.nome;
        preco.textContent = produto.preco;
        imagem.src = produto.imagem;
        link.href = `./descricao-produto.html?id=${produto.id}`;
        
        repositorio.append(card);
        return {
            nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
        }
    })
});

