import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, get, child, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputPreco = document.querySelector('[data-preco]');
const inputImagem = document.querySelector('#drag-preview');
const inputDescricao = document.querySelector('[data-descricao]');
const inputRow = document.querySelector('[data-row]');

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

const dbRef = ref(getDatabase());
get(child(dbRef, `produtos/${id}`))
.then((snapshot) => {
    if (snapshot.exists()) {
        inputNome.value = snapshot.val().nome;
        inputPreco.value = snapshot.val().preco;
        inputImagem.src = snapshot.val().imagem;
        inputDescricao.value = snapshot.val().descricao;
        inputRow.options.selectedIndex = snapshot.val().row;
    }
    else {
        console.log("No data");
    }
})
.catch ((error) => {
    console.error(error);
});

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    function atualizaProduto(id, nome, preco, imagem, descricao, row) {
        const db = getDatabase();

        const produtoData = {
            nome: nome,
            preco: preco,
            imagem: imagem,
            descricao: descricao,
            row: row,
            id: id
        };

        const atualizacao = {};
        
        atualizacao['produtos/' + id + '/'] = produtoData
        console.log(atualizacao)
        return update(ref(db), atualizacao);
    }
    atualizaProduto(inputNome.value, inputNome.value, inputPreco.value, inputImagem.src, inputDescricao.value, inputRow.options.selectedIndex)

    window.location.href = "../todos-produtos.html"
})
