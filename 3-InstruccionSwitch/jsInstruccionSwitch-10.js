/*Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/

//ALUMNO: TEDESCO LAUTARO
//EJERCICIO: SWITCH 10


function mostrar()
{
	var estacion;
	var destino;
	var mensaje1;
	var mensaje2;

	estacion=document.getElementById("txtIdEstacion").value;
	destino=document.getElementById("txtIdDestino").value;
	mensaje1=("No se viaja");
	mensaje2=("Se viaja");

	switch(destino)
	{
		case "Bariloche":
			switch(estacion)
			{
				case "Invierno":
					alert(mensaje2);
					break;
				case "Verano":
					alert(mensaje1);
					break;
				case "Primavera":
					alert(mensaje1);
					break;
				case "Otoño":
					alert(mensaje1);
					break;

			}
			break;
		case "Cataratas":
		case "Mar del plata":
			switch(estacion)
			{
				case "Invierno":
					alert(mensaje1);
					break;
				case "Verano":
					alert(mensaje2);
					break;
				case "Primavera":
					alert(mensaje2);
					break;
				case "Otoño":
					alert(mensaje2);
					break;
			}
			break;
		case "Cordoba":
			switch(estacion)
			{
				case "Invierno":
					alert(mensaje1);
					break;
				case "Verano":
					alert(mensaje1);
					break;
				case "Primavera":
					alert(mensaje2);
					break;
				case "Otoño":
					alert(mensaje2);
					break;
			}
			break;
	}


}//FIN DE LA FUNCIÓN