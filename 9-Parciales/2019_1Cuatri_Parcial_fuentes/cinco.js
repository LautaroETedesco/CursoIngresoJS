/*Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/

//AUTOR:TEDESCO LAUTARO
//EJERCICIO:PARCIAL 5


function mostrar()
{
	var continente;
	var cantidadDias;
	var descuento;
	var recargo;
	var valorDescuento;
	var valorRecargo;
	var formaDePago;
	var precioTotal;
	var precioTotalFinal;
	

	continente=document.getElementById("Marca").value;
	cantidadDias=prompt("Ingrese la cantidad de dias de su estadia");
	cantidadDias=parseInt(cantidadDias);
	descuento=0;
	recargo=0;
	formaDePago=prompt("Ingrese su forma de pago eligiendo el numero indicado (1=MercadoPago/2=Efectivo/3=Debito)");

	switch(continente)
	{
		case "América":
		switch(formaDePago)
		{
			case "3":
			descuento=60;
			break
			case "1":
			case "2":
			descuento=50;
			break;
		}
		
		break;
			case "África":
			switch(formaDePago)
			{
				case "3":
				descuento=60;
				break
				case "1":
				case "2":
				descuento=75;
				break;
			}
			break;
				case "Europa":
				switch(formaDePago)
				{
					case "3":
					descuento=15;
					break
					case "1":
					descuento=10;
					break
					case "2":
					descuento=5;
					break;
				}
				break;
				default:
				recargo=20;
	break;
	}

	precioTotal=(cantidadDias*100);
	valorRecargo=((precioTotal*recargo)/100);
	valorDescuento=((precioTotal*descuento)/100);
	precioTotalFinal=(precioTotal-valorDescuento+valorRecargo);
	
	alert("El precio total de su viaje seria $" + precioTotalFinal);


}
