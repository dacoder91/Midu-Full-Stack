/*Con fetch cogemos datos de data.json y creamos articles en jobs-listing con esos datos. 
Esto es para simular una búsqueda de empleos que devuelve resultados dinámicos. */

const loading = document.querySelector('#jobs-loading') // esto es para mostrar un mensaje de carga mientras se obtienen los datos del JSON, para ver la asincronía en acción.

const container = document.querySelector(".jobs-listings")
fetch("./data.json") // fetch devuelve una promesa, por lo que usamos .then para manejar la respuesta.
.then((response) => response.json()) // aquí convertimos la respuesta a formato JSON, lo que también devuelve una promesa, por eso usamos otro .then
.then((jobs) => {
    jobs.forEach(job => { // aquí recorremos cada empleo del array de empleos que hemos obtenido del JSON
        
           //Creamos un loading por si tarda en cargar, para ver la asicronia y luego eliminamos
        if(loading) loading.remove() // esto es para eliminar el mensaje de carga una vez que se han obtenido los datos del JSON, para ver la asincronía en acción.
        if(job.length === 0) container.innerHTML = "<p>No se han encontrado empleos</p>" // esto es para mostrar un mensaje si no se han encontrado empleos, aunque en este caso no se va a cumplir porque el JSON tiene datos, pero es una buena práctica tenerlo por si acaso.

        const article = document.createElement('article') // esto es para crear un nuevo elemento HTML del tipo "article", que es el contenedor que usaremos para mostrar cada empleo en la página.
        article.className = 'job-listing-card' // esto es para añadir la clase CSS al artículo, lo que le dará el estilo adecuado.
        
        // aquí añadimos los atributos de datos al artículo para poder filtrarlos después
        article.dataset.modalidad = job.data.modalidad 
        article.dataset.nivel = job.data.nivel
        article.dataset.technology = job.data.technology
        //
        article. innerHTML = `<div>
                            <h3>${job.titulo}</h3>
                            <small>${job.empresa}- ${job.ubicacion}</small>
                            <p>${job.descripcion}</p>
                        </div>
                        <button class ="button-apply-job">Aplicar</button>`

    //version para evitar virus o traer código malicioso del JSON, aunque en este caso no se va a cumplir porque el JSON es seguro, pero es una buena práctica tenerlo por si acaso.
        // const article = document.createElement('article')
        // article.className = 'job-listing-card'

        // const wrapper = document.createElement('div')

        // const title = document.createElement('h3')
        // title.textContent = job.titulo

        // const meta = document.createElement('small')
        // meta.textContent = `${job.empresa} | ${job.ubicacion}`

        // const description = document.createElement('p')
        // description.textContent = job.descripcion

        // const button = document.createElement('button')
        // button.className = 'button-apply-job'
        // button.textContent = 'Aplicar'

        // wrapper.append(title, meta, description)
        // article.append(wrapper, button)
        // container.appendChild(article)
    // esto es para añadir el artículo al contenedor principal de la página, lo que hará que se muestre en la lista de empleos.
        
    
        container.appendChild(article) // esto es para añadir el artículo al contenedor principal de la página, lo que hará que se muestre en la lista de empleos.
    })
    .catch((error) => {
        if(loading) loading.textContent = "Error al cargar los empleos" // esto es para mostrar un mensaje de error si no se han podido obtener los datos del JSON, para ver la asincronía en acción.
        console.error(error) // esto es para mostrar el error en la consola del navegador, lo que puede ser útil para depurar el código.
    })
    
})