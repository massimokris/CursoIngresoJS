function mostrar()
{
//tomo la edad  
	var mesDelAño;
	var mensaje;

   mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño) {
  case "Enero":
    mensaje="Que comiences bien el año ";
    break;
  case "Marzo":
    mensaje=("A clases")
    break;
  case "Julio":
    mensaje="Se vienen las Vacaciones";
    break;
  case "Diciembre":
    mensaje="Felices fiestas! ";
    break;  
  
}

alert(mensaje);




}//FIN DE LA FUNCIÓN