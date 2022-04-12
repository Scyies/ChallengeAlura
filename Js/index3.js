// let listaProdutos = [];

// const carregaProdutos = async () => {
//     try {
//         const res = await fetch('http://localhost:3000/produtos');
//         listaProdutos = await res.json();
//         mostrarProdutos(listaProdutos);
//     }
//     catch (err) {
//         console.log(err);
//     }
// };

// const mostrarProdutos = (produtos) => {
//     console.log(produtos);
//     produtos.forEach((produto) => {
//         const row = document.querySelector('.produtos');
//         const div = document.createElement("div");
//         div.classList.add("produto");

//         div.innerHTML = `
//                 <img class='imagem-produto' src='${produto.imagem}'></img>
//                 <p class='produto-nome'>${produto.nome}</p>
//                 <p class='produto-preco'>${produto.preco}</p>
//                 <a href='descricao-produto.html' class='produto-verProduto--link'><p class='produto-verProduto'>${produto.descricao}</p>
//                 `;
//         row.appendChild(div);
        
//     })}

// carregaProdutos();

// AJAX PARA ADICIONAR PRODUTO

const criaNovoProduto = (imagem, nome, preco, descricao) => {
    const linhaProdutoNovo = document.createElement('div');
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

const listaProdutos = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();

    http.open('GET', 'http://localhost:3000/produtos');

    http.onload = () => {
        if (http.status >= 400) {
            reject(JSON.parse(http.response));
        }
        else {
            resolve(JSON.parse(http.response));
        }
    }
    http.send();
    })
    return promise;
}

listaProdutos()
.then(data => {
    data.forEach(elemento => {
        repositorio.appendChild(criaNovoProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.descricao))
    })
});