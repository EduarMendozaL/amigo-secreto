// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        // console.log("Hola amigo: "+nombreAmigo);
        amigos.push(nombreAmigo);
    }
    limpiarCajaNombre();
    return;
}

function limpiarCajaNombre () {
    document.getElementById("amigo").value = "";
    nombreAmigo = "";
    // document.getElementById("amigo").focus();
    return;
}