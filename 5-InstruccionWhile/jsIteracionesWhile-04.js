/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

//AUTOR:TEDESCO LAUTARO
//EJERCICIO:WHILE 4


function mostrar()
{
	var numeroIngresado;
	numeroIngresado=prompt("ingrese un número entre 0 y 9.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado=prompt("ingrese un número valido entre 0 y 9.");
	}

	txtIdNumero.value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN