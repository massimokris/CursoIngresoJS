function mostrar()
{

	var contador;
	var respuesta;
	var sumaNegativos;
	var sumaPositivos;
	var sumaPositivos;
	var acumuladorPositivos;
	var sumaNegativos;
	var acumuladorNegativos;
	var acumuladorCeros;
	var acumuladorPares;
	var promedioPositivos;
	var promerdioNegativos;
	var diferencia;
	var numero;
	//declarar contadores y variables 
	
	respuesta="si";
	contador=0;
	sumaPositivos=0;
	acumuladorPositivos=0;
	sumaNegativos=0;
	acumuladorNegativos=0;
	acumuladorCeros=0;
	acumuladorPares=0;

	while(respuesta=="si"){

		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# : ");
		numero=parseInt(numero);
		
		if(numero<0){

			sumaNegativos=sumaNegativos+numero;
			acumuladorNegativos=acumuladorNegativos+1;
			promerdioNegativos=sumaNegativos/acumuladorNegativos;
		}else{

			if(numero>0){

			sumaPositivos=sumaPositivos+numero;
			acumuladorPositivos=acumuladorPositivos+1;
			promedioPositivos=sumaPositivos/acumuladorPositivos;
		}else{

			acumuladorCeros=acumuladorCeros+1;
		}

		respuesta=prompt("Si para continuar");
	}

	if(numero%2==0){

				acumuladorPares=acumuladorPares+1;
			}

	}		
	diferencia=(sumaNegativos-(sumaPositivos));
	alert(+sumaNegativos+" "+sumaPositivos+" "+acumuladorPositivos+" "+acumuladorNegativos+" "+acumuladorCeros+" "+acumuladorPares+" "+promedioPositivos+" "+promerdioNegativos+" "+diferencia);


}//FIN DE LA FUNCIÓN