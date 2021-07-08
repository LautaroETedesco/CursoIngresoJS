/* AUTOR:TEDESCO LAUTARO
   EJERCICIO:E/S 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	var nombre;
	var mensaje;
	nombre=prompt("Ingresa Su Nombre");
	mensaje="Su nombre es:"+nombre;
	document.getElementById("txtIdNombre").value=mensaje; 
}

