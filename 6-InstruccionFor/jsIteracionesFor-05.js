/*Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/

//AUTOR:LAUTARO TEDESCO
//EJERCICIO: FOR 5




function mostrar()
{
	var numero;

	for (var i=0; i<100; i=i+1) 
	{ 	
									
		numero = prompt("ingrese un numero");
	
		if(numero=="9")
		{
			break;
		}

		alert("Usted ingreso el numero " + numero)
	}



}//FIN DE LA FUNCIÓN