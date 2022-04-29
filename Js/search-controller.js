import { produtosService } from "./produtosService.js";
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
let produtosTemp = [];

const searchBtn = document.querySelector('[data-btn]');
const searchInput = document.querySelector('[data-search]');
const repositorio = document.querySelector('.produtos');
const produtosTemplate = document.querySelector('[data-template]');

// searchBtn.addEventListener('click', e => {
//     const value = searchInput.value.toLowerCase();
//     const produtosFiltrados = produtos.filter((produto) => {
//         return (
//             produto.nome.toLowerCase().includes(value)
//         )
//     })
//     if (produtos) {
//         produtos.forEach(produto => {
//         produto.element.classList.toggle('hide')
//     })
//     }
// })

const dbRef = ref(getDatabase());

searchBtn.addEventListener('click', function (){
    get(child(dbRef, 'produtos/'))
    .then(snapshot => {
        snapshot.forEach(produto => {
            const myData = produto.val().nome.toLowerCase();
            const value = searchInput.value.toLowerCase();
            // console.log(myData);
            // console.log(value);
            if (myData.includes(value)) {
                console.log('achou');
                // myData.map(produto => {
                //     const card = produtosTemplate.content.cloneNode(true).children[0];
                //     const nome = card.querySelector('.produto-nome');
                //     const preco = card.querySelector('.produto-preco');
                //     const imagem = card.querySelector('.imagem-produto');
                //     nome.textContent = produto.nome
                //     preco.textContent = produto.preco
                //     imagem.src = produto.imagem
                //     repositorio.append(card);
                
                //     return {
                //         nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
                //     }
                // })
            }
        })
    })
})

    //         if(myData.nome == value) {
    //             myData.map(produto => {
    //                         const card = produtosTemplate.content.cloneNode(true).children[0];
    //                         const nome = card.querySelector('.produto-nome');
    //                         const preco = card.querySelector('.produto-preco');
    //                         const imagem = card.querySelector('.imagem-produto');
    //                         nome.textContent = produto.nome
    //                         preco.textContent = produto.preco
    //                         imagem.src = produto.imagem
    //                         repositorio.append(card);
                        
    //                         return {
    //                             nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
    //                         }
    //         }
    //     )}

// const db = getDatabase();
// const dbRef = ref(db, 'produtos');
// onValue(dbRef, (snapshot) => {
//     const data = snapshot.val()
//     produtos = data.map(produto => {
//         const card = produtosTemplate.content.cloneNode(true).children[0];
//         const nome = card.querySelector('.produto-nome');
//         const preco = card.querySelector('.produto-preco');
//         const imagem = card.querySelector('.imagem-produto');
//         nome.textContent = produto.nome
//         preco.textContent = produto.preco
//         imagem.src = produto.imagem
//         repositorio.append(card);
    
//         return {
//             nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
//         }
//     })
// })

// const listaProdutos = onValue(dbRef, (snapshot) => {
//     const data = snapshot.val()
//     produtos = data;
// })

// const listaProdutos = async () => {
//     try {
//         const res = await fetch(`http://localhost:3000/produtos`)
//         produtos = await res.json();
//     } catch (erro) {
//         console.error(erro);
//     }
// };

// const mostrarProdutos = (data => {
//         produtosTemp = data.map(produto => {
//             const card = produtosTemplate.content.cloneNode(true).children[0];
//             const nome = card.querySelector('.produto-nome');
//             const preco = card.querySelector('.produto-preco');
//             const imagem = card.querySelector('.imagem-produto');

//             nome.textContent = produto.nome
//             preco.textContent = produto.preco
//             imagem.src = produto.imagem
//             repositorio.append(card);
        
//             return {
//                 nome: produto.nome, preco: produto.preco, imagem: produto.imagem, element: card
//             }
//         })
// })
