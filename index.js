/* DESAFIO 1 - SIMULADOR INTERACTIVO */


let precioFinal = 0;
let precioProducto = 0;
let valorDescuento = 0;

alert('Ingrese a continuación, los valores de los productos a facturar');


function ingresoProducto(){
    precioProducto = Number(prompt('ingrese el valor del producto'));
        while(precioProducto >0) {

            precioFinal = precioFinal + precioProducto;
            precioProducto = Number(prompt('ingrese el valor del siguiente producto'));
        };

        if(precioProducto <=0 || isNaN(precioProducto)) {
                console.log('El valor ingresado no corresponde a lo solicitado se finaliza la carga de prodcutos');
        };
           
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

};

ingresoProducto();
descuento();




console.log('El total de su compra es de $' + ' ' + precioFinal + ' ' + '. Su descuento fue de $' + ' ' + valorDescuento);
alert('El total de su compra es de $' + ' ' + precioFinal + ' ' + '. Su descuento fue de $' + ' ' + valorDescuento);
