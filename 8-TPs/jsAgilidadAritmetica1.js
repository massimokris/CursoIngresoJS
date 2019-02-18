/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var tuRespuesta;
var numeroUno;
var numeroDos;
var operadores;
var resultado;

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
