/*AUTOR:LAUTARO TEDESCO
  PARCIAL 2019 E/S 2
 */

function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var promedio;
  var suma;
  var mensaje1;
  var mensaje2;
  var mensaje3;

  nombre1=prompt("Ingrese el primer nombre");
  nombre2=prompt("Ingrese el segundo nombre");
  peso1=prompt("Ingrese el peso de la primer pareja");
  peso2=prompt("Ingrese el peso de la segunda pareja");
  suma=(parseInt(peso1)+parseInt(peso2))
  promedio=(suma/2)
  mensaje1=("Ustedes se llaman " + nombre1 + " y " + nombre2);
  mensaje2=(" pesan " + peso1 + ("KG y ") + peso2 + ("KG que sumados son "));
  mensaje3=(suma + ("KG y el promedio de peso es ") + promedio + ("KG"));
  alert(mensaje1+mensaje2+mensaje3);
}
