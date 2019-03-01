function mostrar()
{

	var numero;
	var numeroAnterior;
	var sumaNumero;

	sumaNumero=0;
	sumaNumero=parseInt(sumaNumero);

	numero=prompt("Ingrese un numero: ");
	var numero=parseInt(numero);

	for(numeroAnterior=numero-1;numeroAnterior>0;numeroAnterior--){

		if(numero%numeroAnterior==0){

			sumaNumero=sumaNumero+numeroAnterior;
		}
		console.log(numeroAnterior);
	}

	if(numero==sumaNumero){

		console.log("Es perfecto");
	}else{

		console.log("No es perfecto");
	}	
	console.log(sumaNumero);

}//FIN DE LA FUNCIÓN