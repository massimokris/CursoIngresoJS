function mostrar()
{
//tomo la edad  
	var mesDelAño; 
	var mensaje;

	mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch(mesDelAño){

		case"Febrero":
		mensaje="Este mes tiene 28 dias";
		break;
		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Agosto":
		case"Octubre":
		case"Diciembre":
		mensaje="Este mes tiene 31 dias";
		break;
		case"Abril":
		case"Junio":
		case"Septiembre":
		case"Noviembre":
		mensaje="Este mes tiene 30 dias";
		break;


	}

	alert(mensaje);
	



}//FIN DE LA FUNCIÓN