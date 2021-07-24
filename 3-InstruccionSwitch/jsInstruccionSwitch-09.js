/*Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/


//ALUMNO:TEDESCO LAUTARO
//EJERCICIO: SWITCH 9


function mostrar()
{
	var estacion;
	var destino;
	var precio;
	var aumento;
	var descuento;
	var precioAumento;
	var precioDescuento;
	var precioFinal;


	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	precio=15000
	aumento=0
	descuento=0

	switch(destino)
	{
		case "Bariloche":
			switch(estacion)
			{
				case "Invierno":
					aumento=20;
					break;
				case "Verano":
					descuento=20;
					break;
				case "Otoño":
				case "Primavera":
					aumento=10;
					break;

			}
			break;
		case "Cataratas":
			switch(estacion)
			{
				case "Invierno":
					descuento=10;
					break;
				case "Verano":
					aumento=10;
					break;
				case "Otoño":
				case "Primavera":
					aumento=10;
					break;
			}
			break;
		case "Mar del plata":
			switch(estacion)
			{
				case "Invierno":
					descuento=20;
					break;
				case "Verano":
					aumento=20;
					break;
				case "Otoño":
				case "Primavera":
					aumento=10;
					break;
			}
			break;
		case "Cordoba":
			switch(estacion)
			{
				case "Invierno":
					descuento=10;
					break;
				case "Verano":
					aumento=10;
					break;
				
			}

	}

precioAumento=((precio*aumento)/100);
precioDescuento=((precio*descuento)/100);
precioFinal=(precio+precioAumento-precioDescuento);
alert("El precio de su viaje es $" + precioFinal);


}//FIN DE LA FUNCIÓN