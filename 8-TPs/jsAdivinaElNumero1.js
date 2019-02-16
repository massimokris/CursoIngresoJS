/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor((Math.random()*100)+1);	 
		//alert(numeroSecreto );
	console.log(numeroSecreto);
	contadorIntentos=0;	
}

function verificar()
{
	var numeroIngresado;
	var mensaje;
	contadorIntentos=contadorIntentos+1;

	numeroIngresado=numero.value;
	intentos.value=contadorIntentos;

	//alert(numeroIngresado);
	
	if(numeroIngresado==numeroSecreto){

		//mensaje=("Sos un genio y lo hiciste en: "+contadorIntentos+" intentos ");
		//agregamos el switch para mostar un mensaje dependiendo de la cantidad de intentos
		switch(contadorIntentos){
			case 1:
			mensaje="Vidente";
			break;
			case 2:
			mensaje="Genio";
			break;
			case 3:
			mensaje="Logico";
			break;
			case 4:
			mensaje="Exelente";
			break;
			case 5:
			mensaje="Bueno";
			break;
			case 6:
			mensaje="Promedio";
			break;
		}
	}else{
		if(numeroIngresado<numeroSecreto){
			
			mensaje=("Te falta ");

		}else{

			mensaje=("Te pasaste ");
		}
	}

	alert(mensaje);
}