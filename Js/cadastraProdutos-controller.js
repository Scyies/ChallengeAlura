import { produtosService } from "./produtosService.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descricao = evento.target.querySelector('[data-descricao]').value
    const imagem = evento.target.querySelector('#drag-preview').src
    const row = evento.target.querySelector('[data-row]').options.selectedIndex

    produtosService.criaProduto(imagem, nome, preco, descricao, row)
    .then(() => {
        window.location.href = '../todos-produtos.html'
    });
})

const imgInput = document.querySelector('#escolher-img');
const previewContainer = document.querySelector('.drag-area');
const imgUpload = previewContainer.querySelector('#drag-preview');
const imgPreviewDefault = previewContainer.querySelector('.drag-img');
console.log(imgUpload);
console.log(imgPreviewDefault);

imgInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        imgInput.style.display = 'block'
        imgPreviewDefault.style.display = 'none'

        reader.addEventListener('load', function () {
            imgUpload.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    }
})
