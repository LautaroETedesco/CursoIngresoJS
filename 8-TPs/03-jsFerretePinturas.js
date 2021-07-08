/* AUTOR:TEDESCO LAUTARO
   EJERCICIO: TP3 E/2

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//txtIdTemperatura
function FahrenheitCentigrados () 
{	var temperatura;
	var tempCent;
	

	temperatura=document.getElementById("txtIdTemperatura").value;
	tempCent=(parseInt(temperatura)-32);
	alert(temperatura + (" Grados Fahrenheit son ") + tempCent + (" grados Centigrados"));

}

function CentigradosFahrenheit () 
{
	var temperatura;
	var tempfar;
	

	temperatura=document.getElementById("txtIdTemperatura").value;
	tempFar=(parseInt(temperatura)+32);
	alert(temperatura + (" Grados Centigrados son ") + tempFar + (" grados Fahrenheit"));

}
