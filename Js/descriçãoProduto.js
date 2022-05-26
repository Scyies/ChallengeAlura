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

let produtos = [];

const repositorio = document.querySelector('.produtos');

const produtosTemplate = document.querySelector('[data-form]')

const db = getDatabase();
const dbRef = ref(db, 'produtos');
onValue(dbRef, (snapshot) => {
    const data = snapshot.val()
    produtos = data.forEach(produto => {
        const card = produtosTemplate.content.cloneNode(true).children[0];
        const nome = card.querySelector('[data-nome]');
        const preco = card.querySelector('[data-preco]');
        const imagem = card.querySelector('[data-imagem]');
        const link = card.querySelector('#verProdutobtn');
        const pegaURL = new URL(window.location);
        const id = pegaURL.searchParams.get('id');

        nome.textContent = produto.nome;
        preco.textContent = produto.preco;
        imagem.src = produto.imagem;
        link.href = `./descricao-produto.html?id=${produto.id}`;
        
        repositorio.append(card);
        return {
            nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
        }
    })
})


// produtosService.listaProdutos()
// .then(data => {
//     produtos = data.map(produto => {
//         const card = produtosTemplate.content.cloneNode(true).children[0];
//         const nome = card.querySelector('[data-nome]');
//         const preco = card.querySelector('[data-preco]');
//         const imagem = card.querySelector('[data-imagem]');
//         const link = card.querySelector('#verProdutobtn');
//         const pegaURL = new URL(window.location);
//         const id = pegaURL.searchParams.get('id');

//         nome.textContent = produto.nome;
//         preco.textContent = produto.preco;
//         imagem.src = produto.imagem;
//         link.href = `./descricao-produto.html?id=${produto.id}`;
        
//         repositorio.append(card);
//         return {
//             nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
//         }
//     })
// });

