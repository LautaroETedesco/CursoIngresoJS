//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 6

function mostrar()
{
	var edad;
	var mensaje1;
	var mensaje2;
	var mensaje3;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	mensaje1=("Usted es mayor de edad");
	mensaje2=("Usted es adolescente");
	mensaje3=("Usted es un niño");

	
	if(edad<13 && edad>=1)
	{
		alert(mensaje3);
	}
	else
	{	

		if(edad>=13 && edad<=17)
		{
		alert(mensaje2);
		}
		else
		{
		alert(mensaje1);
		}

			
	}
	
	//tomo la edad  
	



}//FIN DE LA FUNCIÓN