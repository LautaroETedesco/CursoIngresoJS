/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

//signo menor <
//signo mayor > 

//AUTOR:TEDESCO LAUTARO
//EJERCICIO:WHILE 9

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	var banderaDelPrimerNegativo;
	//iniciar variables
	banderaDelPrimero="es el primero";
	banderaDelPrimerNegativo="es el primer negativo"
	respuesta='si';
	numeroMaximo=0;
	numeroMinimo=0;
	
	while(respuesta=="si")
	{	
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("Escriba 'si' para continuar");
		if(numeroIngresado>numeroMaximo && banderaDelPrimero=="es el primero")
		{	
			banderaDelPrimero="Ya no es el primero"
			numeroMaximo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado>numeroMinimo && banderaDelPrimerNegativo=="es el primer negativo")
				{
					numeroMinimo=numeroIngresado;

				}
				else
				{
					if(numeroIngresado<numeroMinimo)
					{
						numeroMinimo=numeroIngresado;
					}
				}
			}
			
		}
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN