//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 7


/*Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero"
, mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/



function mostrar()
{
	var estadoCivil;
	var edad;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById("estadoCivil").value;
	mensaje=("Usted es muy pequeño para no ser soltero")

	if(edad>0 && edad<18 && estadoCivil!="Soltero")
	{
		alert(mensaje);
	}

	
	


}//FIN DE LA FUNCIÓN