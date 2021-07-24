/*Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/

//AUTOR:LAUTARO TEDESCO
//EJERCICIO: PARCIAL 4


function mostrar()
{
 var numeroIngresado1;
 var numeroIngresado2;
 var resultado;



 numeroIngresado1=prompt("Ingrese un numero");
 numeroIngresado2=prompt("Ingrese otro numero");
 
 if(numeroIngresado1==numeroIngresado2)
 {
 	resultado=numeroIngresado1+numeroIngresado2;
 }
 else
 {		

 	numeroIngresado1=parseInt(numeroIngresado1);
 	numeroIngresado2=parseInt(numeroIngresado2);
 	if(numeroIngresado1>numeroIngresado2)
 	{   
 		
 		resultado=(numeroIngresado1-numeroIngresado2);
 		if(resultado>10)
        {
        resultado="La resta es " + resultado + " y supero 10";
        }
 	}
 	else
 	{	
		resultado=(numeroIngresado2+numeroIngresado1);
 		
 	}
 	
 }
    alert(resultado)
}
