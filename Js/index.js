let listaProdutos = [];

const searchBar = document.querySelector('.header-searchBar');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredProducts = listaProdutos.filter((produto) => {
        return (
            produto.nome.toLowerCase().includes(searchString)
        );
    });
    mostrarProdutos(filteredProducts);
    console.log(filteredProducts);
});
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
    produtos.forEach((produto) => {
        if (produto.row == "starwars") {
            const starWars = document.querySelector('.produtos-primeiraRow');
            const primeiraRowProdutos = document.createElement("li");
            primeiraRowProdutos.classList.add("produto");
            primeiraRowProdutos.innerHTML =
            `
                <img class='imagem-produto' src='${produto.imagem}'></img>
                <p class='produto-nome'>${produto.nome}</p>
                <p class='produto-preco'>${produto.preco}</p>
                <a href='descricao-produto.html' class='produto-verProduto--link'><p class='produto-verProduto'>${produto.descricao}</p>
            `;
            starWars.appendChild(primeiraRowProdutos);
        };
        if (produto.row == "console") {
            const consoles = document.querySelector('.produtos-segundaRow');
            const segundaRowProdutos = document.createElement("li");
            segundaRowProdutos.classList.add("produto");
            segundaRowProdutos.innerHTML = 
            `
                <img class='imagem-produto' src='${produto.imagem}'></img>
                <p class='produto-nome'>${produto.nome}</p>
                <p class='produto-preco'>${produto.preco}</p>
                <a href='descricao-produto.html' class='produto-verProduto--link'><p class='produto-verProduto'>${produto.descricao}</p>
            `;
            consoles.appendChild(segundaRowProdutos);
        };
        if (produto.row == "diversos") {
            const diversos = document.querySelector('.produtos-terceiraRow');
            const terceiraRowProdutos = document.createElement("li");
            terceiraRowProdutos.classList.add("produto");
            terceiraRowProdutos.innerHTML = 
            `
                <img class='imagem-produto' src='${produto.imagem}'></img>
                <p class='produto-nome'>${produto.nome}</p>
                <p class='produto-preco'>${produto.preco}</p>
                <a href='descricao-produto.html' class='produto-verProduto--link'><p class='produto-verProduto'>${produto.descricao}</p>
            `;
            diversos.appendChild(terceiraRowProdutos);
        }
                
    })

};

carregaProdutos();
console.log(listaProdutos);
