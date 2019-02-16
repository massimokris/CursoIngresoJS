function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	var mensaje;

	notaRandom=Math.floor((Math.random()*10)+1);

	console.log(notaRandom);

	if(notaRandom>8){
		mensaje="EXCELENTE";
	}else{
		if(notaRandom<4){
			mensaje="Vamos, la proxima se puede";
		}else{
			mensaje="APROBO"
		}
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN