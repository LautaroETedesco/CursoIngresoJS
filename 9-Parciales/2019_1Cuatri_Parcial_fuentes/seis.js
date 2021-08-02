/*Bienvenidos (SWITCH +IF).
Se ingresa una hora.
Si está entre las 6 y las 11 mostrar:"es de mañana",
si es desde las 12 a las 19: "es de tarde",
de lo contrario informar que es de noche.
Informar si la hora no es válida.
Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".
*/

//AUTOR :TEDESCO LAUTARO
//EJERCICIO :PARCIAL 6 2019

// Signo Menor <
// Signo Mayor >


function mostrar()
{   
    var hora;
    var mensaje1;
    var mensaje2;
    var mensaje3;


    hora=document.getElementById("laHora").value;
    mensaje1="Es de mañana";
    mensaje2="Es de tarde";
    mensaje3="A dormir";


    switch(hora)
    {
        case "6":
        case "7":
        case "8":
        case "10":
        case "11":
        alert(mensaje1);
        break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
        alert(mensaje2);
        break;
        default:
            if(hora>19 && hora<25)
            {
                alert(mensaje3);
            }
            else
            {
                
                alert("Ingrese una hora valida");
            
            }
        
    }
    

}
