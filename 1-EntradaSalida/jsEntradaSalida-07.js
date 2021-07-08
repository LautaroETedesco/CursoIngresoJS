/* AUTOR:TEDESCO LAUTARO
  EJERCICIO:E/S 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
	var num2;
	var resultado;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=num1+num2
	mensaje=("La suma es "+ resultado)


	alert(mensaje);	
}

function restar()
{
	var num1;
	var num2;
	var resultado;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=num1-num2
	mensaje=("La resta es "+ resultado)


	alert(mensaje);	
}

function multiplicar()
{ 
	var num1;
	var num2;
	var resultado;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=num1*num2
	mensaje=("La multiplicacion es "+ resultado)


	alert(mensaje);	
}

function dividir()
{
	var num1;
	var num2;
	var resultado;
	var mensaje;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);
	num2=parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado=num1/num2 
	mensaje=("La divicion es "+ resultado)


	alert(mensaje);	
	
}

