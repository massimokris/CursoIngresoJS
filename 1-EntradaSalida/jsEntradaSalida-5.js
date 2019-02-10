/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var name;
	var age;

    //tomo datos por id
	name=elNombre.value;
	age=laEdad.value;

    //muestro por alert con concatenacion 
	alert ("Your name is: "+name+" and your age is: " +age);

}

