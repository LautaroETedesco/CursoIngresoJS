/* AUTOR=TEDESCO LAUTARO
   EJERCICIO= E/S 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;
	var mensaje;

	dividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor=parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resultado=dividendo%divisor
	mensaje=("El resto es "+ resultado)

	alert(mensaje)


}
