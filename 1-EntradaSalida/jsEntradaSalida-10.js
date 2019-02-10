/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var amount;
	var finalamount;

	amount=importe.value;

	var amount+parseInt(amount);

	finalamount=amount*75/100;

    resultado.value=finalamount;
}
