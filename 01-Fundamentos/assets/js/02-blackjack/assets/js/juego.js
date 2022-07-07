const miModulo = (() => {
    'use strict'
    let     deck          = [];
    const   tipos         = ['C','D','H','S'],
            especiales    = ['A','J','Q','K'];

    let puntosJugadores=[];
    //haciendo referencia a document y guardando en una variable

    const   btnPedir = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevo = document.querySelector('#btnNuevo'),
            divCartasJugador = document.querySelectorAll('.divCartas'),
            small = document.querySelectorAll('small');
            


/** Esta función inicializa el juego */
    const inicializarJuego = (numJugadores=2) =>{
        deck = crearDeck();
        puntosJugadores=[];
        
        
        for(let i=0;i<numJugadores;i++){
            puntosJugadores.push(0);
        }
        
        small.forEach( elemento => elemento.innerText=0);
        divCartasJugador.forEach(elemento=>elemento.innerText='  ');
        btnDetener.disabled=false;
        btnPedir.disabled=false;
    }
    
    //creando una baraja
    const crearDeck = () => {
        deck=[];
        for (let i=2; i<=10 ; i++) {
            for (let tipo of tipos){
                deck.push(i+tipo)
            }
        }

        for (let especial of especiales){
            for(let tipo of tipos){
                deck.push(especial+tipo);
            }
        }
        return (_.shuffle(deck));
    };



    // Función para sacar carta
    const pedirCarta = () => {
        if(deck.length === 0){
            throw 'Ya no hay cartas';
        }
        /*
        * la función shift saca el primer elemento del array
        * y disminuye su largo
        */
        return deck.shift();
    }

    const valorCarta = (carta) =>{
        const valor = carta.slice(0,carta.length-1);
        return isNaN (valor) ? 
                    (valor === 'A') ? 11 : 10 
                        : valor*1
                        ;
    }

    /*** Turo computadora */
    /**Turo: 0->primer jugador, últmo->computadora */
    const acumularPuntos=(turno,carta)=>{
        puntosJugadores[turno] = puntosJugadores[turno]+valorCarta(carta);
        console.log(puntosJugadores[turno]);
        small[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }


    const crearCarta = (carta, turno) =>{
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador[turno].append(imgCarta);
        
    }

    const determinarGanador = () =>{
        const [puntosJugador,puntosPC] = puntosJugadores;
        if (puntosJugador===puntosPC){
            console.warn('Gana: Nadie');
        }else if(puntosPC>21){
            console.warn('Gana: Persona');
        }else if(puntosJugador>21){
            console.warn('Gana: PC');
        }else if(puntosPC>puntosJugador){
            console.warn('Gana: PC');
        }else{
            console.warn('Gana: Persona');
        }
    }

    /**------------ */
    const turnoComputadora = (puntosMinimos) => {
        let puntosPC = 0;
        do{
            let carta = pedirCarta();
            puntosPC = acumularPuntos(puntosJugadores.length-1,carta);
            crearCarta(carta,puntosJugadores.length-1);

            if(puntosMinimos>21){
                break;
            }puntosPC

        }while((puntosPC<puntosMinimos)&&(puntosMinimos<=21));
        
        determinarGanador();
    }

    //**eventos***/
    btnPedir.addEventListener('click',()=>{
        let carta = pedirCarta();
        let puntosJugador = acumularPuntos(0,carta);
        crearCarta(carta,0);

        if (puntosJugador>21){            
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador===21){
            console.warn('Genial');
            turnoComputadora(puntosJugador);
            btnDetener.disabled = true;
        }

    });

    btnDetener.addEventListener('click', () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    }
    )

    btnNuevo.addEventListener('click',() => {
        
        inicializarJuego();
        
    }  
    );

    return {
        nuevoJuegoEnIndex : inicializarJuego
    };

})();




