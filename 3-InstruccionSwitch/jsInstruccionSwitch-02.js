/*Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

//AUTOR:LAUTARO TEDESCO
//EJERCICIO:SWITCH 2






function mostrar()
{
	var mesDelAnio;
	var mensaje1;
	var mensaje2;
	var mensaje3;
	 

	mesDelAnio=document.getElementById("txtIdMes").value;
	mensaje1=("Abrigate que hace frio.");
	mensaje2=("Falta para el invierno.");
	mensaje3=("Ya pasamos el frio, ahora calor!!!.");
 

	switch(mesDelAnio)
	{
		case "Julio":
		case "Agosto":
			alert(mensaje1);
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert(mensaje3);
			break;
		default:
			alert(mensaje2);
			break;


	
	}



}//FIN DE LA FUNCIÓN