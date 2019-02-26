function mostrar()
{
	var numeroUno;
	var numeroDos;
	var mensaje;
	var suma;
	var resta;

	numeroUno=prompt("Ingrese un numero: ");
	numeroDos=prompt("Ingrese un numero: ");

	var numeroUno=parseInt(numeroUno);
	var numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos){

		mensaje=("Los numeros son iguales, numero uno: "+numeroUno+" numero dos: "+numeroDos);
	}else{

		if(numeroUno>numeroDos){

			resta=numeroUno-numeroDos;
			mensaje=("los numero se restaron "+numeroUno+" - "+numeroDos+" es igual a: "+resta);
		}else{

			suma=numeroUno+numeroDos;
			mensaje=("los numero se sumaron "+numeroUno+" + "+numeroDos+" es igual a: "+suma);
			if(suma>10){

				mensaje=("La suma es: "+suma+" y supero el 10");
			}
		}
	}

	alert(mensaje);
}
