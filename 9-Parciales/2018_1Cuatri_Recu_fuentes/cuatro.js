function mostrar()
{
	var amigos;
	var conPropina;
	var pagoIndividual;
	var total;
	var pagoTotal;

	total=prompt("Ingrese el total a pagar: ");
	amigos=prompt("Ingrese la cantidad de amigos: ")

	var conPropina=parseInt(conPropina);
	var total=parseInt(total);
    
    conPropina=total*10/100;
    pagoTotal=conPropina+total;
    pagoIndividual=pagoTotal/amigos;

    alert(+amigos+" amigos comieron y gastaron "+total+" dieron de propina "+conPropina+" en total gastaron "+pagoTotal+" y cada uno pago "+pagoIndividual)



}
