let amigos = [];
let amigo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let indiceAleatorio = 0;


function agregarAmigo() {
    if (amigo.value == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo.value);
        console.log(amigos);
        amigo.value = "";
        actualizarLista();
    }
}

function actualizarLista() {
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li); 
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Para sortear ingrese, al menos, dos nombre");
    } else {
        indiceAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(indiceAleatorio);
        resultado.innerHTML = amigos[indiceAleatorio];
    }
}