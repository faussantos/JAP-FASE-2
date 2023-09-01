const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí

//
function mostrarTabla(data) {
  // Seleccionamos el contenedor
  let tabla = document.getElementById("container");

  // Creamos un elemento vacío para meter los elementos
  let htmlContentToAppend = "";

  // Recorre el array
  for (let i = 0; i < data.length; i++) {
    // data[i] es igual a DATA[1], DATA[2], etc
    let person = data[i];
    // Este es el texto que se mostrará en pantalla, al elemento vacío le agregamos los elementos del array con el for
    htmlContentToAppend += `
      <p>
        <span>${person.name}</span>
        <span>${person.lastname}</span>
      </p>
    `;
  }

  // Insertamos el contenido HTML en la tabla
  tabla.innerHTML = htmlContentToAppend;
}
// Llamada a la función para mostrar los datos cuando se carga la página
document.addEventListener("DOMContentLoaded", function () {
  // el valor "DATA" es el valor del parametro mostrarTabla(data)
  mostrarTabla(DATA);
});