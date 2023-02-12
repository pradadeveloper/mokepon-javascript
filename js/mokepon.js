const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('seleccionarMascota')

const botonReiniciar = document.getElementById('reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanvidasJugador = document.getElementById('vidas-jugador') 
const spanvidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let inputHypoge
let inputCapipego
let inputRatigueya
let MascotaJugador
let opcionDeMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0

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
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.webp',5)

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
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt=${mokepon.nombre}>
            </label>
        `;
        contenedorTarjetas.innerHTML += opcionDeMokepones;


        inputHypoge = document.getElementById('Hypoge')
        inputCapipego = document.getElementById('Capipego')
        inputRatigueya = document.getElementById('Ratigueya')
    });
    

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador (){
    sectionSeleccionarMascota.style.display = 'none'    
    sectionSeleccionarAtaque.style.display = 'flex'

    if( inputHypoge.checked){ 
            spanMascotaJugador.innerHTML = inputHypoge.id
            mascotaJugador =inputHypoge.id
        }else if(inputCapipego.checked){ 
                spanMascotaJugador.innerHTML = inputCapipego.id
                mascotaJugador =inputCapipego.id
        }else if(inputRatigueya.checked){
                spanMascotaJugador.innerHTML = inputRatigueya.id
                mascotaJugador =inputRatigueya.id
        }else{
            alert("NO SELECCIONASTE NINGÚN MOKEPON")
        }    
        extraerAtaques(mascotaJugador)
        seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques;
    for (let i = 0 ; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
        ataquesMokepon = 
        `<button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button> `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego = document.getElementById('seleccionarFuego')
    botonAgua = document.getElementById('seleccionarAgua')
    botonTierra = document.getElementById('seleccionarTierra')
    botones = document.querySelectorAll('.BAtaque')

    // botonFuego.addEventListener('click',ataqueFuego)
    // botonAgua.addEventListener('click',ataqueAgua)
    // botonTierra.addEventListener('click',ataqueTierra) 
}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click',(e)=>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disable = true
            } else if (e.target.textContent === '💧'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disable = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disable = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(){
    let mascotasAleatorio = aleatorio(0,mokepones.length-1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotasAleatorio].nombre
    ataquesMokeponEnemigo = mokepones[mascotasAleatorio].ataques
    secuenciaAtaque()
}


// function ataqueFuego(){
//     ataqueJugador = 'FUEGO'
//     ataqueAleatorioEnemigo()
// }
// function ataqueAgua(){
//     ataqueJugador = 'AGUA'
//     ataqueAleatorioEnemigo()
// }
// function ataqueTierra(){
//     ataqueJugador = 'TIERRA'
//     ataqueAleatorioEnemigo()
// }

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,ataquesMokeponEnemigo.length -1)

    if(ataqueAleatorio == 0 || ataqueAleatorio ==1){
        ataqueEnemigo.push('FUEGO')
    }else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push('AGUA')
    }else{
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)

    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length ===5){
        combate()
    }
}

function indexAmbosOponente(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
            if(ataqueJugador[index] === ataqueEnemigo[index]){
                indexAmbosOponente(index,index);
                crearMensaje("EMPATE");
            }else if(ataqueJugador[index]==="FUEGO" && ataqueEnemigo[index]==="TIERRA"){
                indexAmbosOponente(index,index)
                crearMensaje("GANASTE")
                victoriasJugador++;
                victoriasJugador.innerHTML = victoriasJugador;
            }else if(ataqueJugador[index]==="AGUA" && ataqueEnemigo[index]==="FUEGO"){
                indexAmbosOponente(index,index)
                crearMensaje("GANASTE")
                victoriasJugador++;
                victoriasJugador.innerHTML = victoriasJugador;
            }else if(ataqueJugador[index]==="TIERRA" && ataqueEnemigo[index]==="AGUA"){
                indexAmbosOponente(index,index);
                crearMensaje("GANASTE");
                victoriasJugador++;
                victoriasJugador.innerHTML = victoriasJugador;
            }else{
                indexAmbosOponente(index,index)
                crearMensaje("PERDISTE")
                victoriasEnemigo++;
                spanvidasEnemigo.innerHTML = victoriasEnemigo
            }
    }revisarVidas()
    // if(ataqueJugador == ataqueEnemigo){
    //     crearMensaje('EMPATE')
    // }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
    //     crearMensaje('GANASTE')
    //     vidasEnemigo--
    //     spanvidasEnemigo.innerHTML = vidasEnemigo
    // }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
    //     crearMensaje('GANASTE')
    //     vidasEnemigo--
    //     spanvidasEnemigo.innerHTML = vidasEnemigo
    // }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
    //     crearMensaje('GANASTE')
    //     vidasEnemigo--
    //     spanvidasEnemigo.innerHTML = vidasEnemigo
    // }else{
    //     crearMensaje('PERDISTE')
    //     vidasJugador--
    //     spanvidasJugador.innerHTML = vidasJugador
    // }
}

function revisarVidas(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate!!")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("Felicitaciones!!! Ganaste 😁😁😁😁")
    }else{
        crearMensajeFinal("Lo siento, perdiste :( huuuuuu")
    }
}

function crearMensaje(resultado){
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1)+min)
}

window.addEventListener('load',iniciarJuego)