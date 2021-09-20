/*Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil
("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

//ALUMNO TEDESCO LAUTARO
//PARCIAL 2021 3







function mostrar() {

	var respuesta = "si";
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var mayorTemperaturaCorporal;
	var banderaTemperaturaCorporal = true;
	var nombreMayorTemperaturaCorporal;
	var contadorMayoresDeEdadViudos = 0;
	var contadorHombresSolterosYViudos = 0;
	var contadorViejosTemperaturaAlta = 0;
	var contadorHombresSolteros = 0;
	var acumuladorEdadHombresSolteros = 0;
	var promedioEdadHombresSolteros;



	while (respuesta == "si") {
		nombre = prompt("Ingrese su nombre");
		edad = prompt("Ingrese se edad (Entre 0 y 100)");
		edad = parseInt(edad);
		while (edad < 0 || edad > 100) {
			edad = prompt("Error, Ingrese se edad (Entre 0 y 100)");
		}
		sexo = prompt("Ingrese su sexo");
		while (sexo != "F" && sexo != "M") {
			sexo = prompt("Error, Ingrese su sexo (F o M)");
		}
		estadoCivil = prompt("Ingrese su estado civil");
		while (estadoCivil != "Casado" && estadoCivil != "Soltero" && estadoCivil != "Viudo") {
			estadoCivil = prompt("Error, Ingrese su estado civil (Soltero o Casado o Viudo)");
		}
		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		while (temperaturaCorporal < 33 || temperaturaCorporal > 43) {
			temperaturaCorporal = prompt("Error, Ingrese su temperatura corporal entre 34 y 42");
		}
		respuesta = prompt("Desea continuar?")


		if (temperaturaCorporal > 0 && banderaTemperaturaCorporal == true) {
			banderaTemperaturaCorporal = false;
			mayorTemperaturaCorporal = temperaturaCorporal;
			nombreMayorTemperaturaCorporal = nombre;

		} else {
			if (mayorTemperaturaCorporal < temperaturaCorporal) {
				mayorTemperaturaCorporal = temperaturaCorporal;
				nombreMayorTemperaturaCorporal = nombre;
			}
		}

		if (edad > 17 && estadoCivil == "Viudo") {
			contadorMayoresDeEdadViudos = contadorMayoresDeEdadViudos + 1;
		}

		if (estadoCivil == "Soltero" || estadoCivil == "Viudo" && sexo == "M") {
			contadorHombresSolterosYViudos = contadorHombresSolterosYViudos + 1;
		}

		if (edad > 59 && temperaturaCorporal > 38) {
			contadorViejosTemperaturaAlta = contadorViejosTemperaturaAlta + 1;
		}

		switch (estadoCivil) {
			case "Soltero":
				contadorHombresSolteros = contadorHombresSolteros + 1;
				acumuladorEdadHombresSolteros = acumuladorEdadHombresSolteros + edad;
				promedioEdadHombresSolteros = acumuladorEdadHombresSolteros / contadorHombresSolteros;
				break;
		}
	}


	alert("La persona con mayor temperatura corporal es " + nombreMayorTemperaturaCorporal);
	alert("Hay " + contadorMayoresDeEdadViudos + " mayores de edad viudos");
	alert("Hay " + contadorHombresSolterosYViudos + " hombres solteros o viudos");
	alert("Hay " + contadorViejosTemperaturaAlta + " personas de la tercera edad con mas de 38° de temperatura corporal");
	alert("El promedio de edad de los hombres solteros es de " + promedioEdadHombresSolteros);




}
