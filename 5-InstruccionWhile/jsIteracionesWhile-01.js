/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/


//AUTOR:TEDESCO LAUTARO
//EJERCICIO:WHILE 1
function mostrar()
{
	
	var contadorDeVueltas;

	contadorDeVueltas=0;
	while(contadorDeVueltas<10)
	{	
		contadorDeVueltas=contadorDeVueltas+1;
		alert("Su numero es " + contadorDeVueltas);
		
	}
	 
	



}//FIN DE LA FUNCIÓN





	/*var contadorDeVueltas;

	contadorDeVueltas=0 //1 Inicio el valor
	while(contadorDeVueltas<10)// 2Logica del codigo
	{
		
		contadorDeVueltas=contadorDeVueltas+1; //3 modificacion de la logica
		console.log("Su numero es " + contadorDeVueltas);
	}



*/


	/*
	var respuesta;
	respuesta="si"; //parte 1
	while(respuesta=="si") // parte 2
	{
		respuesta=prompt("si para continuar");//3
	}
	*/



/*3 puntos para tener en cuenta con el while o con cualquier iteracion
3 partes del while 1- a la variable que evaluo en la logica le asigno un valor
2- lugar donse esta la logica el codigo
si esta mal escirta no entra nunca,*/

/*

var password;
	password=prompt("ingrese clave");//1 inicio el valor

	while(password!="holamundo")//2 logica
	{
		password=prompt("error ,ingrese clave"); //3 modificacion de la logica
	}
	alert("Bienvenido");//Se ejecuta cuando ingreso la contraseña correcta
	*/