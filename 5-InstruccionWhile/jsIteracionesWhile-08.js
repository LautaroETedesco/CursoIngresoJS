/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

//AUTOR:TEDESCO LAUTARO
//EJERCICIO:WHILE 8
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=="si")
	{	
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("Escriba 'si' para continuar");
		contador=contador+1;
		if(numeroIngresado>=0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
		}
		else
		{
			if(numeroIngresado<0)
			{
				
				multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;

			}
		}
	}




	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN


