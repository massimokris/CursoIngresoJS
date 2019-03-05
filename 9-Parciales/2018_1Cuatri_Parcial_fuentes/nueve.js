function mostrar()
{
//Realizar el algoritmo que permita ingresar la marca de la gaseosa,la
//cantidad de litros (validar entre 1 litro, 2 litros y 3 litros), el precio el cual debe ser
//entre 30 y 100 y
//por document.write:
//a)La cantidad de precios pares.
//b)La marca y litros del más barato
//c)La cantidad de gaseosas que valen menos de 50.
//d)El promedio del precio de todas las gaseosa.
//e)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros

	//declaramos variables
	var marca;
	var litros;
	var precio;
	var acumuladorPreciosPares;
	var marcaBarata;
	var litroBarato;
	var precioBarato;
	var acumuladorMenosCincuenta;
	var promedio;
	var acumuladorGaseosas;
	var sumaPrecios;
	var precioMaximoMenos3litros;
	var precioMinimoMenos3litros;
	var contador3litros;
	var respues;

	//inicialisamos variables
	acumuladorPreciosPares=0;
	acumuladorMenosCincuenta=0;
	acumuladorGaseosas=0;
	sumaPrecios=0;
	contador3litros=0;
	respuesta="si";

	acumuladorGaseosas=parseInt(acumuladorGaseosas);
	sumaPrecios=parseInt(sumaPrecios);

	//pedimos el ingreso de datos hasta que el cliente desee
	while(respuesta=="si"){

		marca=prompt("Ingrese la marca de la gaseosa: ");
		litros=prompt("Ingrese la cantidad de litros: ");
		precio=prompt("Ingrese el precio");

		precio=parseInt(precio);
		litros=parseInt(litros);

		//validamos los litros entre 1 y 3
		while(litros<1 || litros>3){

			litros=prompt("Error, ingrese la cantidad de litros: ");

			litros=parseInt(litros);
		}

		//validamos el precio entre 30 y 100
		while(precio<30 || precio>100){

			precio=prompt("Error, ingrese el precio: ");

			precio=parseInt(precio);
		}

		//acumulamos la cantidad de precios pares
		if(precio%2==0){

			acumuladorPreciosPares++;
		}

		//obtenemos marca y los litros del mas barato
		if(acumuladorGaseosas==0){

			marcaBarata=marca;
			litroBarato=litros;
			precioBarato=precio;
		}else{

			if(precio<precioBarato){

				marcaBarata=marca;
				litroBarato=litros;
			}
		}

		//acumulamos la cantidad de gaseosas menores a 50
		if(precio<50){

			acumuladorMenosCincuenta++;
		}

		//obtenemos el precio maximo y minimo de las gaseosas menores a 3 litros
		if(acumuladorGaseosas==0){

			precioMinimoMenos3litros=precio;
			precioMaximoMenos3litros=precio;
			console.log(precioMaximoMenos3litros);
			console.log(precioMinimoMenos3litros);
		}else{

			if(precio>precioMaximoMenos3litros && litros<3){

				precioMaximoMenos3litros=precio;
				console.log(precioMaximoMenos3litros);
			}

			if(precio<precioMinimoMenos3litros && litros<3){

				precioMinimoMenos3litros=precio;
				console.log(precioMinimoMenos3litros);
			}
		}


		//acumulamos precios y cantidad de gaseosas para el promedio
		acumuladorGaseosas++;
		sumaPrecios=sumaPrecios+precio;

		respuesta=prompt("Para continuar ingrese (si): ");
	}

	//calculamos el promedio
	promedio=sumaPrecios/acumuladorGaseosas;

	//mostramos con document.write
	document.write(
			"a)La cantidad de precios pares: " +acumuladorPreciosPares+
			"<br>b)La marca y litros del más barato: " +marcaBarata+ " litros " +litroBarato+
			"<br>c)La cantidad de gaseosas que valen menos de 50: " +acumuladorMenosCincuenta+
			"<br>d)El promedio del precio de todas las gaseosa: " +promedio+
			"<br>e)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros: "+precioMaximoMenos3litros+ " y " +precioMinimoMenos3litros

		)
}
