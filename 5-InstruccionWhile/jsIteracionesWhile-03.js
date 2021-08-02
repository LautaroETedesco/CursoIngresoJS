/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

//AUTOR:TEDESCO LAUTARO
//EJERCICIO:WHILE 3



function mostrar()
{
	var clave;
	clave=prompt("ingrese clave");

	while(clave!="utn750")
	{
		clave=prompt("error ,ingrese clave");
	}
	alert("Bienvenido");
	
}//FIN DE LA FUNCIÓN



/*
	var clave;
	clave=prompt("ingrese clave");//1 inicio el valor

	while(clave!="utn750")//2 logica
	{
		clave=prompt("error ,ingrese clave"); //3 modificacion de la logica
	}
	alert("Bienvenido");//Se ejecuta cuando ingreso la contraseña correcta
*/