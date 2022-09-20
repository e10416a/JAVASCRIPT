 //DESAFIO 1 - SIMULADOR INTERACTIVO */


let precioFinal = 0;
let opcionSistema = 0;
let valorDescuento = 0;
let precioProducto = 0;
let totalFacturado = [];

alert('Bienvenido al sistema de administracion general. \nA continuacion seleccione la operacion que desea realizar');


       


function operacionSistema(){
     opcionSistema = Number(prompt('Seleccione la operacion:\n A: -Facturar pedido\n B: -Ingresar Articulo al stock\n C: -Salir '));
            
        if(opcionSistema = "A"){

            precioProducto = Number(prompt('Ingrese el valor del producto a facturar, si desea finalizar la carga ingrese S'))
            while(precioProducto >0) {
                
                totalFacturado.push(precioProducto);
                precioProducto = Number(prompt('ingrese el valor del siguiente producto'));
                
            };

            if(precioProducto <=0 || isNaN(precioProducto)) {
                    alert('El valor ingresado no esta permitido por el sistema, si desea finalizar la');
            };
            
            
        }

        alert('usted a ingresado' + " " +  [totalFacturado])
};


function descuento() {

    if(precioFinal >=2000){
        valorDescuento = (precioFinal * 25) / 100; 
        precioFinal = precioFinal - valorDescuento;
        alert('Ha obtenido un 25% de descuento en el total de su compra!')
    }
    else{
        valorDescuento = (precioFinal * 15) / 100; 
        precioFinal = precioFinal - valorDescuento;
        alert('Ha obtenido un 15% de descuento en el total de compra!')
    }

    for(let index = 1; index <= totalFacturado.length; index++){
        precioFinal = precioFinal + totalFacturado[index];
        } 
        alert(precioFinal)

};

operacionSistema();
descuento();





console.log('El total de su compra es de $' + ' ' + precioFinal + ' ' + '. Su descuento fue de $' + ' ' + valorDescuento);
alert('El total de su compra es de $' + ' ' + precioFinal + ' ' + '. Su descuento fue de $' + ' ' + valorDescuento);

