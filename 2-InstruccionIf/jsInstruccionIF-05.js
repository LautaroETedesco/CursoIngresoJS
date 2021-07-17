//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 5

function mostrar()
{
	var edad;
	var mensaje1;
	


	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	mensaje1=("No eres adolescente");

	if(edad<13 || edad>17)
	{
		alert(mensaje1);
	}
}//FIN DE LA FUNCIÓN