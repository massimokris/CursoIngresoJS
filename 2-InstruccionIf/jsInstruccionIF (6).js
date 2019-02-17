function mostrar()
{
//tomo la edad  
	var edadUno;
	var mensaje;

	edadUno=edad.value;

	if(edadUno>17){


		mensaje="Es mayor de edad ";

	}else{

		if(edadUno<13){

			mensaje="Es niño";
		}else{

			mensaje="Es adolescente";
		}
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN