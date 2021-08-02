/*Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

//AUTOR:LAUTARO TEDESCO
//EJERCICIO: FOR 3


function mostrar()
{

	var repeticiones = prompt("ingrese el número de repeticiones");
	

	for (var i=repeticiones; i>0; i=i-1) 
	{ 	
									
		document.write("Hola UTN FRA" + "</br>" );
		
	}


}//FIN DE LA FUNCIÓN