const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('seleccionarMascota')
const botonFuego = document.getElementById('seleccionarFuego')
const botonAgua = document.getElementById('seleccionarAgua')
const botonTierra = document.getElementById('seleccionarTierra')
const botonReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHypoge = document.getElementById("hypoge")
const inputCapipego = document.getElementById("capipego")
const inputRatigueya = document.getElementById("ratigueya")
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanvidasJugador = document.getElementById('vidas-jugador') 
const spanvidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hypoge = new Mokepon('Hypoge','./assets/mokepons_mokepon_hipodoge_attack.webp',5)
let capipego = new Mokepon('Capipego','./assets/mokepons_mokepon_capipepo_attack.webp',5)
let ratigueya = new Mokepon('ratigueya','./assets/mokepons_mokepon_ratigueya_attack.webp',5)

hypoge.ataques.push(
    { nombre:'💧', id:'seleccionarAgua' },
    { nombre:'💧', id:'seleccionarAgua' },
    { nombre:'💧', id:'seleccionarAgua' },
    { nombre:'🌱', id:'seleccionarTierra' },
    { nombre:'🔥', id:'seleccionarFuego' },
)

capipego.ataques.push(
    { nombre:'🌱', id:'seleccionarTierra'},
    { nombre:'🌱', id:'seleccionarTierra'},
    { nombre:'🌱', id:'seleccionarTierra'},
    { nombre:'💧', id:'seleccionarAgua' },
    { nombre:'🔥', id:'seleccionarFuego' },
)

ratigueya.ataques.push(
    { nombre:'🔥', id:'seleccionarFuego' },
    { nombre:'🔥', id:'seleccionarFuego' },
    { nombre:'🔥', id:'seleccionarFuego' },
    { nombre:'🌱', id:'seleccionarTierra' },
    { nombre:'💧', id:'seleccionarAgua' },
)
mokepones.push(hypoge, capipego, ratigueya);


function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        const opcionDeMokepones = `
            <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `;
        contenedorTarjetas.innerHTML += opcionDeMokepones;
    });
    

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra) 

    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador (){
    sectionSeleccionarMascota.style.display = 'none'    
    sectionSeleccionarAtaque.style.display = 'flex'

    if( inputHypoge.checked){ 
            spanMascotaJugador.innerHTML = "Hypoge"
        }else if(inputCapipego.checked){ 
                spanMascotaJugador.innerHTML = "Capipego"
        }else if(inputRatigueya.checked){
                spanMascotaJugador.innerHTML = "Ratigueya"
        }else{
            alert("NO SELECCIONASTE NINGÚN MOKEPON")}
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotasAleatorio = aleatorio(1,3)

    if(mascotasAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hypoge'
    }else if (mascotasAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipego'
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}


function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo  = 'AGUA'
    }else{
        ataqueEnemigo  = 'TIERRA'
    }

    combate()

}

function combate(){
    

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje('EMPATE')
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE')
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje('PERDISTE')
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones!!! Ganaste 😁😁😁😁")
    }else if(vidasJugador == 0){
        crearMensajeFinal("Perdiste 😒😒😒😒😒, siguelo intentando")
    }
}

function crearMensaje(resultado){
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disable = true
    botonAgua.disable = true
    botonTierra.disable = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load',iniciarJuego)