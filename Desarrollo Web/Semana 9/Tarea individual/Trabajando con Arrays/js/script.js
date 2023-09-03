// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showStringListAlphabet(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  const stringFilter = array.filter((element) => typeof element === "string").sort(function(a, b) {
    if (a.toLowerCase()<b.toLowerCase()){return -1;}
    if(a.toLowerCase() > b.toLowerCase()){return 1;}
      return 0;
  });
  stringFilter.forEach((stringFilter) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(stringFilter));
    container.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Escribe tu solución aquí
  // Sugerencia de cómo mostrar el array => showList(strangeArray);
  showStringListAlphabet(strangeArray)
});
