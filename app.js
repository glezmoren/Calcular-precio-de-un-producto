'use strict'

function respuesta_evento(){
    console.log('Clic')
    let nodoValor = document.querySelector( '#valor' );
    console.log(nodoValor);
    let valorValor= Number(nodoValor.value);
    console.log ( valorValor );

}