let librosLeidos = [
    { titulo: "Cenicienta", año: 2022, paginas: 96 },
    { titulo: "La vuelta al mundo en 80 días", año: 2023, paginas: 252 },
    { titulo: "Hansel y Gretel", año: 2024, paginas: 64 },
    { titulo: "El Gato Negro", año: 2025, paginas: 24 }
];

function agregarLibro(titulo, año, paginas) {
    if (titulo && año && paginas && !librosLeidos.some(libro => libro.titulo === titulo)) {
        librosLeidos.push({ titulo, año, paginas });
        console.log(`Libro agregado: ${titulo} (Año: ${año}, Páginas: ${paginas})`);
        mostrarLibrosLeidos();
    } else {
        console.warn("El libro ya existe o los datos ingresados no son correctos.");
    }
}

function mostrarLibrosLeidos() {
    let lista = document.getElementById("listaLibros");
    lista.innerHTML = "";
    console.log("Lista de libros leídos:");
    librosLeidos.forEach(libro => {
        let item = document.createElement("li");
        item.textContent = `${libro.titulo} (Leído en ${libro.año}, ${libro.paginas} páginas)`;
        lista.appendChild(item);
        console.log(`- ${libro.titulo} (Año: ${libro.anio}, Páginas: ${libro.paginas})`);
    });
}

function agregarLibroDesdeInput() {
    let input = document.getElementById("tituloLibro");
    let año = new Date().getFullYear(); // Asignamos el año actual por defecto
    let paginas = parseInt(prompt("Ingrese el número de páginas:"), 10);
    if (!isNaN(paginas) && paginas > 0) {
        agregarLibro(input.value, año, paginas);
    } else {
        console.error("Número de páginas inválido.");
    }
    input.value = "";
}

// Mostrar los libros iniciales en la lista
mostrarLibrosLeidos();
