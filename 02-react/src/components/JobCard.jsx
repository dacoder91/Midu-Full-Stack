import { useState } from "react"

export function JobCard({job}){
    const [isApplied, setIsApplied] = useState(false)
                    //Aqui tenemos una const array, primer posicion es el valor actual, el segundo el que cambia el valor, 
                    // es igual a lo que indiquemos con useState

    function handleApplyClick(){
        setIsApplied(isApplied)
    }

    const buttonClasses = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'
    const buttonText = isApplied ? 'Aplicado' : 'Aplicar'

    return (
        <article 
            className="job-listing-card"
            data-modalidad ={job.data.modalidad}
            data-nivel ={job.data.nivel}
            data-technology = {job.data.technology}
        >
            <div>
                <h3>{job.titulo}</h3>
                <small>{job.empresa} | {job.ubicacion}</small>
                <p>{job.descripcion}</p>
            </div>
            <button 
            className={buttonClasses}
            disabled={isApplied}
            onClick={handleApplyClick}                                      
            >
                {buttonText}
            </button>
        </article>
    )
}
