/*Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!.
*/

//AUTOR:LAUTARO TEDESCO
//EJERCICIO:SWITCH 1
//NO USAR LA LETRA Ñ

function mostrar()
{
	var mesDelAnio;
	var mensaje1;
	var mensaje2;
	var mensaje3;
	var mensaje4;

	mesDelAnio=document.getElementById("txtIdMes").value;
	mensaje1=("Que comiences bien el año!!!");
	mensaje2=("A Clases!!!");
	mensaje3=("Se vienen las vacaciones!!!");
	mensaje4=("Felices Fiestas!!!");

	switch(mesDelAnio)
	{
		case "Enero":
			alert(mensaje1);
			break;
		case "Marzo":
			alert(mensaje2);
			break;
		case "Julio":
			alert(mensaje3);
			break;
		case "Diciembre":
			alert(mensaje4);
			break;
	}



}//FIN DE LA FUNCIÓN