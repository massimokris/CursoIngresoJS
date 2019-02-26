function mostrar()
{
	var letra;
	var numero;
	var acumuladorPares;
	var acumuladorImpares;
	var acumuladorCeros;
	var promedio;
	var acumuladorPositivos;
	var sumaNegativos;
	var sumaPositivos;
	var numeroBajo;
	var letraBaja;
	var numeroAlto;
	var letraAlta;
	var respuesta;
	var contador;

	respuesta="si";
	contador=0;
	acumuladorPares=0;
	acumuladorImpares=0;
	acumuladorCeros=0;
	acumuladorPositivos=0;
	numeroBajo=0;
	numeroAlto=0;

	while(respuesta=="si"){

		numero=prompt("ingrese un numero: ");
		letra=prompt("Ingrese una letra: ");
		respuesta=prompt("para continuar presione (si)";
		while(numero>100 || numero<-100){

			numero=prompt("error, ingrese un numero valido: ");

		}

		if(contador==0){

			numeroAlto=numero;
			numeroBajo=numero;
			letraAlta=letra;
			letraBaja=letra;
		}else{

			if(numero>numeroAlto){

				numeroAlto=numero;
				letraAlta=letra;
			}else{

				if(numero<numeroBajo){

					numeroBajo=numero;
					letraBaja=letra;
				}else{

					if(numero==0){

						acumuladorCeros=acumuladorCeros+1;
					}else{

						if(numero%2==0){

							acumuladorPares=acumuladorPares+1;
						}else{

							if(numero%2!==0){

								acumuladorImpares=acumuladorImpares+1;
							}else{


								if(numero>0){

									acumuladorPositivos=acumuladorPositivos+1;
									sumaPositivos=sumaPositivos+numero;
								}else{

									if(numero<0){

										sumaNegativos=sumaNegativos+numero;
									}
								}
							}
						}
					}
				}
			}		
		}

		contador=contador+1;
	}

	promedio=sumaPositivos/acumuladorPositivos;
	alert("numero pares: "+acumuladorPares+" numero impares: "+acumuladorImpares+" cantidad de ceros: "+acumuladorCeros+" promedio de positivos: "+promedio+" suma de nagativos: "+sumaNegativos+" numero y letra mas alta: "+numeroAlto+", "+letraAlta+" numero y letra mas baja: "+numeroBajo+", "+letraBaja);
}
