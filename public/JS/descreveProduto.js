import { produtosService } from "./produtosService.js";

const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-descricaoNome]');
const inputPreco = document.querySelector('[data-descricaoPreco]');
const inputDescricao = document.querySelector('[data-descricao]');
const inputImagem = document.querySelector('[data-descricaoImagem]');

produtosService.detalhaProduto(id)
.then (dados => {
    inputNome.textContent = dados.nome;
    inputPreco.textContent = dados.preco;
    inputImagem.src = dados.imagem;
    inputDescricao.textContent = dados.descricao;
})