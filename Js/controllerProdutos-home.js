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

// searchInput.addEventListener('input', e => {
//     const value = e.target.value.toLowerCase()
//     produtos.forEach(produto => {
//         const isVisible = produto.nome.toLowerCase().includes(value) 
//     produto.element.classList.toggle('hide', !isVisible)  //para deixar os que não são buscados invisiveis
// })
// })

let produtos = [];
const produtosTemplate = document.querySelector('[data-template]');
const starwars = document.querySelector('.produtos-primeiraRow');
const consoles = document.querySelector('.produtos-segundaRow');
const diversos = document.querySelector('.produtos-terceiraRow');

const db = getDatabase();
const dbRef = ref(db, `produtos`);
onValue(dbRef, (snapshot) => {
  const data = snapshot.val()
    produtos = data.map(produto => {
        const card = produtosTemplate.content.cloneNode(true).children[0];
        const nome = card.querySelector('.produto-nome');
        const preco = card.querySelector('.produto-preco');
        const imagem = card.querySelector('.imagem-produto');
        const link = card.querySelector('#verProdutobtn');

        nome.textContent = produto.nome
        preco.textContent = produto.preco
        imagem.src = produto.imagem
        link.href = `./descricao-produto.html?id=${produto.id}`
        if (produto.row == 1) {
            starwars.append(card);
        }
        if (produto.row == 2) {
            consoles.append(card);
        }
        if (produto.row == 3) {
            diversos.append(card);
        }
        return {
            nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
        }
    })
})
