
/* evento cambio de filtro y mostrar resultados nuevos en jobs-listing*/

// Aquí seleccionamos el select del filtro de ubicación y el elemento donde mostraremos el mensaje del filtro seleccionado.
const filter = document.querySelector("#filter-location")
// Aquí seleccionamos el elemento donde mostraremos el mensaje del filtro seleccionado.
const mensaje = document.querySelector("#filter-selected-value")


// Aquí añadimos un evento de escucha al select del filtro de ubicación.
filter.addEventListener("change", function(){

    // aquí seleccionamos todos los empleos que se han creado dinámicamente, para poder filtrarlos después.
    const jobs = document.querySelectorAll(".job-listing-card")

    const selectedValue = filter.value

    if(selectedValue){
        mensaje.textContent = `Filtro seleccionado: ${selectedValue}` // esto muestra el valor seleccionado en el mensaje
    }else{
        mensaje.textContent = ""
    }
    // Ahora buscar todos los empleos y  ver cuales cumplen los filtros, para hidden el resto.
    jobs.forEach(job => {
        const modalidad = job.dataset.modalidad
        //Esta const es un booleano que indica si el empleo debe ser mostrado o no, 
        // dependiendo de si el valor seleccionado es igual a la modalidad del empleo o si 
        // no se ha seleccionado ningún filtro (selectedValue === "")
        const isShown = selectedValue === "" || selectedValue === modalidad
        // Aquí usamos toggle para añadir o quitar la clase "is-hidden" dependiendo 
        // del valor de isShown. Si isShown es true, se quita la clase "is-hidden" (mostrando el empleo),
        // y si isShown es false, se añade la clase "is-hidden" (ocultando el empleo).
        job.classList.toggle("is-hidden", isShown === false)
    })
})

// MODO CON TODOS LOS FILTROS

/* evento cambio de filtro y mostrar resultados nuevos en jobs-listing*/

// // Aquí seleccionamos los selects de los filtros y el elemento donde mostraremos el mensaje de los filtros seleccionados.
// const filterTechnology = document.querySelector("#filter-technology")
// const filterLocation = document.querySelector("#filter-location")
// const filterExperience = document.querySelector("#filter-experience-level")
// const mensaje = document.querySelector("#filter-selected-value")

// // Variables para almacenar los valores seleccionados de cada filtro
// let selectedTechnology = ""
// let selectedLocation = ""
// let selectedExperience = ""

// // Función para filtrar los empleos basándose en los criterios seleccionados
// function filterJobs() {
//     const jobs = document.querySelectorAll(".job-listing-card")
    
//     jobs.forEach(job => {
//         const technology = job.dataset.technology
//         const modalidad = job.dataset.modalidad
//         const nivel = job.dataset.nivel
        
//         // Verificar si el empleo cumple con todos los filtros seleccionados
//         const matchesTechnology = selectedTechnology === "" || (Array.isArray(technology) ? technology.includes(selectedTechnology) : technology === selectedTechnology)
//         const matchesLocation = selectedLocation === "" || selectedLocation === modalidad
//         const matchesExperience = selectedExperience === "" || selectedExperience === nivel
        
//         // Mostrar el empleo solo si cumple con todos los criterios
//         const isShown = matchesTechnology && matchesLocation && matchesExperience
//         job.classList.toggle("is-hidden", !isShown)
//     })
    
//     // Actualizar el mensaje con los filtros seleccionados
//     const filters = []
//     if (selectedTechnology) filters.push(`Tecnología: ${selectedTechnology}`)
//     if (selectedLocation) filters.push(`Ubicación: ${selectedLocation}`)
//     if (selectedExperience) filters.push(`Nivel: ${selectedExperience}`)
//     mensaje.textContent = filters.length > 0 ? `Filtros seleccionados: ${filters.join(", ")}` : ""
// }

// // Aquí añadimos eventos de escucha a cada select
// filterTechnology.addEventListener("change", function() {
//     selectedTechnology = filterTechnology.value
//     filterJobs()
// })

// filterLocation.addEventListener("change", function() {
//     selectedLocation = filterLocation.value
//     filterJobs()
// })

// filterExperience.addEventListener("change", function() {
//     selectedExperience = filterExperience.value
//     filterJobs()
// })