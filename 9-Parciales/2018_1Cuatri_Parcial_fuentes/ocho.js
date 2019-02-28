function mostrar()
{
	var letra;
	var numero;
	var acumuladorPares;
	var acumuladorImpares;
	var acumuladorCeros;
	var acumuladorPositivos;
	var sumaPositivos;
	var promedio;
	var sumaNegativos;
	var numeroAlto;
	var letraAlto;
	var numeroBajo;
	var letraBaja;
	var respuesta;
	var acumulador;

	respuesta="si";
	acumuladorPares=0;
	acumuladorImpares=0;
	acumuladorCeros=0;
	acumuladorPositivos=0;
	numeroAlto=0;
	numeroBajo=0;
	sumaPositivos=0;
	sumaNegativos=0;
	acumulador=0;

	var sumaPositivos=parseInt(sumaPositivos);
	var sumaNegativos=parseInt(sumaNegativos);

	while(respuesta=="si"){

		numero=prompt("Ingrese un numero: ");
		letra=prompt("Ingrese una letra: ");
		var numero=parseInt(numero);

		while(numero>100 || numero<-100){

			numero=prompt("Error, ingrese un numero valido: ");
		}

		if(numero==0){

			acumuladorCeros=acumuladorCeros+1;	
		}else{

			if(numero>0){

				acumuladorPositivos=acumuladorPositivos+1;
				sumaPositivos=sumaPositivos+numero;

				console.log(acumuladorPositivos);
				console.log(sumaPositivos);
			}else{

				sumaNegativos=sumaNegativos+numero;
			}
		}

		if(numero%2==0){

			acumuladorPares=acumuladorPares+1;
		}else{

			acumuladorImpares=acumuladorImpares+1;
		}

		if(acumulador==0){

			numeroAlto=numero;
			letraAlto=letra;
			numeroBajo=numero;
			letraBaja=letra;
		}else{

			if(numero>numeroAlto){

				numeroAlto=numero;
				letraAlto=letra;
			}else{

				numeroBajo=numero;
				letraBaja=letra;
			}
		}

		acumulador=acumulador+1;
		respuesta=prompt("Para continuar ingrese (si) ");
	}

	
	promedio=sumaPositivos/acumuladorPositivos;

	document.write(
		"Numeros pares: "+acumuladorPares+
		"Numeros impares: "+acumuladorImpares+
		"Cantidad de ceros: "+acumuladorCeros+
		"Promedio positivos: "+promedio+
		"Suma negativos: "+sumaNegativos+
		"Numero y letra maxima: "+numeroAlto+", "+letraAlto+
		"Numero y letra minima: "+numeroBajo+", "+letraBaja
	);

}

