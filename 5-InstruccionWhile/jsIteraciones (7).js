function mostrar()
{


	var contador;
	var acumulador;
	var respuesta;
	var numero;

	contador=0;
	acumulador=0;
	respuesta="si";

	while(respuesta=="si"){

		contador=contador+1;
		numero=prompt("Ingrese el numero "+contador+"# : ");
		numero=parseInt(numero);
		acumulador=acumulador+numero;

		respuesta=prompt("Si para continuar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN