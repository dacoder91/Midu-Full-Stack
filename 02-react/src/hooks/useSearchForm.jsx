import { useState } from "react"

export function useSearchForm({ onSearch, onTextFilter, technologyId, locationId, experienceId}){
    
    const [searchText, setSearchText] = useState("")
    const handleSubmit = (event) => {
        
        event.preventDefault()

        const formData = new FormData(event.currentTarget) 

        const filters = {
            technology: formData.get(technologyId),
            location: formData.get(locationId),
            experienceLevel: formData.get(experienceId),
        }
        onSearch(filters)
    }

    const handleTextChange = (event) =>{
        const text = event.target.value
        setSearchText(text)
        onTextFilter(text)


}

    return{
        handleSubmit,
        handleTextChange
    }
}