let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar al array
    actualizarLista(); // Mostrar la lista actualizada
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li class="name-item">${amigos[i]}</li>`; // Agregar cada amigo como <li>
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        resultado.innerHTML = `<li class="error">⚠️ No hay amigos en la lista.</li>`;
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Selecciona el amigo

    resultado.innerHTML = `<li class="winner">🎉 Amigo seleccionado: <strong>${amigoSorteado}</strong></li>`;
}
