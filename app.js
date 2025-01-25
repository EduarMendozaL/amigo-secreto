// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        if (amigos.includes(nombreAmigo)) {
            // resultado.innerHTML = "Ese nombre ya está ingresado";
            alert(`"${nombreAmigo}" ya está ingresado`);
        } else {
            amigos.push(nombreAmigo);
            lista.innerHTML = "";
            actualizarListaAmigos();
        }
    }
    limpiarCajaNombre();
    return;
}

function actualizarListaAmigos() {
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `${amigos[i]}`;
        lista.appendChild(li);
    }
    return;
}

function limpiarCajaNombre () {
    document.getElementById("amigo").value = "";
    nombreAmigo = "";
    // document.getElementById("amigo").focus();
    return;
}