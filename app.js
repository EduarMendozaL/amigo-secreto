// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    // Si el input está vacío
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // Si un nombre ya está ingresado
        if (amigos.includes(nombreAmigo)) {
            alert(`"${nombreAmigo}" ya está ingresado`);
        } else {
            amigos.push(nombreAmigo);
            lista.innerHTML = "";
            actualizarListaAmigos();
        }
    }
    limpiarCajaNombre();
    resultado.innerHTML = "";
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
    // Si no hay, al menos, dos nombres
    if (amigos.length <= 1) {
        alert("Ingrese al menos dos nombres");
        limpiarCajaNombre();
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        lista.innerHTML = "";
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
        amigos = [];
    }
    return;
}

// Función para validar que se ingresen solo letras y se cambien las mínusculas a mayúsculas
function validarConvertirMayuscula(letra) {
    let valor = letra.value;
    
    document.getElementById("amigo").value = document.getElementById("amigo").value.toUpperCase();
    
    // Validar y eliminar caracteres no permitidos
    if (!/^[a-zA-ZÀ-ÿ]*$/.test(valor)) {
        // Remover caracterers no válidos
        letra.value = valor.replace(/[^a-zA-ZÀ-ÿ]/g, "");
    }

    return;
}

function limpiarCajaNombre () {
        document.getElementById("amigo").value = "";
        nombreAmigo = "";
        document.getElementById("amigo").focus();
        return;
}