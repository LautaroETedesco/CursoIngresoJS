/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

//AUTOR:TEDESCO LAUTARO
//EJERCICIO:WHILE 6


function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;


	
	contador=0;
	acumulador=0;

	while(contador<5)
	{	
		contador=contador+1;
		numeroIngresado=prompt("Ingrese su "+ contador + " numero");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN