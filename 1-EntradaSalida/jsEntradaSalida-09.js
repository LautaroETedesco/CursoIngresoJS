/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
	aumento=(sueldo*0.1);
	resultado=(sueldo+aumento);

	(document.getElementById("txtIdResultado").value)=resultado;
	//(sueldo + 10 porciento)//
	//parceInt(document.getElementById("txtIdResultado").value);

	//ingresamos el sueldo click mostrar aumento nos pide por prompt el porcentaje a aumentar y despues lo muestra por resultado
	//Lo  mismo  que antes pero enves de tener un porcentaje fijo pedimos un porcentaje que puede variar por prompt
}


/*
//EJERCICIO 9 BIS	
function mostrarAumento()
{
	var sueldo;
	var aumento;
	var resultado;
	var porcentaje;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);

	porcentaje=prompt("Porcentaje a aumentar:");

	aumento=(sueldo)*(parseInt(porcentaje)/100);

	resultado=(sueldo+aumento);

	(document.getElementById("txtIdResultado").value)=resultado;

	}*/