function mostrar()
{
	var notas;
	var sexo;
	var promedio;
	var notaBaja;
	var mayorCinco;
	var contador;
	var sumaNotas;
	var acumuladorVarones;

	contador=0;
	sumaNotas=0;
	acumuladorVarones=0;

	while(contador<5){

		contador=contador+1;
		notas=prompt("ingrese la nota: ");
		notas=parseInt(notas);
		sexo=prompt("ingrese el sexo: ");
		if(notas>notaBaja){

			notaBaja=notas;
		} 

		if(notas>5 && sexo=="m"){

		acumuladorVarones=acumuladorVarones+1;
		}
		//sumaNotas=sumaNotas+numero;
	}

  	promedio=sumaNotas/notas;
	alert("el promedio de todas las notas es: "+promedio+" la nota mas baja es: "+notaBaja+" y su sexo es: "+sexo+" hay "+acumuladorVarones+" varones que su nota es mas que 5 ");
}
