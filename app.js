// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para agregar los amigos
let amigos = [];
// Función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let amigo = inputAmigo.value.trim();
        
// Validar si el campo está vacío
if (amigo === "") {
    alert("Por favor, escribe un nombre.");
    return;
}
// Agregar el amigo al array
amigos.push(amigo);

// Limpiar el campo de entrada
inputAmigo.value = "";

// Mostrar la lista de amigos actualizada
mostrarAmigos();
}
// Función para mostrar los amigos en la lista
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar nuevos elementos
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno como un <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
}
}