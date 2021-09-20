/*
EJERCICIO 1 CURSO DE INGRESO
Un restaurante necesita un programa que permita 
ingresar datos de los platos con su precio a pagar
y cantidad hasta que el cliente quiera. Por cada cliente, se ingresa:
plato: (validar "ravioles", "milanesa", "pizza").
precio del plato (desde 100 hasta 500)
cantidad (mas que 0)
medio de pago (validar "efectivo", "debito", "credito")
a)		El importe total de todos los clientes.
		Si el medio de pago es efectivo, se debe aplicar un 10% de descuento.
		Si el medio de pago es credito, se debe aplicar un 15% de recargo.
b)	El importe total de todos los clientes que pagaron en efectivo. (aplicando el descuento del 10%)
c)	Promedio de ventas con Debito.
d)	Promedio por plato y el más barato.
*/

//ALUMNO TEDESCO LAUTARO
//EJERCICIO 1
function mostrar() 
{
	var respuesta = "si";
	var plato;
	var precioDelPlato;
	var cantidad;
	var medioDePago;
	var totalBruto;
	var descuentoEfectivo;
	var recargoCredito;
	var totalEfectivo;
	var totalCredito;
	var totalNeto;
	var acumuladorEfectivo = 0;
	var acumuladorCredito = 0;
	var acumuladorDebito = 0;
	var contadorDebito = 0;
	var promedioDeVentasDebito;
	var platoMasBarato;
	var banderaPlatoBarato = true;
	var contadorTotal = 0;
	var promedioPorPlatoTotal;

	while (respuesta == "si") {
		plato = prompt("Ingrese el plato que quiere pedir");
		while (plato != "ravioles" && plato != "milanesa" && plato != "pizza") {
			plato = prompt("Error, Ingrese el plato que quiere pedir (ravioles o milanesa o pizza");
		}
		precioDelPlato = prompt("Ingrese el precio del plato");
		precioDelPlato = parseInt(precioDelPlato);
		while (precioDelPlato < 100 || precioDelPlato > 500) {
			precioDelPlato = prompt("Error, Ingrese el precio del plato entre 100 y 500");
			precioDelPlato = parseInt(precioDelPlato);
		}
		cantidad = prompt("Ingrese la cantidad de platos");
		cantidad = parseInt(cantidad);
		while (cantidad < 0) {
			cantidad = prompt("Error, Ingrese la cantidad de platos mas que 0");
			cantidad = parseInt(cantidad);
		}
		medioDePago = prompt("Ingrese el medio de pago");
		while (medioDePago != "efectivo" && medioDePago != "debito" && medioDePago != "credito") {
			medioDePago = prompt("Error, Ingrese el medio de pago (efectivo o debito o credito");
		}
		respuesta = prompt("Desea continuar?")


		totalBruto = precioDelPlato * cantidad;
		contadorTotal = contadorTotal + 1;

		switch (medioDePago) {
			case "efectivo":
				descuentoEfectivo = totalBruto * 10 / 100;
				totalEfectivo = totalBruto - descuentoEfectivo;
				acumuladorEfectivo = acumuladorEfectivo + totalEfectivo;
				break;
			case "credito":
				recargoCredito = totalBruto * 15 / 100;
				totalCredito = totalBruto + recargoCredito;
				acumuladorCredito = acumuladorCredito + totalCredito;
				break;
			case "debito":
				acumuladorDebito = acumuladorDebito + totalBruto;
				contadorDebito = contadorDebito + 1;
				promedioDeVentasDebito = acumuladorDebito / contadorDebito;
				break;

		}

		if (precioDelPlato > 0 && banderaPlatoBarato == true) {
			platoMasBarato = precioDelPlato;
			banderaPlatoBarato = false;
		}


		





	}

	totalNeto = acumuladorCredito + acumuladorEfectivo;
	promedioPorPlatoTotal=totalNeto/contadorTotal;

	alert("El total de la compra es " + totalNeto);
	alert("El total de la compra abonada en efectivo es " + acumuladorEfectivo);
	alert("El promedio de ventas por debito es " + promedioDeVentasDebito);
	alert("El plato mas barato es " + platoMasBarato + "Y el promedio de todos los platos es " + promedioPorPlatoTotal);

}

