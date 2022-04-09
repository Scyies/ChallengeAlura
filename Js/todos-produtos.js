let listaProdutos = [];
const searchBar = document.querySelector('.header-searchBar');
const produtos = document.querySelector('.produtos');

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
    const htmlStr = produtos.map((produto) => {
        return `
        <div class='produto'>
            <img class='imagem-produto' src='${produto.imagem}'></img>
            <p class='produto-nome'>${produto.nome}</p>
            <p class='produto-preco'>${produto.preco}</p>
            <a href='descricao-produtos-page.html' class='produto-verProduto--link'><p class='produto-verProduto'>${produto.descricao}</p>
        </div>
        `;
    })
    .join('');
    produtos.innerHTML = htmlStr;
};

mostrarProdutos();