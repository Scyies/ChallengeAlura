import { produtosService } from "./produtosService.js";

let produtos = [];
let produtosTemp = [];

const searchBtn = document.querySelector('[data-btn]');
const searchInput = document.querySelector('[data-search]');
const repositorio = document.querySelector('.produtos');
const produtosTemplate = document.querySelector('[data-template]');

searchBtn.addEventListener('click', e => {
    const value = searchInput.value.toLowerCase();
    const produtosFiltrados = produtos.filter((produto) => {
        return (
            produto.nome.toLowerCase().includes(value)
        )
    })
    if (produtosTemp) {
        produtosTemp.forEach(produto => {
        produto.element.classList.toggle('hide')
    })
    }
    mostrarProdutos(produtosFiltrados)
})

const listaProdutos = async () => {
    try {
        const res = await fetch(`http://localhost:3000/produtos`)
        produtos = await res.json();
    } catch (erro) {
        console.error(erro);
    }
};

const mostrarProdutos = (data => {
        produtosTemp = data.map(produto => {
            const card = produtosTemplate.content.cloneNode(true).children[0];
            const nome = card.querySelector('.produto-nome');
            const preco = card.querySelector('.produto-preco');
            const imagem = card.querySelector('.imagem-produto');

            nome.textContent = produto.nome
            preco.textContent = produto.preco
            imagem.src = produto.imagem
            repositorio.append(card);
        
            return {
                nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
            }
        })
});

listaProdutos();
