/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var temporizador;
var tuRespuesta;
var numeroUno;
var numeroDos;
var operadores;
var resultado;

setTimeout(function(){ alert("Se te agoto el tiempo para Responder, intentalo nuevamente "); }, 5000);
clearTimeout(Responder);

function comenzar()
{
	numeroUno=Math.floor((Math.random()*10)+1);
	numeroDos=Math.floor((Math.random()*10)+1);	
	operadores=Math.floor((Math.random()*4)+1);

	console.log(numeroUno);
	console.log(numeroDos);
	console.log(operadores);

	primerNumero.value=numeroUno;
	segundoNumero.value=numeroDos;
	operador.value=operadores;

	var numeroUno=parseInt(numeroUno);
	var numeroDos=parseInt(numeroDos);

	if(operadores==1){

		operador.value="suma";
		resultado=numeroUno+numeroDos;
	}else{

		if(operadores==2){

			operador.value="resta";
			resultado=numeroUno-numeroDos;
		}else{

			if(operadores==3){

				operador.value="multiplicación";
				resultado=numeroUno*numeroDos;
			}else{

				operador.value="division";
				resultado=numeroUno/numeroDos;
			}
		}
	}

}//FIN DE LA FUNCIÓN
function Responder()
{

	tuRespuesta=Respuesta.value;

	if(resultado==tuRespuesta){

		alert("Su respuesta es correcta ");
	}else{

		alert("Su respuesta es incorecta ");
	}

}//FIN DE LA FUNCIÓN