import { produtosService } from "./produtosService.js";

const searchInput = document.querySelector('[data-search]');

let produtos = [];

const criaNovoProduto = (imagem, nome, preco, id) => {
    const linhaProdutoNovo = document.createElement('div');
    linhaProdutoNovo.classList.add("produto");
    const conteudo = `
                <div class='imagem-container'>
                    <div class='imagem-btn--container'>
                        <input type='image' id='btn-excluir' class='btn-excluir' src='../img/VectorExcluir.png'</input>
                        <a class='btn-editar' href='../editar-produto.html?id=${id}' id='btn-editar'><img id='btn-editar--img' src='../img/VectorEditar.png'></a>
                    </div>    
                    <img class='imagem-produto' src='${imagem}'></img>
                </div>
                <p class='produto-nome'>${nome}</p>
                <p class='produto-preco'>${preco}</p>
                <p class='produto-nome'>${id}</p>
    `;
    linhaProdutoNovo.innerHTML = conteudo;
    linhaProdutoNovo.dataset.id = id;
    return linhaProdutoNovo;
}

const repositorio = document.querySelector('.produtos');

repositorio.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className === 'btn-excluir';
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

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    produtos.forEach(produto => {
        const isVisible = produto.nome.toLowerCase().includes(value)
    e.target.closest('produto').classList.toggle('hide', !isVisible)
    })
})

produtosService.listaProdutos()
.then(data => {
    produtos = data.map(produto => {
        repositorio.appendChild(criaNovoProduto(produto.imagem, produto.nome, produto.preco, produto.id))
        return {
            nome: produto.nome, preco: produto.preco, imagem: produto.imagem
        }
    })
});

// const produtosTemplate = document.querySelector('[data-template]');
// const searchInput = document.querySelector('[data-search]');
// const repositorio = document.querySelector('.produtos');

// let produtos = [];

// produtosService.listaProdutos()
// .then(data => {
//     produtos = data.map(produto => {
//         const card = produtosTemplate.content.cloneNode(true).children[0];
//         const nome = card.querySelector('.produto-nome');
//         const preco = card.querySelector('.produto-preco');
//         const imagem = card.querySelector('.imagem-produto');
//         const btnEditar = card.querySelector('.btn-editar');

//         nome.textContent = produto.nome
//         preco.textContent = produto.preco
//         imagem.src = produto.imagem
//         btnEditar.href = `../editar-produto.html?id=${id}`

//         console.log(btnEditar.href);
//         card.dataset.id = id;
//         repositorio.append(card);
//         return {
//             nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
//         }
//     })
// })