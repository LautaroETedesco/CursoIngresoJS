/*Enunciado:

EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza de la carta con mayor precio.
B) Cuantas cartas de tipo "trampa" y de rareza "rara o super rara" fueron vendidas.
C) El promedio de precio de las cartas de tipo "monstruo" de rareza "ultra rara" con un precio menor a 500.
*/
//AUTOR TEDESCO LAUTARO
//EJERCICIO PARCIAL 2021 2




function mostrar() {
  var respuesta = "si";
  var nombre;
  var tipo;
  var rareza;
  var precio;
  var cartaMayorPrecio
  var nombreCartaMayorPrecio;
  var rarezaCartaMayorPrecio;
  var banderaCartaMayorPrecio = true;
  var contadorTrampa = 0;
  var acumuladorPrecio = 0;
  var contadorMonstruo = 0;
  var promedioCartaMounstruo;
  var mensaje;

  while (respuesta == "si") {
    nombre = prompt("Ingrese el nombre de la carta");
    tipo = prompt("Ingrese el tipo de carta")
    while (tipo != "monstruo" && tipo != "magica" && tipo != "trampa") {
      tipo = prompt("Error, Ingrese el tipo de carta (monstruo o magica o trampa)");
    }
    rareza = prompt("Ingrese la rareza de la carta");
    while (rareza != "rara" && rareza != "super rara" && rareza != "ultra rara") {
      rareza = prompt("Error, Ingrese la rareza de la carta (rara o super rara o ultra rara) ")
    }
    precio = prompt("Ingrese el precio de la carta");
    precio = parseInt(precio);
    while (precio < 0) {
      precio = prompt("Error, Ingrese el precio de la carta");
      precio = parseInt(precio);
    }
    respuesta = prompt("Desea continuar?")


    switch (tipo) {
      case "trampa":
        switch (rareza) {
          case "rara":
          case "super rara":
            contadorTrampa = contadorTrampa + 1;
            break;

        }
        break;
    }

    if (tipo == "monstruo" && rareza == "super rara" && precio < 500) {
      acumuladorPrecio = acumuladorPrecio + precio;
      contadorMonstruo = contadorMonstruo + 1;
      promedioCartaMounstruo = acumuladorPrecio / contadorMonstruo;
    }
  }

  if (precio > 0 && banderaCartaMayorPrecio == true) {
    banderaCartaMayorPrecio = false;
    cartaMayorPrecio = precio;
    nombreCartaMayorPrecio = nombre;
    rarezaCartaMayorPrecio = rareza;
  } else {
    if (cartaMayorPrecio < precio) {
      cartaMayorPrecio = precio;
      nombreCartaMayorPrecio = nombre;
      rarezaCartaMayorPrecio = rareza;
    }
  }




  mensaje = "El nombre de la carta con mayor precio es " + nombreCartaMayorPrecio + " y la rareza de la carta es " + rarezaCartaMayorPrecio +
    "Se vendieron " + contadorTrampa + " cartas de tipo trampa y rareza rara o super rara"  +
    "El promedio de precio de las cartas de tipo monstruo y de rareza ultra rara con un precio menor a 500 es de " + promedioCartaMounstruo;
  document.write(mensaje);
}
