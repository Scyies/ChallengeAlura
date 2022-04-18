import { produtosService } from "./produtosService.js";


const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputPreco = document.querySelector('[data-preco]');
const inputImagem = document.querySelector('[data-imagem]');
const inputDescricao = document.querySelector('[data-descricao]');

produtosService.detalhaProduto(id)
.then (dados => {
    inputNome.value = dados.nome;
    inputPreco.value = dados.preco;
    inputImagem.value = dados.imagem;
    inputDescricao.value = dados.descricao;
})

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    produtosService.atualizaProduto(id, inputNome.value, inputPreco.value, inputImagem.value, inputDescricao.value)
    .then(() => {
        window.location.href = "../todos-produtos.html"
    })
})