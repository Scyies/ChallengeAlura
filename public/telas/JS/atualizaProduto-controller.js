import { produtosService } from "./produtosService.js";

const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputPreco = document.querySelector('[data-preco]');
const inputImagem = document.querySelector('#drag-preview');
const inputDescricao = document.querySelector('[data-descricao]');
const inputRow = document.querySelector('[data-row]');
console.log(inputImagem)

produtosService.detalhaProduto(id)
.then (dados => {
    inputNome.value = dados.nome;
    inputPreco.value = dados.preco;
    inputImagem.src = dados.imagem;
    inputDescricao.value = dados.descricao;
    inputRow.options.selectedIndex = dados.row;
})

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    produtosService.atualizaProduto(id, inputNome.value, inputPreco.value, inputImagem.src, inputDescricao.value, inputRow.options.selectedIndex)
    .then(() => {
        window.location.href = "../todos-produtos.html"
    })
})
