/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

//AUTOR:TEDESCO LAUTARO
//EJERCICIO:WHILE 5



function mostrar()
{
	var sexoIngresado;
	sexoIngresado=prompt("Ingrese un sexo F o M");
	while(sexoIngresado!="F" && sexoIngresado!="M")
	{
		sexoIngresado=prompt("Ingrese un sexo valido");
	}
	
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN