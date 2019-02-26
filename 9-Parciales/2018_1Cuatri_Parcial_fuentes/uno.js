
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho del rectangulo: ");
	largo=prompt("ingrese el largo del rectangulo");

	var ancho=parseInt(ancho);
	var largo=parseInt(largo);

	perimetro=(ancho*2)+(largo*2);

	alert("El ancho de rectangulo es: "+ancho+" el largo del rectangulo es: "+largo+" y su perimetro es: "+perimetro);

}
