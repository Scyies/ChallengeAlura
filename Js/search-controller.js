import { produtosService } from "./produtosService.js";

let produtos = [];

const searchBtn = document.querySelector('[data-btn]');
const searchInput = document.querySelector('[data-search]');
const repositorio = document.querySelector('.produtos');
const produtosTemplate = document.querySelector('[data-template]');

// searchInput.addEventListener('input', e => {
//     const value = searchInput.value.toLowerCase();
//     produtos.forEach(produto => {
//         const isVisible = produto.nome.toLowerCase().includes(value)
//     e.target.closes('produto').classList.toggle('hide', !isVisible)
//     })
// })

searchBtn.addEventListener('click', e => {
    const value = searchInput.value.toLowerCase();
    console.log("click");
    const produtosFiltrados = produtos.filter((produto) => {
        return (
            produto.nome.toLowerCase().includes(value)
        )
    })
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
        produtos = data.map(produto => {
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