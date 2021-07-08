/*
AUTOR:LAUTARO TEDESCO
EJERCICIO: TP 2


2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//txtIdLargo
//txtIdAncho
//txtIdRadio

function Rectangulo () 
{
	var largo;
	var ancho;
	var suma;
	var perimetro;
	var alambre;

	largo=parseInt(document.getElementById("txtIdLargo").value);
	ancho=parseInt(document.getElementById("txtIdAncho").value);
	suma=(largo)+(ancho);
	perimetro=suma*2
	alambre=perimetro*3
	alert("La cantidad de alambre a comprar es " + alambre + " metros")
}
function Circulo () 
{
	var radio;
	var pi;
	var circunferencia;
	var diametro;
	var alambre;

	radio=parseInt(document.getElementById("txtIdRadio").value);
	pi=3,14;
	diametro=(radio*2);
	circunferencia=(pi*diametro);
	alambre=circunferencia*3
	alert("La cantidad de alambre a comprar es " + alambre + " metros");
}

function Materiales () 
{
	var largo;
	var ancho;
	var superficie;
	var cantidadCal;
    var cantidadCemento;
    var mensaje;

	largo=parseInt(document.getElementById("txtIdLargo").value);
	ancho=parseInt(document.getElementById("txtIdAncho").value);
	superficie=(largo*ancho);
	cantidadCemento=(superficie*2);
	cantidadCal=(superficie*3);
	mensaje=("se necesitan " + cantidadCemento + " bolsas de cemento y " + cantidadCal + " bolsas de cal")

	alert (mensaje);
}