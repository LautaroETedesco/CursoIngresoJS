/*
Enunciado:

EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros con su
precio de vacunación a pagar hasta que el cliente quiera.
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).

Si se vacunan más de 2 perros, se obtiene un 20% de descuento sobre el total a pagar.
Si se vacunan más de 4 perros, se obtiene un 30% de descuento sobre el total a pagar.
Se pide informar por alert:
a)El importe total a pagar por las vacunaciones, sin descuento.
b)El importe total a pagar con descuento (solo si corresponde)
c)La raza con más cantidad de perros
d)Nombre, raza y edad del perro más viejo ingresado
*/

//ALUMNO TEDESCO LAUTARO
//PARCIAL 2021 1
function mostrar() {
	var respuesta = "si";
	var raza;
	var nombre;
	var edad;
	var peso;
	var precio;
	var precioBruto = 0;
	var contadorPerros = 0;
	var porcentajeDescuento;
	var precioNeto = 0;
	var banderaPrecioDescuento = true;
	var contadorSharpei = 0;
	var contadorGalgo = 0;
	var contadorPastor = 0;
	var razaConMasCantidad;
	var edadPerroMasViejo;
	var nombrePerroMasViejo;
	var razaPerroMasViejo;
	var banderaPerroMasViejo=true;

	while (respuesta == "si") {
		raza = prompt("Ingrese la raza del perro");
		while (raza != "sharpei" && raza != "galgo" && raza != "pastor") {
			raza = prompt("Error, Ingrese la raza del perro (sharpei o galgo o pastor)");
		}
		nombre = prompt("Ingrese el nombre del  perro");
		edad = prompt("Ingrese la edad del perro");
		edad = parseInt(edad);
		while (edad < 0 || edad > 26) {
			edad = prompt("Error, Ingrese la edad del perro");
			edad = parseInt(edad);
		}
		peso = prompt("Ingrese el peso del perro");
		peso = parseInt(peso);
		while (peso < 0) {
			peso = prompt("Error, Ingrese el peso del perro");
			peso = parseInt(peso);
		}
		precio = prompt("Ingrese el precio de la consulta");
		precio = parseInt(precio);
		while (precio < 500 || precio > 1500) {
			precio = prompt("Error, Ingrese el precio de la consulta");
			precio = parseInt(precio);
		}

		respuesta = prompt("Desea continuar?")
		contadorPerros = contadorPerros + 1;
		precioBruto = precioBruto + precio
		switch (raza) {
			case "sharpei":
				contadorSharpei = contadorSharpei + 1;
				break;
			case "galgo":
				contadorGalgo = contadorGalgo + 1;
				break;
			case "pastor":
				contadorPastor = contadorPastor + 1;
				break;
		}

		if(edad>0 && banderaPerroMasViejo==true)
		{
			banderaPerroMasViejo=false;
			edadPerroMasViejo=edad;
			nombrePerroMasViejo=nombre;
			razaPerroMasViejo=raza;

		}else{
			if(edadPerroMasViejo<edad)
			{
				edadPerroMasViejo=edad;
				nombrePerroMasViejo=nombre;
				razaPerroMasViejo=raza;
			}
		}
	}

	if (contadorPerros > 2 && contadorPerros < 4) {
		porcentajeDescuento = precioBruto * 20 / 100;
		precioNeto = precioBruto - porcentajeDescuento;
		banderaPrecioDescuento = false;
	} else {
		if (contadorPerros > 4) {
			porcentajeDescuento = precioBruto * 30 / 100;
			precioNeto = precioBruto - porcentajeDescuento;
			banderaPrecioDescuento = false;
		}
	}

	if (contadorPastor > contadorGalgo && contadorPastor > contadorSharpei) {
		razaConMasCantidad = "Pastor";
	} else {
		if (contadorSharpei > contadorGalgo && contadorSharpei > contadorPastor) {
			razaConMasCantidad = "Sharpei";
		} else {
			if (contadorGalgo > contadorSharpei && contadorGalgo > contadorPastor) {
				razaConMasCantidad = "Galgo";
			}
		}
	}




	alert("El precio total sin descuento es " + precioBruto);
	if (banderaPrecioDescuento == false) {
		alert("El precio total con descuento es " + precioNeto);
	}
	alert("La raza con mas cantidad de perros es " + razaConMasCantidad );
	alert("El nombre del perro mas viejo es " + nombrePerroMasViejo + " y la raza del perro es " + razaPerroMasViejo + " y la edad del perro es " + edadPerroMasViejo);
	

}
