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

function sortearAmigo() {
    if (amigos.length <= 1) {
        alert("Ingrese al menos dos nombres");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        lista.innerHTML = "";
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
    }
}

function limpiarCajaNombre () {
    document.getElementById("amigo").value = "";
    nombreAmigo = "";
    // document.getElementById("amigo").focus();
    return;
}