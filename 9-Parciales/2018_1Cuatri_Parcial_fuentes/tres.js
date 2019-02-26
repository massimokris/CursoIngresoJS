function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese el precio: ");
	descuento=prompt("Ingrese el descuento: ");

	var precio=parseInt(precio);
	var descuento=parseInt(descuento);

	precioFinal=precio-(precio*descuento/100);
	elPrecioFinal.value=precioFinal;
}
