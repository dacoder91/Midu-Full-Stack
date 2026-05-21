import { useRouter } from "../hooks/useRouter"
//Hacemos cque component : Component(renombramos) porque en jsx componentes son en mayusculas
export function Route( { path, component : Component}){
    const {currentPath} = useRouter()

    if(currentPath != path){ 
        return null
    }

    return <Component />
}