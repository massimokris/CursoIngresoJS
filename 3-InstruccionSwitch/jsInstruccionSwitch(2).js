function mostrar()
{
//tomo la edad  
var mesDelAño;
var mensaje;

	mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño){
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	mensaje="Falta para el invierno ";
	  break;
	case "Julio":
	case "Agosto":
	mensaje="Abrigate que hace frio ";
	  break;
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	mensaje="Ya pasamos el frio, ahora calor "
	  break;
}
//alert (mesDelAño);
alert(mensaje);




}//FIN DE LA FUNCIÓN