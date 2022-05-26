import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, onValue, get, child, remove } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBYxucnxHmgCX4fPPDL1JFhCnXqVcSG4Cg",
    authDomain: "alurageek-test.firebaseapp.com",
    databaseURL: "https://alurageek-test-default-rtdb.firebaseio.com",
    projectId: "alurageek-test",
    storageBucket: "alurageek-test.appspot.com",
    messagingSenderId: "941261808244",
    appId: "1:941261808244:web:03e5598d3b729d8e986721",
    measurementId: "G-X5D53K656V"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const searchInput = document.querySelector('[data-search]');

let produtos = [];

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    produtos.forEach(produto => {
        const isVisible = produto.nome.toLowerCase().includes(value)
    e.target.closest('produto').classList.toggle('hide', !isVisible)
    })
})


const db = getDatabase();
const dbRef = ref(getDatabase());
get(child(dbRef, 'produtos/'))
.then((snapshot) => {
    if (snapshot.exists()){
        const data = snapshot.val()
            produtos = data.forEach(produto => {
                const linhaProdutoNovo = document.createElement('div');
                linhaProdutoNovo.classList.add("produto");
                const card = `
                        <div class='imagem-container'>
                            <div class='imagem-btn--container'>
                                <input type='image' id='btn-excluir' class='btn-excluir' src='../img/VectorExcluir.png'</input>
                                <a class='btn-editar' href='../editar-produto.html?id=${produto.id}' id='btn-editar'><img id='btn-editar--img' src='../img/VectorEditar.png'></a>
                            </div>    
                            <img class='imagem-produto' src='${produto.imagem}'></img>
                        </div>
                        <p class='produto-nome'>${produto.nome}</p>
                        <p class='produto-preco'>${produto.preco}</p>
                        <p class='produto-nome' id='produto-id' data-id>${produto.id}</p>
                        `;
                linhaProdutoNovo.innerHTML = card;
                linhaProdutoNovo.dataset.id = produto.id;
                repositorio.append(linhaProdutoNovo);
                return {
                    linhaProdutoNovo
                };
            })
    } else {
        console.log('deu ruim');
    }
})

const repositorio = document.querySelector('.produtos');

repositorio.addEventListener('click', (evento) => {
    let botaoDeletar = evento.target.className === 'btn-excluir';
    if (botaoDeletar) {
        const getId = evento.target.closest('[data-id]').dataset.id;
        remove(ref(db, 'produtos/' + getId))
        .then(() => {
            alert('data removed');
            document.location.reload();
        })
        .catch((error) => {
            alert('error'+error)
        })
    }
})
