import { produtosService } from "./produtosService.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descricao = evento.target.querySelector('[data-descricao]').value
    const imagem = evento.target.querySelector('[data-imagem]').value

    produtosService.criaProduto(nome, preco, descricao, imagem)
    .then(() => {
        window.location.href = '../todos-produtos.html'
    });
})