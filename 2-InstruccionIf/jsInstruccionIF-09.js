//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 9
/*Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	var numero;
	var mensaje;

	
	numero=parseInt(Math.random()*10+1);

	mensaje=("Su numero es " + numero);
	
	
	alert(mensaje);	

}//FIN DE LA FUNCIÓN