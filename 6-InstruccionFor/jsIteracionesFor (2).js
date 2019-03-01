function mostrar()
{

	var numero;
	var numeroAnterior;

	numero=prompt("Ingrese un numero: ");
	var numero=parseInt(numero);

	for(numeroAnterior=numero-1;numeroAnterior>1;numeroAnterior--){

		if(numero%numeroAnterior==0){

			break;
		}
		console.log(numeroAnterior);
	}

	if(numeroAnterior==1){

		console.log("Es primo");
	}else{

		console.log("No es primo");
	}	
}