// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, set, onValue, get, child } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

function writeUserData(id, nome, preco, descricao, imagem) {
    const db = getDatabase();
    set(ref(db, 'produtos/' + id), {
      nome: nome,
      preco: preco,
      descricao: descricao,
      imagem: imagem
    })
    alert('noice')
}

// window.onload = writeUserData(35, "pinto de borracha", "R$ 20,00", "SIM", "http://pm1.narvii.com/6927/6d72e0af01f1e56e449b1f7966e4a807693f0341r1-1200-1649v2_00.jpg");

let produtos = [];
const produtosTemplate = document.querySelector('[data-template]');
const starwars = document.querySelector('.produtos-primeiraRow');
const consoles = document.querySelector('.produtos-segundaRow');
const diversos = document.querySelector('.produtos-terceiraRow');

const db = getDatabase();
const dbRef = ref(db, `produtos`);
onValue(dbRef, (snapshot) => {
  const data = snapshot.val()
  console.log(data)
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


console.log(dbRef);

// const dbRefer = ref(getDatabase());
// get(child(dbRefer, `produtos/0`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });