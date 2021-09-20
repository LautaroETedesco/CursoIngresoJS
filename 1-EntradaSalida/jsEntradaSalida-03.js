/*
EJERCICIO 3 CURSO DE INGRESO
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar
 marca del producto
 Tipo de galletita : "con sal", "sin sal", "dulces".
 cantidad de cajas: mas de 0
 cantidad de kilos por caja:mas de 0
 nombre proveedor
 origen: "nacional", "mercosur", "resto del mundo"
	a) informar el ingreso con la menor cantidad de cajas
	b) de las galletitas dulces , la marca que mas kilos tiene por caja
	c)que porcentaje de cajas hay sobre el total de cada tipo
	ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)
*/

//ALUMNO TEDESCO LAUTARO
//EJERCICIO 3

function mostrar()
{
	var marca;
	var tipo;
	var cantidadCajas;
	var cantidadKilos;
	var nombreProveedor;
	var origen;
	var menorCantidadDeCajas;
	var tipoMenorCantidadDeCajas;
	var kilosMenorCantidadDeCajas;
	var proveedorMenorCantidadDeCajas;
	var origenMenorCantidadDeCajas;
	var banderaMenorCantidadDeCajas=true;
	var mensaje;
	var galletitasDulcesMasKilos;
	var banderaGalletitasDulcesMasKilos=true;
	var marcaGalletitasDulcesMasKilos;
	var contadorTotal=0;
	var contadorDulces=0;
	var contadorConSal=0;
	var contadorSinSal=0;
	var porcentajeDulces;
	var porcentajeSinSal;
	var porcentajeConSal;
	var mensaje2;

	
for (var i=0; i < 10; i=i+1) {


	marca=prompt("Ingrese la marca de las galletitas");

	tipo=prompt("Ingrese el tipo de galletitas");
    while(tipo!="Con sal" && tipo!="Sin sal" && tipo!="Dulces")
    {
		tipo=prompt("Error, Ingrese el tipo de galletitas (Sin sal, Con sal, Dulces)");
    }
	cantidadCajas=prompt("Ingrese la cantidad de cajas");
	cantidadCajas=parseInt(cantidadCajas);
	while(cantidadCajas<0)
	{
		cantidadCajas=prompt("Error, Ingrese la cantidad de cajas (mayor a 0)");
	cantidadCajas=parseInt(cantidadCajas);
	}
	cantidadKilos=prompt("Ingrese la cantidad de kilos por caja");
	cantidadKilos=parseInt(cantidadKilos);
	while(cantidadKilos<0)
	{
		cantidadKilos=prompt("Error, Ingrese la cantidad de kilos por caja (mayor a 0)");
		cantidadKilos=parseInt(cantidadKilos);
	}
	nombreProveedor=prompt("Ingrese el nombre del proveedor");

	origen=prompt("Ingrese el origen de las cajas");
	while(origen!="Nacional" && origen!="Mercosur" && origen!="Resto del mundo")
	{
		origen=prompt("Error, Ingrese el origen de las cajas (Nacional o Mercosur o Resto del mundo");
	}

	if(cantidadCajas>0 && banderaMenorCantidadDeCajas==true)
	{
		banderaMenorCantidadDeCajas=false;
		menorCantidadDeCajas=cantidad;
		tipoMenorCantidadDeCajas=tipo;
		kilosMenorCantidadDeCajas=cantidadKilos;
		proveedorMenorCantidadDeCajas=nombreProveedor;
		origenMenorCantidadDeCajas=origen;

	}else{
		if(menorCantidadDeCajas>cantidadCajas)
		{
			menorCantidadDeCajas=cantidad;
			tipoMenorCantidadDeCajas=tipo;
			kilosMenorCantidadDeCajas=cantidadKilos;
			proveedorMenorCantidadDeCajas=nombreProveedor;
			origenMenorCantidadDeCajas=origen;
		}
	}

	switch(tipo)
	{
		case "Dulces":
			contadorDulces=contadorDulces+1;
		if(cantidadKilos>0 && banderaGalletitasDulcesMasKilos==true)
		{	
			banderaGalletitasDulcesMasKilos=false;
			galletitasDulcesMasKilos=cantidadKilos;
			marcaGalletitasDulcesMasKilos=marca;
		}
		else{
			if(galletitasDulcesMasKilos<cantidadKilos)
			{
				galletitasDulcesMasKilos=cantidadKilos;
				marcaGalletitasDulcesMasKilos=marca;
			}

		}
		break;
		case "Con sal":
			contadorConSal=contadorConSal+1;
			break;
			case"Sin sal":
			contadorSinSal=contadorSinSal+1;
			break;
	}

	contadorTotal=contadorTotal+1
    
}

porcentajeConSal=contadorConSal*100/contadorTotal;
porcentajeDulces=contadorDulces*100/contadorTotal;
porcentajeSinSal=contadorSinSal*100/contadorTotal;

mensaje="El tipo con menor cantidad de cajas es " + tipoMenorCantidadDeCajas + " son " + menorCantidadDeCajas +
" cada caja tiene " + kilosMenorCantidadDeCajas + " el proveedor es " + proveedorMenorCantidadDeCajas +
" y el origen de las cajas es " + origenMenorCantidadDeCajas;

mensaje2="El porcentaje de las galletitas sin sal es " + porcentajeSinSal + 
"El porcentaje de las galletitas dulces es " + porcentajeDulces +
 "Y el porcentaje de las galletitas con sal es " + porcentajeConSal;
alert(mensaje);
alert("Las galletitas dulces con mas kilos por caja son marca " + marcaGalletitasDulcesMasKilos);
alert(mensaje2);

}


