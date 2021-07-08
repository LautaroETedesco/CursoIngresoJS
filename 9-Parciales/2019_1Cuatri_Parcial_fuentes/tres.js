
/*AUTOR:TEDESCO LAUTARO
  EJERCICIO: PARCIAL 2019 EJERCICIO 3
*/



function mostrar()
{
var precio;
var descuento;
var descuento1;
var descuento2;
var precioFinal;


precio=prompt("Ingresar precio");
descuento=prompt("Ingresar descuento");
descuento1=(parseInt(descuento)/100);
descuento2=(parseInt(precio)*(descuento1));
precioFinal=(precio)-(descuento2);


document.getElementById("elPrecioFinal").value=(precioFinal);





 }
