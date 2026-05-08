const jobsSearchInput = document.querySelector('#empleos-search-input')

jobsSearchInput.addEventListener('input', function() {
    const inputValue = jobsSearchInput.value.trim().toLowerCase()
    const jobs = document.querySelectorAll(".job-listing-card")

    jobs.forEach(job => {
        const jobTitle = job.dataset.titulo.toLowerCase()
        
        const isShown = inputValue === "" || jobTitle.includes(inputValue)
        job.classList.toggle("is-hidden", isShown === false)
    })
})

//Segun Midu, hacerlo con .filter():

/*

const jobsSearchInput = document.querySelector('#empleos-search-input')

jobsSearchInput.addEventListener('input', function() {
  const inputValue = jobsSearchInput.value.trim().toLowerCase()
  const jobs = Array.from(document.querySelectorAll('.job-listing-card'))

  const matched = jobs.filter(job => {
    const title = (job.dataset.titulo || '').toLowerCase()
    return title.includes(inputValue)
  })

  jobs.forEach(job => {
    job.classList.toggle('is-hidden', !matched.includes(job))
  })
})

*/