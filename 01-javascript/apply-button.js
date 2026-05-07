/*
//  1º Aqui estamos recorriendo todos los botones con un forEach y añadiendo un evento de escucha a cada uno de ellos
const botones = document.querySelectorAll(".button-apply-job")

botones.forEach (boton => {
    boton.addEventListener("click", function() {
        //esto cambio el valor del texto del botón y lo deshabilita
        boton.textContent = ("¡Aplicado!")
        boton.disabled = true
        //esto es una función que añade una clase CSS al botón
        boton.classList.add("is-applied")
    })
})
*/

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

/*otras funciones o formas */

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



//Diferentes EVENTOS
// const inputNombre = document.querySelector("#empleos-search-input")

// inputNombre.addEventListener("input", function(){
//     console.log(inputNombre.value)
// })

// inputNombre.addEventListener("blur", function(){
//     console.log("Blur del buscador")
// })

// el evento submit se dispara cuando se envía un formulario, en este caso el formulario del buscador, entre
// inputNombre.addEventListener("submit", function(event){
//     console.log("Submit del buscador")
//     event.preventDefault() // esto evita que se recargue la página al hacer submit
// })