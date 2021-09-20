/*Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

//ALUMNO TEDESCO LAUTARO
//PARCIL 2020 1


function mostrar() {

	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var fabricanteJabonMasCaro;
	var cantidadJabonMasCaro;
	var banderaJabonMasCaro = true;
	var acumuladorAlcohol = 0;
	var acumuladorJabon = 0;
	var acumuladorBarbijo = 0;
	var contadorAlcohol = 0;
	var contadorJabon = 0;
	var contadorBarbijo = 0;
	var promedioAlcohol;
	var promedioJabon;
	var promedioBarbijo;
	var banderaAlcohol = true;
	var banderaBarbijo = true;
	var banderaJabon = true;
	


	for (var i = 0; i < 5; i = i + 1) {

		tipo = prompt("Ingrese el tipo de producto (Jabon o Alcohol o Barbijo)");
		while (tipo != "Jabon" && tipo != "Alcohol" && tipo != "Barbijo") {
			tipo = prompt("Error, Ingrese el tipo de producto (Jabon o Alcohol o Barbijo)");
		}

		precio = prompt("Ingrese el precio del producto entre 100 y 300");
		precio = parseInt(precio);
		while (precio < 100 && precio > 300) {
			precio = prompt("Error, Ingrese el precio del producto entre 100 y 300")
			precio = parseInt(precio);
		}
		cantidad = prompt("Ingrese la cantidad entre 0 y 1000 unidades");
		cantidad = parseInt(cantidad);
		while (cantidad < 0 && cantidad > 1001) {
			cantidad = prompt("Error, Ingrese la cantidad entre 0 y 1000 unidades");
			cantidad = parseInt(cantidad);
		}
		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");



		if (cantidad > 0 && banderaJabonMasCaro == true) {
			banderaJabonMasCaro = false;
			cantidadJabonMasCaro = cantidad;
			fabricanteJabonMasCaro = fabricante;
		}
		else {
			if (cantidadJabonMasCaro < cantidad) {
				cantidadJabonMasCaro = cantidad;
				fabricanteJabonMasCaro = fabricante;
			}
		}

		switch (tipo) {
			case "Alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidad;
				contadorAlcohol = contadorAlcohol + 1;
				break;
			case "Barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidad;
				contadorBarbijo = contadorBarbijo + 1;
				break;
			case "Jabon":
				acumuladorJabon = acumuladorJabon + cantidad;
				contadorJabon = contadorJabon + 1;
				break;
		}


	}

	if (acumuladorAlcohol > acumuladorBarbijo || acumuladorAlcohol > acumuladorJabon) {
		promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
		banderaAlcohol = false;
	}
	else {
		if (acumuladorBarbijo > acumuladorAlcohol || acumuladorBarbijo > acumuladorJabon) {
			promedioBarbijo = acumuladorBarbijo / contadorBarbijo;
			banderaBarbijo = false;
		}
		else {
			if (acumuladorJabon > acumuladorAlcohol || acumuladorJabon > acumuladorBarbijo) {
				promedioJabon = acumuladorJabon / contadorJabon;
				banderaJabon = false;
			}
		}
	}



	alert("El fabricante de jabon mas caro es " + fabricanteJabonMasCaro + " y son " + cantidadJabonMasCaro + " unidades");

	if (banderaAlcohol == false) {
		alert("El promedio por compra del producto mas vendido es " + promedioAlcohol);
	} else {
		if (banderaBarbijo == false) {
			alert("El promedio por compra del producto mas vendido es " + promedioBarbijo);
		}
		else {
			if (banderaJabon == false) {
				alert("El promedio por compra del producto mas vendido es " + promedioJabon);
			}
		}
	}

	alert("Se compraron " + acumuladorBarbijo + " unidades de barbijo en total");



}
