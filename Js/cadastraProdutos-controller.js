import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

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

const formulario = document.querySelector('[data-form]');
const db = getDatabase();

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nome = evento.target.querySelector('[data-nome]').value
    const preco = evento.target.querySelector('[data-preco]').value
    const descricao = evento.target.querySelector('[data-descricao]').value
    const imagem = evento.target.querySelector('#drag-preview').src
    const row = evento.target.querySelector('[data-row]').options.selectedIndex

    const dbRef = ref(getDatabase());
    get(child(dbRef, 'produtos/'))
    .then((snapshot) => {const newId = snapshot.val().length

    set(ref(db, 'produtos/' + newId), {
        nome: nome,
        preco: preco,
        descricao: descricao,
        imagem: imagem,
        row: row,
        id: newId
    })
    .then (() => {
        alert("data saved")
        window.location.href = '../todos-produtos.html'
    })
    .catch ((error) => {
        console.error(error)
    })
})
})

const imgInput = document.querySelector('#escolher-img');
const previewContainer = document.querySelector('.drag-area');
const imgUpload = previewContainer.querySelector('#drag-preview');
const imgPreviewDefault = previewContainer.querySelector('.drag-img');

imgInput.addEventListener('change', function () {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        imgUpload.style.display = 'block'
        imgPreviewDefault.style.display = 'none'

        reader.addEventListener('load', function () {
            imgUpload.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    }
})

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log('estou logado');
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});
