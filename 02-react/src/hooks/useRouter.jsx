import { useState,useEffect } from 'react'

export function useRouter(){
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handleLocationChange= () =>{
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handleLocationChange)

        return () =>{
            window.removeEventListener('popstate',handleLocationChange)}
            
    },[])

    function navigateTo(path){
        //pushState cambia la URL sin recargar pagina,Después de esto, la barra de direcciones muestra la nueva URL, 
        // pero la página no se recarga
        //Para que react se entere del cambio emitimos un evento
        window.history.pushState({},'',path)
        window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return{
        currentPath,
        navigateTo
    }
}