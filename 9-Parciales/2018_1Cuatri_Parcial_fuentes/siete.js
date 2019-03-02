function mostrar()
{
//1-en siete.js,
//Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
//kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
//para solido o liquido, de 5 vehículos de prueba ,informar por alert:
//1-El promedio de las velocidades totales.
//2-La velocidad más baja y el tipo de combustible de ese vehículo.
//3-La cantidad de combustibles líquidos que su velocidad supere los 100
//kilómetros.
//4-la velocidad más alta de los de combustible sólido

	var velocidad;
	var combustible;
	var respuesta;
	var promedioVelocidad;
	var sumaVelocidad;
	var acumuladorVelocidad;
	var velocidadBaja;
	var combustibleBajo;
	var acumuladorLiquidoMayorCien;
	var velocidadAltaSolido;

	respuesta="si";
	acumuladorLiquidoMayorCien=0;
	acumuladorVelocidad=0;
	sumaVelocidad=0;
	velocidadAltaSolido=0;

	sumaVelocidad=parseInt(sumaVelocidad);

	while(respuesta=="si"){

		velocidad=prompt("Ingrese la velocidad en kilometros");
		combustible=prompt("Ingrese el tipo de combustible");

		velocidad=parseInt(velocidad);

		while(velocidad<0 || velocidad>250){

			velocidad=prompt("Error, ingrese una velocidad valida: ");

			velocidad=parseInt(velocidad);
		}

		while(combustible!=="s" && combustible!=="l"){

			combustible=prompt("Error, ingrese un combustible valido: ");
		}
			
			if(acumuladorVelocidad==0){

				combustibleBajo=combustible;
				velocidadBaja=velocidad;
			}else{

				if(velocidad<velocidadBaja){

					combustibleBajo=combustible;
					velocidadBaja=velocidad;
				}
			}

			if(velocidad>100 && combustible=="l"){

				acumuladorLiquidoMayorCien=acumuladorLiquidoMayorCien+1;
			}

			if(velocidad>velocidadAltaSolido && combustible=="s"){

				velocidadAltaSolido=velocidad;
			}

		respuesta=prompt("Para continuar ingrese (si):  ");
		acumuladorVelocidad=acumuladorVelocidad+1;
		sumaVelocidad=sumaVelocidad+velocidad;
	}	
	
	promedioVelocidad=sumaVelocidad/acumuladorVelocidad;

	alert("El promedio es: "+promedioVelocidad+" la velocidad mas baja es: "+velocidadBaja+ " y su combustible es: "+combustibleBajo+" combustibles con velocidad > 100: "+acumuladorLiquidoMayorCien+" velocidad mas alta de combustible solido: "+velocidadAltaSolido);
}	





