function mostrar()
{

	var numero;
	var numeroAnterior;
	var numeroRecorrido;

	numero=prompt("Ingrese un numero: ");
	var numero=parseInt(numero);

	for(numeroRecorrido=numero;numeroRecorrido>0;numeroRecorrido--){

		for(numeroAnterior=numero-1;numeroAnterior>1;numeroAnterior--){

			if(numero%numeroAnterior==0){

				console.log("Es primo");
			}	
			console.log(numeroAnterior);
		}

		if(numeroRecorrido==1){

		console.log("Es primo");
		}

		console.log(numeroRecorrido);
	}
	

		
}//FIN DE LA FUNCIÓN