//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 8
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var estadoCivil;
	var edad;
	var mensaje;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById("estadoCivil").value;
	mensaje=("Es soltero y no es menor")

	if(edad>18 && estadoCivil=="Soltero")
	{
		alert(mensaje);
	}
	


}//FIN DE LA FUNCIÓN