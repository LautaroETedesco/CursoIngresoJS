/*
EJERCICIO 2 CURSO DE INGRESO
Se requiere ingresar el nombre, edad, la vacuna(validad "astrazeneca", "sinopharm" o "sputnik" ) y si contrajo covid de los ciudadanos 
que se vacunan en un centro de salud. Una vez que el usuario no tiene más ciudadanos que ingresar 
se debe reportar
a)	El nombre de la persona más joven que se dio sputnik
b)	El porcentaje de jóvenes que tuvieron la enfermedad
c)	El promedio de edad 
d)  La vacuna más veces aplicada
*/

//ALUMNO TEDESCO LAUTARO
//EJERCICIO 2 
function mostrar() {
	var respuesta = "si";
	var nombre;
	var edad;
	var vacuna;
	var covidioso;
	var edadPersonaMasJoven;
	var nombrePersonaMasJoven;
	var banderaPersonaMasJoven=true;
	var contadorCovidJoven=0;
	var contadorCovidViejo=0;
	var contadorCovidTotal;
	var porcentajeCovidJoven;
	var acumuladorEdad=0;
	var contadorTotal=0;
	var promedioEdad;
	var contadorSputnik=0;
	var contadorAstrazeneca=0;
	var contadorSinopharm=0;
	var vacunaMasAplicada;

	while (respuesta == "si") {
		nombre = prompt("Ingrese su nombre");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while (edad < 0 || edad > 100) {
			edad = prompt("Error, Ingrese su edad (0 a 100) ");
			edad = parseInt(edad);
		}
		vacuna = prompt("Ingrese la vacuna aplicada");
		while (vacuna != "astrazeneca" && vacuna != "sinopharm" && vacuna != "sputnik") {
			vacuna = prompt("Error, Ingrese la vacuna aplicada (astrazeneca, sinopharm o sputnik)");
		}

		covidioso = prompt("Usted tuvo covid?")
		while (covidioso != "no" && covidioso != "si") {
			covidioso = prompt("Error, Ingrese una respuesta valida (si o no)")
		}
		respuesta = prompt("Desea continuar?")

		if(edad>0 && banderaPersonaMasJoven==true)
		{
			banderaPersonaMasJoven=false;
			edadPersonaMasJoven=edad;
			nombrePersonaMasJoven=nombre;

		}else
		{
			if(edadPersonaMasJoven>edad)
			{
				edadPersonaMasJoven=edad;
				nombrePersonaMasJoven=nombre;
			}
		}
		switch(covidioso)
		{
			case "si":
				if(edad<19)
				{
					contadorCovidJoven=contadorCovidJoven+1;
				}
				else
				{
					contadorCovidViejo=contadorCovidViejo+1;
				}
			
			break;
		}

		acumuladorEdad=acumuladorEdad+edad;
		contadorTotal=contadorTotal+1;

		switch(vacuna)
		{
			case"astrazeneca":
			contadorAstrazeneca=contadorAstrazeneca+1;
			break;
			case"sinopharm":
			contadorSinopharm=contadorSinopharm+1;
			break;
			case"sputnik":
			contadorSputnik=contadorSputnik+1;
			break;

		}
		if(contadorSputnik>contadorSinopharm && contadorSputnik>contadorAstrazeneca)
		{
			vacunaMasAplicada="Sputnik";
		}else
		{
			if(contadorSinopharm>contadorSputnik && contadorSinopharm>contadorAstrazeneca)
			{
				vacunaMasAplicada="Sinopharm";
			}else
			{
				if(contadorAstrazeneca>contadorSputnik && contadorAstrazeneca>contadorSinopharm)
				{
					vacunaMasAplicada="Astrazeneca"
				}
			}
		}
	}
	
	contadorCovidTotal=contadorCovidViejo+contadorCovidJoven;
	porcentajeCovidJoven=contadorCovidJoven*100/contadorCovidTotal;
	promedioEdad=acumuladorEdad/contadorTotal;

	alert("La persona mas joven que se aplico sputnik se llama " + nombrePersonaMasJoven);
	alert("El porcentaje de jovenes que tuvieron covid es de " + porcentajeCovidJoven + " porciento");
	alert("El promedio de edad total es " + promedioEdad);
	alert("La vacuna mas aplicada es " + vacunaMasAplicada);
}

