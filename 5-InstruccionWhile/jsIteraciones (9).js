function mostrar()
{

	var contador;
	var maximoUno;
	var minimoUno;
	var respuesta;
	var numero;
	// declarar variables
	
	respuesta='si'
	contador=0

	while(respuesta=="si"){

		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# : ");
		numero=parseInt(numero);
		
		if(contador==0){

			maximoUno=numero;
			minimoUno=numero;
			contador="lalala";
		}else{

			if(numero>maximoUno){

			maximoUno=numero;
		} if(numero<minimoUno){

			minimoUno=numero;
		}
		}

		respuesta=prompt("Si para continuar");
	}

	maximo.value=maximoUno;
	minimo.value=minimoUno;


}//FIN DE LA FUNCIÓN