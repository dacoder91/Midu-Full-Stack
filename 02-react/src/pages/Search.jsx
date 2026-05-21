import { useState } from 'react'
import { Pagination } from '../components/Pagination.jsx'
import { SearchFormSection } from '../components/SearchFormSection.jsx'
import { JobListings } from '../components/JobListings.jsx'
import jobsData from "../data.json"

const RESULTS_PER_PAGE = 5

export function SearchPage() {

    const[filters, setFilters] = useState({
        technology: '',
        location: '',
        experienceLevel: '',
    })


    const [textToFilter, setTextToFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    
    const jobsFilteredbyFilters = jobsData.filter((job) => {
        return (
            (filters.technology === '' || job.data.technology === filters.technology) &&
            (filters.location === '' || job.data.modalidad === filters.location) &&
            (filters.experienceLevel === '' || job.data.nivel === filters.experienceLevel)
        )
    })

    const jobsWithTextFilter = textToFilter === '' 
        ? jobsFilteredbyFilters
        : jobsFilteredbyFilters.filter(job => {
            return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
        })
    
    const totalResults = jobsWithTextFilter.length
    const totalPages = Math.ceil(jobsFilteredbyFilters.length / RESULTS_PER_PAGE)      

    const pagedResults = jobsWithTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE,
        currentPage * RESULTS_PER_PAGE
    )

    const handlePageChange = (page) =>{
        setCurrentPage(page)
    }

    const handleSearch = (filters)=>{
        setCurrentPage(1)
        setFilters(filters)
    }

    const handleTextFilter = (newTextFiltered) =>{
        setTextToFilter(newTextFiltered)
        setCurrentPage(1)
    }

    const handleReset = () => {
        setFilters({
            technology: '',
            location: '',
            experienceLevel: '',
        })
        setTextToFilter('')
        setCurrentPage(1)
    }

    return (
    <>
        <main>
            <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} onReset={handleReset}/>
            <section>
                <JobListings jobs={pagedResults}  />
                <div className="results-summary">
                <p>
                    Se encontraron <strong>{totalResults}</strong> trabajos
                    {textToFilter && ` para "${textToFilter}"`}
                </p>
                </div>
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
            </section>
        </main>
    </>
    )
}