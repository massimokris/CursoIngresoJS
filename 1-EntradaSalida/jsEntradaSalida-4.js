/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//
    var name; 
	name = prompt("Your name is: ");
	//Hay dos formas de invocar
	//(la comentada es una, la aplicada es otra)
	// nombre=elNombre.value;
    document.getElementById('elNombre').value=name;
    // voy a agregar un alert que no pide el ejercicio pero lo quiero agregar
    alert(name);
}