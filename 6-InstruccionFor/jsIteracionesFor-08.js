/*Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
//AUTOR:LAUTARO TEDESCO
//EJERCICIO:FOR 8


function mostrar()
{


	var numeroIngresado;
	var contador;
	contador=0;
	numeroIngresado=parseInt(prompt("ingrese un numero"));


	for (var i=1; i<=numeroIngresado; i=i+1) 
	{ 	
		if(numeroIngresado % i == 0)
		{							
		contador=contador+1;
		
		}
	
		
	}
	if(contador==2)
	{
		alert("El numero " + numeroIngresado + " es primo");
	}
	else
	{
		alert("El numero " + numeroIngresado + " no es primo");
	}
	

}//FIN DE LA FUNCIÓN