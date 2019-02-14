function mostrar()
{
	var amigos;
	var conPropina;
	var conIva;
	var pagoIndividual;
	var total;
	var pagoTotal;

	total=prompt("Ingrese el total a pagar: ");
	amigos=prompt("Ingrese la cantidad de amigos: ")

	var conPropina=parseInt(conPropina);
	var conIva=parseInt(conIva);
	var total=parseInt(total);
    
    conPropina=total*10/100;
    conIva=total*21/100;
    pagoTotal=conPropina+conIva+total;
    pagoIndividual=pagoTotal/amigos;

    alert(+amigos+" amigos comieron y gastaron "+total+" dieron de propina "+conPropina+" y de iva "+conIva+" en total gastaron "+pagoTotal+" y cada uno pago "+pagoIndividual)



}
