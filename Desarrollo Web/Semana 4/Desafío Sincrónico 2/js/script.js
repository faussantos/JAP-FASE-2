const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí

let usuarios = "";
for (let i = 0; i < DATA.length; i++) {
  usuarios +="<p>" +  DATA[i].name + " " + DATA[i].lastname + "</p>";
}
document.getElementById("container").innerHTML= usuarios;

//
