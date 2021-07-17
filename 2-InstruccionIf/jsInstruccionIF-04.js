//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 4

function mostrar()
{
	var edad;
	var mensaje1;
	


	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	mensaje1=("Eres adolescente");

	if(edad>=13 && edad<=17)
	{
		alert(mensaje1);
	}

}//FIN DE LA FUNCIÓN