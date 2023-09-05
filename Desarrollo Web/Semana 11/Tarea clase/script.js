let nombre = document.getElementById("name").value
let lastName = document.getElementById("lastName").value
let birth = document.getElementById("birth").value
let btn = document-getElementById("btn")


let data = JSON.stringify({lastName, birth, nombre})

fetch(/jsonplaceholder.typicode.com/users, {method:'POST'})
.then(response => {response.statusText})
.catch(error => {console.log(error)})