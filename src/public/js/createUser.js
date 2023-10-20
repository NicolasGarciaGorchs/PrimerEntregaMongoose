const form = document.getElementById('datosFormulario')
const response = document.getElementById('response')


form.addEventListener('submit', event => {
    event.preventDefault()

    const data = new FormData(form)

    const obj = {}

    data.forEach((value, key) => obj[key] = value) // RECIBE (value, key)

    fetch('/create', {
        headers: { // INFORMACION PARA EL CONTROLADOR(api)
            'Content-Type': 'application/json', // SE ESTA ENVIANDO EN EL BODY FORMATO JSON
        },
        method:'POST', // METODO A UTILIZAR
        body: JSON.stringify(obj),// EN LA RED SE COMUNICA POR JSON, NO POR JS
    })
    .then(response => response.json())
    .then(data => (console.log(response) = data.message))
    .catch(error => console.log(error))
})
