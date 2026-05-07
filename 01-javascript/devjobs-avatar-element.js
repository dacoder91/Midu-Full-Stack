// En este código, estamos creando un nuevo elemento personalizado llamado 'devjobs-avatar' que extiende la 
// clase HTMLElement.
class DevJobsAvatar extends HTMLElement {
    //Cuando extendemos una clase, siempre debemos llamar al constructor de la clase padre usando super() para asegurarnos
    //  de que el elemento se inicializa correctamente.
    constructor(){
        super();
        this.attachShadow({mode: "open"}) // esto es para crear un shadow DOM para nuestro elemento personalizado, 
        // lo que nos permite encapsular su estilo y estructura sin afectar al resto de la página. El modo "open" 
        // significa  que el shadow DOM es accesible desde JavaScript, lo que nos permitirá manipularlo si es necesario.  
    }

    createURL(service, username){
        return `https://unavatar.io/${service}/${username}`
    }

    // Aquí definimos un método llamado render que se encargará de renderizar el contenido del elemento personalizado. 
    // En este caso, estamos estableciendo el innerHTML del elemento para mostrar una imagen de avatar con una URL 
    // específica y una clase CSS llamada "avatar".
    render(){
        //usamos ?? (fusion nula) para darle un valor por defecto al ser el atributte NULL sino se indica nada.
        const service = this.getAttribute('service') ?? 'github' 
        const username = this.getAttribute('username') ?? 'dacoder91'
        const size = parseInt(this.getAttribute('size') ?? '40')

        const url = this.createURL(service, username)

        this.shadowRoot.innerHTML = `
            <img 
            src="${url}" 
            alt="Avatar de ${username}" 
            class="avatar"
            style="width: ${size}px; height: ${size}px; border-radius: 9999px;"
            />
        `
    }

    connectedCallback(){
        this.render()
    }

}

// definimos el nuevo elemento personalizado con el nombre 'devjobs-avatar' y la clase DevJobsAvatar que hemos creado. 
// Esto hará que podamos usar el elemento <devjobs-avatar> en nuestro HTML para mostrar un avatar personalizado.
customElements.define('devjobs-avatar', DevJobsAvatar) 