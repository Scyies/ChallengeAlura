"use strict";
let listaProdutos = [];
// const searchBar = document.querySelector('.header-searchBar');

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();

//     const filteredProducts = listaProdutos.filter((produto) => {
//         return (
//             produto.nome.toLowerCase().includes(searchString)
//         );
//     });
//     mostrarProdutos(filteredProducts);
//     console.log(filteredProducts);
// });
// não sei como funcionaria na home, se for o caso teria que jogar para a página de todos os produtos e lá sim listar.


const carregaProdutos = async () => {
    try {
        const res = await fetch('http://localhost:3000/produtos');
        listaProdutos = await res.json();
        mostrarProdutos(listaProdutos);
    }
    catch (err) {
        console.log(err);
    }
};

const mostrarProdutos = (produtos) => {
    console.log(produtos);
    produtos.forEach((produto) => {
        const row = document.querySelector('.produtos');
        const div = document.createElement("div");
        div.classList.add("produto");

        div.innerHTML = `
                <img class='imagem-produto' src='${produto.imagem}'></img>
                <p class='produto-nome'>${produto.nome}</p>
                <p class='produto-preco'>${produto.preco}</p>
                <p class='produto-nome'>${produto.quantidade}</p>
                `;
        row.appendChild(div);
        
    })}

carregaProdutos();