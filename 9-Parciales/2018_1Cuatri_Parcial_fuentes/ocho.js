function mostrar()
{
//Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
//superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
//el ingreso por document.write:
//1-La cantidad de países con superficie impar.
//2-La cantidad de países con superficie menor a 100
//3-La cantidad de países con superficie igual a 100
//4-El nombre del primer país que superó los 100 de superficie
//5-El promedio de kilómetros ingresados.
//6-El nombre del que menos territorio tiene.

	var pais;
	var superficie;
	var acumuladorSuperficieImpar;
	var acumuladorSuperficieMenorCien;
	var acumuladorSuperficieIgualCien;
	var primerPaisMayorCien;
	var contadorPrimerPaisMayorCien;
	var promedioSuperficie;
	var acumuladorSuperficie;
	var sumaSuperficie;
	var superficieMenor;
	var paisMenor;
	var respuesta;

	respuesta="si";
	acumuladorSuperficieImpar=0;
	acumuladorSuperficieMenorCien=0;
	acumuladorSuperficieIgualCien=0;
	acumuladorSuperficie=0;
	sumaSuperficie=0;
	contadorPrimerPaisMayorCien=0;


	sumaSuperficie=parseInt(sumaSuperficie);

	while(respuesta=="si"){

		pais=prompt("Ingrese un pais: ");
		superficie=prompt("Ingrese la superficie: ");

		superficie=parseInt(superficie);

		while(superficie<0 || superficie>10000){

			superficie=prompt("Error, ingrese una superficie valida: ");

			superficie=parseInt(superficie);
		}

		if(superficie%2!==0){

			acumuladorSuperficieImpar=acumuladorSuperficieImpar+1;
		}

		if(superficie==100){

			acumuladorSuperficieIgualCien=acumuladorSuperficieIgualCien+1;
		}else{

			if(superficie<100){

				acumuladorSuperficieMenorCien=acumuladorSuperficieMenorCien+1;
			}
		}

		if(acumuladorSuperficie==0){

			superficieMenor=superficie;
			paisMenor=pais;
		}else{

			if(superficie<superficieMenor){

				superficieMenor=superficie;
				paisMenor=pais;
			}
		}

		if(superficie>100 && contadorPrimerPaisMayorCien==0){

			primerPaisMayorCien=pais;
			contadorPrimerPaisMayorCien=contadorPrimerPaisMayorCien+1;
		}

		acumuladorSuperficie=acumuladorSuperficie+1;
		sumaSuperficie=sumaSuperficie+superficie;
		respuesta=prompt("Para continuar ingrese (si): ");
	}
		promedioSuperficie=sumaSuperficie/acumuladorSuperficie;
	
	document.write(
			"1-La cantidad de países con superficie impar: "+acumuladorSuperficieImpar+
			"<br>2-La cantidad de países con superficie menor a 100: "+acumuladorSuperficieMenorCien+
			"<br>3-La cantidad de países con superficie igual a 100: "+acumuladorSuperficieIgualCien+
			"<br>4-El nombre del primer país que superó los 100 de superficie: "+primerPaisMayorCien+
			"<br>5-El promedio de kilómetros ingresados: "+promedioSuperficie+
			"<br>6-El nombre del que menos territorio tiene: "+paisMenor

		)
	
}

