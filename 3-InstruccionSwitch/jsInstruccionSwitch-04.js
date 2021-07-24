/*Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/



//AUTOR:LAUTARO TEDESCO
//EJERCICIO:SWITCH 4


function mostrar()
{
	var mesDelAnio;
	var mensaje1;
	var mensaje2;
	var mensaje3;
	 

	mesDelAnio=document.getElementById("txtIdMes").value;
	mensaje1=("Este tiene 28 dias");
	mensaje2=("Este mes tiene 30 dias");
	mensaje3=("Este mes tiene 31 dias");
 

	switch(mesDelAnio)
	{
		case "Febrero":
			alert(mensaje1);
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert(mensaje2);
			break;
		default:
			alert(mensaje3);
			break;
	}


}//FIN DE LA FUNCIÓN