function mostrar()
{
	//cargar un celular
	//pedir marca, tamaño, precio
	//mostrar precio mayor, marca mayor

	var marca;
	var tamaño;
	var precio;
	var respuesta;
	var precioMayorMarca;
	var precioMayor;
	var precioMayorTamaño;
	var contador;
	var precioPromedio;
	var cantidadCelulares;
	var sumaPrecioCelulares
	var precioMayorDosmil;
	var precioMenor;
	var precioMenorMarca;
	var precioMenorTamaño;
	var primerCelularMil;
	var precioUltimoLg;

	contador=0;
	cantidadCelulares=0;
	precioMayorDosmil=0;
	sumaPrecioCelulares=0;
	respuesta="si";

	sumaPrecioCelulares=parseInt(sumaPrecioCelulares);
	cantidadCelulares=parseInt(cantidadCelulares);

	while(respuesta=="si"){

		marca=prompt("Ingrese la marca: ");
		tamaño=prompt("Ingrese el tamaño: ");
		precio=prompt("Ingrese el precio: ");

		precio=parseInt(precio);

		while(tamaño<1 || tamaño>10){

			tamaño=prompt("Error, ingrese el tamaño: ");
		}

		while(precio<1000 || precio>100000){

			precio=prompt("Error, ingrese el precio: ");
		}

		if(contador==0){

			precioMayorMarca=marca;
			precioMayor=precio;
			precioMayorTamaño=tamaño;
			precioMenor=precio;
			precioMenorMarca=marca;
			precioMenorTamaño=tamaño;
			sumaPrecioCelulares=sumaPrecioCelulares+precio;
			cantidadCelulares=cantidadCelulares+1;
		}else{

			sumaPrecioCelulares=sumaPrecioCelulares+precio;
			cantidadCelulares=cantidadCelulares+1;

			if(precio>precioMayor){

				precioMayorMarca=marca;
				precioMayor=precio;
				precioMayorTamaño=tamaño;
			}else{

				if(precio<precioMenor){

					precioMenor=precio;
					precioMenorMarca=marca;
					precioMenorTamaño=tamaño;
				}
			}
		}

		if(precio>2000){

			precioMayorDosmil=precioMayorDosmil+1;
		}

		if(marca="" && precio==1000){

			primerCelularMil=marca;
		}

		if(marca=="lg"){

			precioUltimoLg=precio;
		}



		contador=contador+1;
		respuesta=prompt("Para continuar ingrese (si): ");
	}

	precioPromedio=sumaPrecioCelulares/cantidadCelulares;

	alert("El celular mas caro cuesta: "+precioMayor+" y su marca es: "+precioMayorMarca);

	document.write(
			"El precio promedio es: "+precioPromedio+
			"Celulares > 2000: "+precioMayorDosmil+
			"El celular mas caro es: "+precioMayorMarca+
			" tiene un tamaño de: "+precioMayorTamaño+
			" y costo: "+precioMayor+
			"El celular mas barato es: "+precioMenorMarca+
			" tiene un tamaño de: "+precioMenorTamaño+
			" y costo: "+precioMenor+
			"El primer celu que vale 1000 es: "+primerCelularMil+
			"El precio del ultimo Lg es: "+precioUltimoLg
			)

}
