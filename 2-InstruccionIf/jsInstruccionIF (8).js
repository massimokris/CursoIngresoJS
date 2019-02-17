function mostrar()
{
//tomo la edad  
	var edadUno;
	var mensaje;

	edadUno=edad.value;

	if(edadUno>17 && estadoCivil!=="Casado" || estadoCivil!=="Divorciado"){

		mensaje="Es soltero y No es menor";

	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN