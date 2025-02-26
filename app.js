// Arreglo que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturamos el valor del campo de entrada
    let nombre = document.getElementById('nombreAmigo').value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Si el valor es válido, agregamos el nombre al array
    amigos.push(nombre);

    // Limpiamos el campo de entrada
    document.getElementById('nombreAmigo').value = "";

    // Llamamos a la función para actualizar la lista de amigos
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    
    // Limpiamos la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Iteramos sobre el array de amigos y agregamos cada uno a la lista HTML
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');  // Creamos un nuevo elemento <li>
        li.textContent = amigos[i];  // Asignamos el nombre del amigo como texto
        lista.appendChild(li);  // Agregamos el <li> a la lista
    }
}

// Función para realizar el sorteo aleatorio
function sorteoAleatorio() {
    // Validamos que haya al menos un amigo en el array
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo.");
        return;
    }

    // Generamos un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre correspondiente al índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el resultado en el elemento de resultado
    document.getElementById('resultado').innerHTML = "El amigo sorteado es: " + amigoSorteado;
}