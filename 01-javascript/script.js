// const botones = document.querySelectorAll(".button-apply-job")


/*Aqui estamos recorriendo todos los botones con un forEach y añadiendo un evento de escucha a cada uno de ellos
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


const jobListingsContent = document.querySelector(".jobs-listings")

jobListingsContent.addEventListener('click', function(event) {
    const element = event.target
    if(element.classList.contains("button-apply-job")) {
        element.textContent = ("¡Aplicado!")
        element.disabled = true
        element.classList.add("is-applied")
    }
})