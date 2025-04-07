const libro = {
    titulo: "La Cenicienta",
    autor: "Charles Perrault",
    anio: 1697,
    estado: "disponible",
    capitulos: ["Introducción", "La vida con sus hermanastras", "El baile", "La zapatilla de cristal"],
  
    describirLibro: function () {
      const info = `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
      document.getElementById("infoLibro").innerText = info;
      mostrarCapitulos();
    },
  
    agregarCapitulo: function (nombreCapitulo) {
      if (nombreCapitulo) {
        this.capitulos.push(nombreCapitulo);
      }
    },
  
    eliminarUltimoCapitulo: function () {
      this.capitulos.pop();
    }
  };
  
  function mostrarCapitulos() {
    const lista = document.getElementById("listaCapitulos");
    lista.innerHTML = ""; // Limpiar
    libro.capitulos.forEach((cap, i) => {
      const item = document.createElement("li");
      item.textContent = `${i + 1}. ${cap}`;
      lista.appendChild(item);
    });
  }
  
  function agregarCapitulo() {
    const nuevo = document.getElementById("capituloNuevo").value;
    libro.agregarCapitulo(nuevo);
    document.getElementById("capituloNuevo").value = "";
    mostrarCapitulos();
  }
  
  function eliminarUltimoCapitulo() {
    libro.eliminarUltimoCapitulo();
    mostrarCapitulos();
  }
  