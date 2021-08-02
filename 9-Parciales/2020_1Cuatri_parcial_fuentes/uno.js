/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

//AUTOR: LAUTARO TEDESCO
//EJERCICIO: PARCIAL 1 2020

//Signo mayor >
//Signo menor <

function mostrar() {

	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var contador;
	var bandera;
	var alcoholMasBarato;
	var alcoholMasBaratoUnidades;
	var alcoholMasBaratoFabricante;
	var mensaje;
	var cantidadUnidadesAlcohol;
	var cantidadUnidadesBarbijo;
	var cantidadUnidadesJabon;
	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;
	var promedio;
	var mensaje2;
	var tipoConMasUnidades;
	var mensaje3;
	




	contador = 0;
	bandera = false;
	precio = 0;
	cantidadUnidades = 0;
	alcoholMasBarato = 0;
	cantidadUnidadesAlcohol = 0;
	cantidadUnidadesBarbijo = 0;
	cantidadUnidadesJabon = 0;
	contadorAlcohol = 0;
	promedio = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	



	while (contador < 5) {
		tipo = prompt("Ingrese el tipo de producto 'barbijo' 'jabon' 'alcohol'");
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt("Ingrese un producto valido 'barbijo' 'jabon' 'alcohol' ");
		}


		precio = parseInt(prompt("Ingrese el precio del producto 'Entre 100 y 300' "));
		while (precio < 100 || precio > 300) {
			precio = parseInt(prompt("Ingrese un precio valido 'Entre 100 y 300' "));
		}


		cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades 'Entre 0 y 1000' "));
		while (cantidadUnidades < 0 || cantidadUnidades > 1000) {
			cantidadUnidades = parseInt(prompt("Ingrese una cantidad de unidades valida 'Entre 0 y 1000' "));
		}


		marca = prompt("Ingrese la marca del producto");
		fabricante = prompt("Ingrese el fabricante del producto");
		contador = contador + 1;







		if (tipo == "alcohol") {
			if (bandera == false) {
				bandera = true
				alcoholMasBarato = precio;
				alcoholMasBaratoUnidades = cantidadUnidades;
				alcoholMasBaratoFabricante = fabricante;
			}
			else {
				if (precio < alcoholMasBarato) {
					alcoholMasBarato = precio;
					alcoholMasBaratoUnidades = cantidadUnidades;
					alcoholMasBaratoFabricante = fabricante;
				}
			}


		}


		switch (tipo) {
			case "alcohol":
				cantidadUnidadesAlcohol = cantidadUnidadesAlcohol + cantidadUnidades;
				contadorAlcohol = contadorAlcohol + 1;
				cantidadUnidadesAlcohol=parseInt(cantidadUnidadesAlcohol);


				break;
			case "barbijo":
				cantidadUnidadesBarbijo = cantidadUnidadesBarbijo + cantidadUnidades;
				contadorBarbijo = contadorBarbijo + 1;
				cantidadUnidadesBarbijo=parseInt(cantidadUnidadesBarbijo);

				break;
			case "jabon":
				cantidadUnidadesJabon = cantidadUnidadesJabon + cantidadUnidades;
				contadorJabon = contadorJabon + 1;
				cantidadUnidadesJabon=parseInt(cantidadUnidadesJabon);
				

				break;
		}





	}

	if (cantidadUnidadesAlcohol > cantidadUnidadesJabon && cantidadUnidadesAlcohol > cantidadUnidadesBarbijo) {


		promedio = cantidadUnidadesAlcohol / contadorAlcohol;
		tipoConMasUnidades = "alcohol"


	}
	else {
		if (cantidadUnidadesJabon > cantidadUnidadesAlcohol && cantidadUnidadesJabon > cantidadUnidadesBarbijo) {


			promedio = cantidadUnidadesJabon / contadorJabon;
			tipoConMasUnidades = "jabon"


		}
		else {
			if (cantidadUnidadesBarbijo > cantidadUnidadesAlcohol && cantidadUnidadesBarbijo > cantidadUnidadesJabon) {


				promedio = cantidadUnidadesBarbijo / contadorBarbijo;
				tipoConMasUnidades = "Barbijo"


			}
		}
	}





	mensaje = "El precio del alcohol mas barato es $" + alcoholMasBarato + " y son " + alcoholMasBaratoUnidades + " unidades y el fabricante es " + alcoholMasBaratoFabricante;
	mensaje2 = "El tipo con mas unidades es " + tipoConMasUnidades + " y el promedio por compra es " + promedio;
	mensaje3 = "La suma total de unidades de jabon es " + cantidadUnidadesJabon;
	alert(mensaje);
	alert(mensaje2);
	alert(mensaje3);


}


