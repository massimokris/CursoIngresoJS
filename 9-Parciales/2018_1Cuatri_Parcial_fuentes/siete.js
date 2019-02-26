function mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var sumaNotas;
	var notaBaja;
	var sexoNotaBaja;
	var contador;
	var contadorVarones;

	contador=0;
	sumaNotas=0;
	contadorVarones=0;
	notaBaja=0;

	

	while(contador<5){

		nota=prompt("Ingrese la nota: ");
		console.log(notaBaja);

		var nota=parseInt(nota);
		var sumaNotas=parseInt(sumaNotas);
		
		sumaNotas=sumaNotas+nota;

		sexo=prompt("Ingrese el sexo: ");
		
		console.log(sumaNotas);
		
		while(nota<0 || nota>10){

			nota=prompt("error, ingrese una nota valida: ");
		}

		while(sexo!="m" && sexo!="f"){

			sexo=prompt("error, ingrese un sexo valido: ");
		}

		if(contador==0){

			notaBaja=nota;
			sexoNotaBaja=sexo;
		}else{

			if(nota<notaBaja){

				notaBaja=nota;
				sexoNotaBaja=sexo;
			}
		}

		if(nota>5 && sexo=="m"){

			contadorVarones=contadorVarones+1;
		}

		contador=contador+1;
	}

	promedio=sumaNotas/contador;

	alert("El promedio de los alumnos es: "+promedio+" la nota mas baja es: "+notaBaja+ " y su sexo es: "+sexoNotaBaja+", "+contadorVarones+" varones sacaron mas de 5");


}
