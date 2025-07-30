let amigos = [];
let amigo = document.getElementById("amigo");

function agregarAmigo() {
    if (amigo.value == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo.value);
        console.log(amigos);
        amigo.value = "";
    }
}