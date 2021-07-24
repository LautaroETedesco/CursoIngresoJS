/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

/*
Enunciado:
Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar la suma acumulada y el promedio.
*/
//AUTOR:LAUTARO TEDESCO
//EJERCICIO:WHILE 7
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	numeroIngresado=0;
	respuesta='si';

	while(respuesta=="si")
	{	
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("Escriba 'si' para continuar");
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
	}

	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN


/*
var respuesta;
	respuesta="si"; //parte 1
	while(respuesta=="si") // parte 2
	{
		respuesta=prompt("si para continuar");//3
	}
*/