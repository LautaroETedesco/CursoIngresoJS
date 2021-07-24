/*Enunciado:
Al selecionar un destino , indicar el punto cardinal de 
nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

//ALUMNO:TEDESCO LAUTARO
//EJERCICIO: SWITCH 7


function mostrar()
{
	var destino;
	

	destino=document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			alert("Usted se encuentra en el Oeste de Argentina");
			break;
		case  "Cataratas":
			alert("Usted se encuentra en el Norte de Argentina");
			break;
		case "Mar del plata":
			alert("Usted se encuentra en el Este de Argentina");
			break;
		case "Ushuaia":
			alert("Usted se encuentra en el Sur de Argentina");
			break;
	}
}//FIN DE LA FUNCIÓN