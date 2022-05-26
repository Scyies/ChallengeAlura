import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const form = document.querySelector('.login-form');
const btn = document.getElementById('submit-btn');

btn.addEventListener('click',(e) => {

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-senha").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href = '../../todos-produtos.html'
        alert('O login foi efetuado com sucesso!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
})

function monitoraLogin () {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('estou logado');
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}




// class Login {
//     constructor(form, fields) {
//         this.form = form;
//         this.fields = fields;
//         this.validateonSubmit();
//     }

//     validateonSubmit() {
//         let self = this;
        
//         this.form.addEventListener('submit', (e) => {
//             e.preventDefault();
//             let error = 0; 
//             self.fields.forEach((field) => {
//                 const input = document.querySelector(`#${field}`);
//                 if (self.validateFields(input) == false) {
//                     error++;
//                 }
//             });
//             if (error == 0) {
//                 window.location.href = '../../todos-produtos.html'
//             }
//         });
//     }

//     validateFields(field) {
//         if (field.value.trim() == "") {
//             alert("O campo deve ser preenchido")
//             return false;
//         }
//         if (field.value !== "Admin") {
//             console.log("o ademe ta on");
//             return false;
//         }
//         if (field.value == "Admin") {
//             return true;
//         }
//     }
// }

// // const form = document.querySelector('.login-form');
// if (form) {
//     const fields = ["login-email", "login-senha"];
//     const validator = new Login(form, fields);
// }