const form = document.getElementById('datosFormulario')
const response = document.getElementById('response')


form.addEventListener('submit', async event => {
    try {
    
    event.preventDefault()

    const data = new FormData(form)

    const obj = {}

    data.forEach((value, key) => obj[key] = value) // RECIBE (value, key)
    
    const headers = {
        'Content-Type': 'application/json', // SE ESTA ENVIANDO EN EL BODY FORMATO JSON
    }

    const method = 'POST'

    const body = JSON.stringify(obj)

    const response = await fetch('/users/create',{
        headers,
        method,
        body,
    })

    const formDataa = await response.json()

    console.log(formDataa)

}   catch (error) {
    console.log(error);
}
    // fetch('/users', {
    //     headers: { // INFORMACION PARA EL CONTROLADOR(api)
            
    //     },
    //     method:'POST', // METODO A UTILIZAR
    //     body: JSON.stringify(obj),// EN LA RED SE COMUNICA POR JSON, NO POR JS
    // })
    // .then(response => response.json())
    // .then(data => (console.log(response) = data.message))
    // .catch(error => console.log(error))
})