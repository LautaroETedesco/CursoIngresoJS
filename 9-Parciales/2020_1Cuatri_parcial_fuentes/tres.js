/*Enunciado:
Bienvenidos.
EJERCICIO 3
debemos cargar 10 productos que acaban de llegar a la empresa
"Galletitas Felices", para cada producto se debe registrar:
*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"
Se pide informar por document.write:
a) el ingreso con la mayor cantidad de cajas.
b) de las galletitas dulces, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada tipo
[ej: 30% sin sal ,30% con sal, 40% dulces ( debe sumar 100)]
*/
//ALUMNO TEDESCO LAUTARO
//EJERCICIO PARCIAL 2021 3


function mostrar() 
{
	var marca;
	var tipo;
	var cantidadCajas;
	var cantidadKilos;
	var nombreProveedor;
	var origen;
	var tipoConMasCajas;
	var kilosConMasCajas;
	var proveedorConMasCajas;
	var origenConMasCajas;
	var cantidadConMasCajas;
	var banderaIngresoConMasCajas = true;
	var mensaje;
	var cajaDulcesMenosKilos;
	var nombreCajaDulcesMenosKilos;
	var banderaDulcesChicas=true;
	

	for (var i=0; i < 1; i=i+1) {

		marca=prompt("Ingrese la marca del producto");

		tipo=prompt("Ingrese el tipo del producto");
		while(tipo!="Con sal" && tipo!="Sin sal" && tipo !="Dulces")
		{
			tipo=prompt("Error, Ingrese el tipo del producto (Con sal o Sin sal o Dulces)");
		}
		cantidadCajas=prompt("Ingrese la cantidad de cajas");
		cantidadCajas=parseInt(cantidadCajas);
		while(cantidadCajas<0)
		{
			cantidadCajas=prompt("Error, Ingrese la cantidad de cajas");
			cantidadCajas=parseInt(cantidadCajas);
		}
		cantidadKilos=prompt("Ingrese la cantidad de kilos por caja");
		cantidadKilos=parseInt(cantidadKilos);
		while(cantidadKilos<0)
		{
			cantidadKilos=prompt("Error, Ingrese la cantidad de kilos por caja");
		cantidadKilos=parseInt(cantidadKilos);
		}
		nombreProveedor=prompt("Ingrese el nombre el proveedor");
		origen=prompt("Ingrese el origen de las cajas");
		while(origen!="Nacional" && origen!="Mercosur" && origen!="Resto del mundo")
		{
			origen=prompt("Error, Ingrese el origen de las cajas (Nacional o Mercosur o Resto del mundo");
		}

		if(cantidadCajas>0 && banderaIngresoConMasCajas==true)
		{
			banderaIngresoConMasCajas=false;
			cantidadConMasCajas=cantidadCajas;
			tipoConMasCajas=tipo;
			kilosConMasCajas=cantidadKilos;
			proveedorConMasCajas=nombreProveedor;
			origenConMasCajas=origen;
		}else
		{
			if(cantidadConMasCajas<cantidadCajas)
			{
			cantidadConMasCajas=cantidadConMasCajas+cantidadCajas;
			tipoConMasCajas=tipo;
			kilosConMasCajas=cantidadKilos;
			proveedorConMasCajas=nombreProveedor;
			origenConMasCajas=origen;
			}
		}

		if(tipo=="Dulces" && cantidadKilos>0 && banderaDulcesChicas==true)
		{
			cajaDulcesMenosKilos=cantidadKilos;
			nombreCajaDulcesMenosKilos=marca;
			banderaDulcesChicas=false;
		}
		else{
			if(tipo=="Dulces" && cajaDulcesMenosKilos<cantidadKilos)
			{
				cajaDulcesMenosKilos=cantidadKilos;
				nombreCajaDulcesMenosKilos=marca;
			}
		}

		

	
	}
	mensaje="El mayor ingreso es " + cantidadConMasCajas + (" cajas, el tipo es ") +
	tipoConMasCajas + (", cada caja tiene ") + kilosConMasCajas + (" kilos , el proveedor es ") + proveedorConMasCajas +
	(" y el origen de las cajas es ") + origenConMasCajas +
	"La caja de galletitas dulces con menos kilos es " + nombreCajaDulcesMenosKilos + "Y tiene " + cajaDulcesMenosKilos + " kilos";
	document.write(mensaje);
	
}
