const form = document.getElementById("form_data");

form.addEventListener('submit', evento => {
    evento.preventDefault()

 const formData = new FormData(form);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
