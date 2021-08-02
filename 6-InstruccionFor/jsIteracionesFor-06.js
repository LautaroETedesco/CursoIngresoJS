/*Enunciado:
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/

//AUTOR:LAUTARO TEDESCO
//EJERCICIO: FOR 6




function mostrar()
{
	var numeroIngresado;
	var contador;
	contador=0;
	numeroIngresado=parseInt(prompt("ingrese un numero"));


	for (var i=1; i<=numeroIngresado; i=i+1) 
	{ 	
		if(i % 2 == 0)
		{							
		contador=contador+1;
		document.write(i + "</br>" );
		}
	
		
	}
	document.write("Se encontraron " + contador + " numeros pares");


}//FIN DE LA FUNCIÓN