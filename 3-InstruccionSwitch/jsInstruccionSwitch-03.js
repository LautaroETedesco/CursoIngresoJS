/*Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/




//AUTOR:LAUTARO TEDESCO
//EJERCICIO:SWITCH 3



function mostrar()
{
	var mesDelAnio;
	var mensaje1;
	var mensaje2;
	
	 

	mesDelAnio=document.getElementById("txtIdMes").value;
	mensaje1=("Este mes no tiene más de 29 días.");
	mensaje2=("Este mes tiene 30 o más días");

	
	switch(mesDelAnio)
	{
		case "Febrero":
			alert(mensaje1);
			break;
		default:
			alert(mensaje2);
			break;
	}


	


}//FIN DE LA FUNCIÓN