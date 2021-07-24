/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

/*Enunciado:
1. Adivina el número (v 1.0): Al comenzar el juego generamos un número secreto del 1 al 100,
en la pantalla del juego dispondremos de un cuadro de texto para ingresar un número y un botón “Verificar”,
si el número ingresado es el mismo que el número secreto se dará por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”. de no ser igual se debe informar si “falta…” para llegar al número secreto 
o si “se pasó…” del número secreto.
*/

//AUTOR:LAUTARO TEDESCO
//EJERCICIO: TP5 ADIVINA EL NUMERO 1

var numeroSecreto;
var numeroIngresado;
var contador;



function comenzar()
{
	numeroSecreto=parseInt(Math.random()*100+1);
	contador=0;
	console.log(numeroSecreto);
}

function verificar()
{
	contador=contador+1;
	numeroIngresado=document.getElementById("txtIdNumero").value;
	document.getElementById("txtIdIntentos").value=contador;

	if(numeroSecreto==numeroIngresado)
	{
		alert("Usted es un ganador!!! y en solo " + contador + " intentos");
	}
	else
	{
		if(numeroSecreto>numeroIngresado)
		{
			alert("A usted le falta para llegar al numero secreto");
		}
		else
		{
			alert("Usted se paso del numero secreto");
		}

		
	}

	
}