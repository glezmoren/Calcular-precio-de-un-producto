'use strict'

function respuesta_evento(){
    console.log('Clic')
    let nodoValor = document.querySelector( '#valor' );
    console.log(nodoValor);
    let valorValor= Number(nodoValor.value);
    console.log ( valorValor );

    //BASE
    let base = valorValor;

    pintarWeb(base , '#base');

    //IVA
    function IVA(){
        let iva = valorValor * 0.21;
        return iva
    }
    
    pintarWeb(IVA(), '#impuesto');

    //GASTOS
    function envio(){
        if(valorValor < 50){
            let gastos = 10
            pintarWeb(gastos , '#gastos');
            return gastos
        }else{
            let gastos = 0
            pintarWeb(gastos , '#gastos');
            return gastos
        }
    }

    //SUMA
    let total = ( base + IVA()+ envio()).toFixed(2);
    pintarWeb(total , '#total');
}

function pintarWeb(mensaje, identificador){
    let nodoDatos = document.querySelector ( identificador );
    console.log( nodoDatos );
    nodoDatos.innerHTML = mensaje;
}

// function IVA(){
//     let iva = valorValor * 0.21;
//     return iva
// }