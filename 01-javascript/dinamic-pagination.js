// dinamic-pagination.js

// Agregamos "export" para que otros archivos puedan usar esta función
export function setupPagination(jobs, resultsPerPage, currentPage) {
    const paginationContainer = document.querySelector('.pagination')
    const totalPages = Math.ceil(jobs.length / resultsPerPage)

    // 1. Limpiar la paginación existente
    paginationContainer.innerHTML = ''

    // 2. Crear un botón (enlace) por cada página
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('a') // Usamos 'a' como en tu HTML/CSS
        button.href = "#"
        button.textContent = i

        // Si es la página actual, añadir clase activa de tu CSS
        if (i === currentPage) {
            button.classList.add('is-active')
        }
        paginationContainer.appendChild(button)
    }

    // 3. Calcular y devolver el "trozo" del array que se debe mostrar
    const startIndex = (currentPage - 1) * resultsPerPage
    const endIndex = startIndex + resultsPerPage
    
    // Devolvemos el array recortado para que fetch-data.js lo dibuje
    return jobs.slice(startIndex, endIndex)
}