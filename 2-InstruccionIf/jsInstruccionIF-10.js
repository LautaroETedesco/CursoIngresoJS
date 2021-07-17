//AUTOR :LAUTARO TEDESCO
//EJERCICIO:IF 10
 
function mostrar()
{
	var numero;


	
	numero=parseInt(Math.random()*10+1);
	

	if (numero>4 && numero<=8 )
	{
		alert("APROBO");

	}
	else
	{
		if(numero>=9 && numero<=10 )
		{
		alert("EXCELENTE");
		} 
		else
		{
		alert("Vamos, la proxima se puede")
		}
	}

}//FIN DE LA FUNCIÓN