/*Con fetch cogemos datos de data.json y creamos articles en jobs-listing con esos datos. 
Esto es para simular una búsqueda de empleos que devuelve resultados dinámicos. */

// fetch-data.js

// 1. Importamos la función que acabamos de crear
import { setupPagination } from './dinamic-pagination.js';

const loading = document.querySelector('#jobs-loading') 
const container = document.querySelector(".jobs-listings")

fetch("./data.json") 
.then((response) => response.json()) 
.then((jobs) => {
    if(loading) loading.remove() 
    if(jobs.length === 0) {
        container.innerHTML = "<p>No se han encontrado empleos</p>" 
        return;
    }

    // 2. Configuramos las variables para la paginación
    const RESULTS_PER_PAGE = 3
    const currentPage = 1

    // 3. LLAMAMOS A LA FUNCIÓN IMPORTADA
    // Le pasamos todos los empleos, y nos devuelve solo los 3 de la página 1
    const jobsToShow = setupPagination(jobs, RESULTS_PER_PAGE, currentPage)

    // 4. Recorremos "jobsToShow" en lugar del "jobs" original
    jobsToShow.forEach(job => { 
        const article = document.createElement('article') 
        article.className = 'job-listing-card' 
        
        article.dataset.modalidad = job.data.modalidad 
        article.dataset.nivel = job.data.nivel
        article.dataset.technology = job.data.technology
        article.dataset.titulo = job.titulo
        article.dataset.empresa = job.empresa
        article.dataset.ubicacion = job.ubicacion
        
        article.innerHTML = `
            <div>
                <h3>${job.titulo}</h3>
                <small>${job.empresa} - ${job.ubicacion}</small>
                <p>${job.descripcion}</p>
            </div>
            <button class ="button-apply-job">Aplicar</button>
        `
        container.appendChild(article) 
    })
})
.catch((error) => {
    if(loading) loading.textContent = "Error al cargar los empleos" 
    console.error(error) 
})

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
        
    
//         container.appendChild(article) // esto es para añadir el artículo al contenedor principal de la página, lo que hará que se muestre en la lista de empleos.
//     })
//     .catch((error) => {
//         if(loading) loading.textContent = "Error al cargar los empleos" // esto es para mostrar un mensaje de error si no se han podido obtener los datos del JSON, para ver la asincronía en acción.
//         console.error(error) // esto es para mostrar el error en la consola del navegador, lo que puede ser útil para depurar el código.
//     })
    
// })