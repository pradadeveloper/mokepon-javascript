let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('seleccionarMascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('seleccionarFuego')
    botonFuego.addEventListener('click',ataqueFuego)

    let botonAgua = document.getElementById('seleccionarAgua')
    botonAgua.addEventListener('click',ataqueAgua)

    let botonTierra = document.getElementById('seleccionarTierra')
    botonTierra.addEventListener('click',ataqueTierra) 

    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador (){
let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
sectionSeleccionarMascota.style.display = 'none'

let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
sectionSeleccionarAtaque.style.display = 'block'

let inputHypoge = document.getElementById("hypoge").checked
let inputCapipego = document.getElementById("capipego").checked
let inputRatigueya = document.getElementById("ratigueya").checked

let spanMascotaJugador = document.getElementById("mascota-jugador")


    if( inputHypoge){ 
            spanMascotaJugador.innerHTML = "Hypoge"

    }else if(inputCapipego){ 
            spanMascotaJugador.innerHTML = "Capipego"

    }else if(inputRatigueya){
            spanMascotaJugador.innerHTML = "Ratigueya"

    }else(alert("NO SELECCIONASTE NINGÚN MOKEPON"))
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotasAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

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
    let spanvidasJugador = document.getElementById('vidas-jugador') 
    let spanvidasEnemigo = document.getElementById('vidas-enemigo')

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
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ataqueJugador+', la mascota del enemigo atacó con '+ataqueEnemigo+ ' | '+resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('seleccionarFuego')
    botonFuego.disable = true
    let botonAgua = document.getElementById('seleccionarAgua')
    botonAgua.disable = true
    let botonTierra = document.getElementById('seleccionarTierra')
    botonTierra.disable = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load',iniciarJuego)