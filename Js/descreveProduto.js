import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, onValue, get, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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

const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-descricaoNome]');
const inputPreco = document.querySelector('[data-descricaoPreco]');
const inputDescricao = document.querySelector('[data-descricao]');
const inputImagem = document.querySelector('[data-descricaoImagem]');

const dbRef = ref(getDatabase());
get(child(dbRef, `produtos/${id}`)).then((snapshot) => {
    if (snapshot.exists()) {
        inputNome.textContent = snapshot.val().nome;
        inputPreco.textContent = snapshot.val().preco;
        inputImagem.src = snapshot.val().imagem;
        inputDescricao.textContent = snapshot.val().descricao;
    } else {
        console.log('No data available');
    }
}).catch((error) => {
    console.error(error);
})
