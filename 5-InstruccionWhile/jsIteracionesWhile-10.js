/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

//AUTOR:TEDESCO LAUTARO
//EJERCICIO WHILE 10

//Signo mayor > 
//Signo menor <
function mostrar() {
	//declarar contadores y variables 
	var respuesta = "si";
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadNumerosPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var DiferenciaPositivosNegativos = 0;



	while (respuesta == "si") 
	{
		numeroIngresado = prompt("Ingrese un numero : ")
		numeroIngresado = parseInt(numeroIngresado);
		respuesta = prompt("desea continuar?");

		if (numeroIngresado < 0) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			cantidadNegativos = cantidadNegativos + 1;
			promedioNegativos = sumaNegativos / cantidadNegativos;
		}
		else 
		{
			if (numeroIngresado > 0) 
			{
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos = cantidadPositivos + 1;
				promedioPositivos = sumaPositivos / cantidadPositivos;
			}
			else 
			{
				if (numeroIngresado == 0) 
				{
					cantidadCeros = cantidadCeros + 1;
				}




			}
		}
		if(numeroIngresado % 2 == 0)
				{
					cantidadNumerosPares=cantidadNumerosPares+1;
				}
	}//fin del while




	DiferenciaPositivosNegativos = sumaPositivos + sumaNegativos;






	document.write("Suma Positivos " + sumaPositivos + "</br>" + "Suma Negativos " + sumaNegativos + "</br>" +
	"Cantidad Positivos " + cantidadPositivos + "</br>" + "Cantidad Negativos " + cantidadNegativos + "</br>" +
	"Cantidad Ceros " + cantidadCeros + "</br>" + "Promedio Positivos " + promedioPositivos + "</br>" +
	"Promedio negativos " + promedioNegativos + "</br>" + "Cantidad Numeros Pares " + cantidadNumerosPares + "</br>"
	+ "Diferencia entre Positivos y Negativos " + DiferenciaPositivosNegativos);
	
}//FIN DE LA FUNCIÓN