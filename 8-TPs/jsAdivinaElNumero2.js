/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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