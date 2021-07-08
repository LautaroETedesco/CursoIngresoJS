/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres


var precioUno;
var precioDos;
var precioTres;
var suma;
var promedios;
var iva;
var iva2;



function Sumar () 
{

    precioUno=parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos=parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres=parseInt(document.getElementById("txtIdPrecioTres").value);


    suma=(precioUno)+(precioDos)+(precioTres);
	alert("La suma de los precios es " + suma);
}
function Promedio () 
{
	promedios=(suma)/(3);
    alert("El promedio de los precios es " + promedios);
}
function PrecioFinal () 
{
    iva=(suma)*(21)/(100);
    iva2=(suma+iva);
    
    alert("El precio final de los productos es " + iva2);
}