function mostrar()
{
	var compra;
	var descuento;
	var conIva;

	compra=prompt("Ingrese el valor de su compra: ");

	descuento=compra-(compra*10/100);
    conIva=descuento+(descuento*21/100);


	alert("Tu compra es de: "+compra+" tienes un descuento del 10% queda en "+descuento+", mas el iva es: "+conIva);



  
}
