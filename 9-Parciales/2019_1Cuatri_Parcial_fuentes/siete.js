/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) ,
el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de mujeres que su altura supere los 190 centimetros.
*/

//AUTOR:TEDESCO LAUTARO
//EJERCICIO: PARCIAL 7 2019
//SIGNO MENOR <
//SIGNO MAYOR >


function mostrar()
{
var altura;
var sexo;
var sumaAlturas=0;
var promedioAlturas=0;
var alturaMasBaja=0;
var sexoAlturaMasBaja;
var mujeresAltas;


for (var i = 0; i < 5 ; i=i+1) 
{   altura=prompt("Ingrese altura en centimetros (Entre 0 y 250)");
    altura=parseInt(altura);
    while(altura<0 || altura>250)
    {
        altura=prompt("Ingrese altura valida en centimetros (Entre 0 y 250)");
        altura=parseInt(altura);
    }
    sexo=prompt("Ingrese sexo (f o m) ")
    while(sexo!="f" && sexo !="m")
    {
        sexo=prompt("Ingrese un sexo valido (f o m)")
    }
    

 
if(altura>0)
{

sumaAlturas=sumaAlturas+altura;

}

if(altura<250)
{

    alturaMasBaja=altura;
    sexoAlturaMasBaja=sexo;

}
else
{
    if(altura<alturaMasBaja)
    {
        alturaMasBaja=altura;
        sexoAlturaMasBaja=sexo;
    }
}

}
promedioAlturas=sumaAlturas/i;
alert(promedioAlturas);
alert("La persona con la altura mas baja es " + alturaMasBaja + " y su sexo es " + sexoAlturaMasBaja);
}
