/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

//ALUMNO:TEDESCO LAUTARO
//EJERCICIO: SWITCH 8


function mostrar()
{
	var destino;
	var mensaje1;
	var mensaje2;
	

	destino=document.getElementById("txtIdDestino").value;
	mensaje1=("En este lugar hace calor");
	mensaje2=("En este lugar hace frio");

	switch(destino)
	{
		case  "Cataratas":
		case "Mar del plata":
			alert(mensaje1);
			break;
		case "Bariloche":
		case "Ushuaia":
			alert(mensaje2);
			break;
	}

}//FIN DE LA FUNCIÓN