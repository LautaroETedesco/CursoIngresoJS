/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/




function mostrar() {
  var respuesta = "si";
  var tipo;
  var cantidad;
  var precio;
  var acumuladorBolsas = 0;
  var precioBruto;
  var precioNeto;
  var descuento15Porciento = 0;
  var descuento25Porciento = 0;
  var tipoConMasCantidad;
  var cantidadTipoConMasCantidad = 0;
  var banderaTipoConMasCantidad = true;
  var tipoMasCaro;
  var precioTipoMasCaro = 0;
  var banderaTipoMasCaro;






  while (respuesta == "si") {
    tipo = prompt("Ingrese el tipo de producto (Arena, Cal o Cemento)");
    while (tipo != "Cal" && tipo != "Arena" && tipo != "Cemento") {
      tipo = prompt("Error, Ingrese el tipo de producto (Arena, Cal o Cemento)")
    }

    cantidad = prompt("Ingrese la cantidad de bolsas");
    cantidad = parseInt(cantidad);
    while (cantidad < 0) {
      cantidad = prompt("Error, Ingrese la cantidad de bolsas");
      cantidad = parseInt(cantidad);

    }

    precio = prompt("Ingrese el precio por bolsa");
    precio = parseInt(precio);
    while (precio < 0) {
      precio = prompt("Error; Ingrese el precio por bolsa");
      precio = parseInt(precio);

    }
    respuesta = prompt("Desea continuar?")

    acumuladorBolsas = acumuladorBolsas + cantidad;
    precioBruto = acumuladorBolsas * precio;
  }
  if (acumuladorBolsas > 9) {

    descuento15Porciento = precioBruto * 15 / 100
    precioNeto = precioBruto - descuento15Porciento;


  } else {
    if (acumuladorBolsas > 29) {

      descuento25orciento = precioBruto * 25 / 100
      precioNeto = precioBruto - descuento25Porciento;
    }
  }

  if (0 < cantidad && banderaTipoConMasCantidad == true) {
    banderaTipoConMasCantidad = false;
    cantidadTipoConMasCantidad = cantidad;
    tipoConMasCantidad = tipo
  } else {

    if (cantidad > cantidadTipoConMasCantidad) {
      cantidadTipoConMasCantidad = cantidad;
      tipoConMasCantidad = tipo
    }
  }

  if (precioTipoMasCaro < precio && banderaTipoMasCaro == true) {
    banderaTipoMasCaro = false;
    precioTipoMasCaro = precio;
    tipoMasCaro = tipo

  } else {
    if (precio > precioTipoMasCaro) {
      precioTipoMasCaro = precio;
      tipoMasCaro = tipo;
    }
  }


  alert("Precio Bruto Total " + precioBruto);
  if (acumuladorBolsas > 9) {
    alert("Precio Neto Total" + precioNeto);
  }
  alert("El tipo con mas cantidad es " + tipoConMasCantidad);
  alert("El tipo mas caro es " + tipoMasCaro);

}
