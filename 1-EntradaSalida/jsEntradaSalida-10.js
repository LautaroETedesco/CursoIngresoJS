/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	var importe;
	var descuento;
	var resultado;

	importe=parseInt(document.getElementById("txtIdImporte").value);
	descuento=(importe*25)/(100);
	resultado=(importe-descuento);

	(document.getElementById("txtIdResultado").value)=resultado;

}


/*
//EJERCICIO 10 BIS//
	var sueldo;
	var descuento;
	var resultado;
	var porcentaje;

	sueldo=parseInt(document.getElementById("txtIdImporte").value);

	porcentaje=prompt("Porcentaje a descontar:");

	descuento=(sueldo)*(parseInt(porcentaje)/100);

	resultado=(sueldo-descuento);

	(document.getElementById("txtIdResultado").value)=resultado;
	*/
