//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 3

function mostrar()
{
	var edad;
	var mensaje1;
	var mensaje2;


	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	mensaje1=("Eres mayor de edad");
	mensaje2=("Eres menor de edad");

	if(edad>=18)
	{
		alert(mensaje1);
	}
	else
	{
	 	alert(mensaje2);	
	}
}//FIN DE LA FUNCIÓN