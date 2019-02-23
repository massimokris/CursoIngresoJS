function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var numero;
	var respuesta;

	respuesta='si';
	contador=0;
	positivo=0;
	negativo=1;

	while(1){

		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# : ");
		numero=parseInt(numero);
		//acumulador=acumulador+numero;

		respuesta=prompt("Si para continuar");
		if(respuesta!="si"){

			break;
		}else{

			if(numero<0){

				negativo=negativo+numero;
			}else{

				positivo=positivo+numero;
			}
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN