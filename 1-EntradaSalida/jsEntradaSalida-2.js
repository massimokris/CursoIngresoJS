/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// con prompt pedimos la entrada de asignacion de la variable
	//(es una ventana emergente de entrada)
	// con alert mostramos el valor que queda asignado en la variable
	//(es una ventana emergente de salida)
	var name; 
	name = prompt("Please enter your name", "Your name");
    alert("Your name is: " +name);
}
