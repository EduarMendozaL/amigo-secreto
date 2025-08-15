let amigos = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    // Si el input está vacío
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre");
        amigo.focus();
    } else {
        // Si un nombre ya está ingresado
        if (amigos.includes(nombreAmigo)) {
            alert(`"${nombreAmigo}" ya está ingresado`);
        } else {
            amigos.push(nombreAmigo);
            lista.innerHTML = "";
            actualizarLista();
        }
    }
    limpiarCajaNombre();
    resultado.innerHTML = "";
    return;
}

function actualizarLista() {
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${amigos[i]}`;
        lista.appendChild(li); 
    }
    return;
}

function sortearAmigo() {
    // Verificar que haya, al menos, dos nombres
    if (amigos.length <= 1) {
        alert("Para sortear ingrese, al menos, dos nombre");
        limpiarCajaNombre();
    } else {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        lista.innerHTML = "";
        resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`;
        amigos = [];
    }
    return;
}

// función para que se ingresen solo letras y se cambien de minúscula a mayúscula
function letrasConvertirMayuscula(letra) {
    let valor = letra.value;

    document.getElementById("amigo").value = document.getElementById("amigo").value.toUpperCase();

    // Validar y eliminar caracteres no permitidos
    if (!/^[a-zA-ZÀ-ÿ]*$/.test(valor)) {
        // Remover caracterers no válidos
        letra.value = valor.replace(/[^a-zA-ZÀ-ÿ]/g, "");
    }
    return;
}

function limpiarCajaNombre() {
    document.getElementById("amigo").value = "";
    nombreAmigo = "";
    document.getElementById("amigo").focus();
    return;
}