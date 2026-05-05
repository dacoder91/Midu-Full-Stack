const botones = document.querySelectorAll(".button-apply-job")

//  1º Aqui estamos recorriendo todos los botones con un forEach y añadiendo un evento de escucha a cada uno de ellos

botones.forEach (boton => {
    boton.addEventListener("click", function() {
        //esto cambio el valor del texto del botón y lo deshabilita
        boton.textContent = ("¡Aplicado!")
        boton.disabled = true
        //esto es una función que añade una clase CSS al botón
        boton.classList.add("is-applied")
    })
})


/* 2º A continuación, implementamos el mismo comportamiento pero usando event delegation. 
Esto significa que en lugar de añadir un event listener a cada botón individualmente,
añadimos un solo event listener al contenedor padre que contiene todos los botones. 
Cuando se hace clic en cualquier botón dentro de este contenedor, el evento se propaga hacia arriba 
y es capturado por el event listener del contenedor. 
Luego, verificamos si el elemento que disparó el evento es un botón de aplicar trabajo y ejecutamos 
la lógica correspondiente.  Esto es más eficiente, especialmente cuando hay muchos botones o cuando 
los botones pueden ser añadidos o eliminados dinámicamente. */

const jobListingsContent = document.querySelector(".jobs-listings")

jobListingsContent.addEventListener('click', function(event) {
    const element = event.target
    if(element.classList.contains("button-apply-job")) {
        element.textContent = ("¡Aplicado!")
        element.disabled = true
        element.classList.add("is-applied")
    }
})

/* evento cambio de filtro y mostrar resultados nuevos en jobs-listing*/

const filter = document.querySelector("#filter-location")
const mensaje = document.querySelector("#filter-selected-value")

filter.addEventListener("change", function(){
    const selectedValue = filter.value

    if(selectedValue){
        mensaje.textContent = `Filtro seleccionado: ${selectedValue}`
    }else{
        mensaje.textContent = ""
    }

    // aquí buscamos todos los empleos y vemos cuales cumplen los filtros, para hidden el resto.
    const empleos = document.querySelectorAll(".job-result")
    // recorremos cada empleo y comprobamos si el texto del empleo incluye el valor seleccionado del filtro
    empleos.forEach(empleo =>{
        const texto = empleo.textContent.toLowerCase()
        // si el valor seleccionado no está vacío y el texto del empleo no incluye el valor seleccionado, ocultamos el empleo
        if(selectedValue && !texto.includes(selectedValue)){
            empleo.classList.add("hidden")
            // si el valor seleccionado está vacío o el texto del empleo incluye el valor seleccionado, mostramos el empleo
        }else{
            empleo.classList.remove("hidden")
        }
    })  
})

/* Ahora buscar todos los empleos y  ver cuales cumplen los filtros, para hidden el resto. */












/* evento cambio de filtro y mostrar resultados nuevos en jobs-listing*/

// const searchFiltersContent = document.querySelector(".search-filters")

// searchFiltersContent.addEventListener("change", function(event){
//     const element = event.target
//     /* tecnología */
//     if (element.id === "filter-technology") {
//         const tech = element.value
//     }
//     /*Ubicacion*/
//     else if(element.id.contains("filter-location")){
//         const location = element.value
//         showResults(location)

//     }
//     /*experiencia*/
//     else{

//     }
    
// })

// /*Funcion para cambiar los resultados de busqueda mostrados(poniendo en invisible los que no
// contengan la palabra clave del select*/

// function showResults (value){
//     const jobsResults = document.querySelectorAll(".job-result")

//     jobsResults.forEach(job =>{
//         if(!job.small.contains(value)){
//             job.classList.add("hidden")
//         }
//         else{
//             job.classList.remove("hidden")
//         }
//     })

// }