function mostrar()
{

	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var precioMayor;
	var descuento;
	var subtotal;
	var mensaje;
	var total;

	precioUno=prompt("Ingrese el primer producto: ");
	precioDos=prompt("Ingrese el primer producto: ");
	precioTres=prompt("Ingrese el primer producto: ");
	precioCuatro=prompt("Ingrese el primer producto: ");

	var precioUno=parseInt(precioUno);
	var precioDos=parseInt(precioDos);
	var precioTres=parseInt(precioTres);
	var precioCuatro=parseInt(precioCuatro);

	subtotal=precioUno+precioDos+precioTres+precioCuatro;

	descuento=100;

	if(subtotal>100){

		descuento=90;
	}else{

		if(subtotal<50){

			descueto=115;
		}else{

			descuento=95;
		}
	}

	total=subtotal*descuento/100;

	if(precioUno>precioDos && precioUno>precioTres && precioUno>precioCuatro){

		mensaje=("El precio mayor es "+precioUno+" y el total es: "+total);
	}else{

		if(precioDos>precioUno && precioDos>precioTres && precioDos>precioCuatro){

			mensaje=("El precio mayor es "+precioDos+" y el total es: "+total);
		}else{

			if(precioTres>precioUno && precioTres>precioTres && precioTres>precioCuatro){

				mensaje=("El precio mayor es "+precioTres+" y el total es: "+total);
			}else{

				mensaje=("El precio mayor es "+precioCuatro+" y el total es: "+total);
			}
		}
	}

	alert(mensaje);

	
	//var amigos;
	//var conPropina;
	//var pagoIndividual;
	//var total;
	//var pagoTotal;

	//total=prompt("Ingrese el total a pagar: ");
	//amigos=prompt("Ingrese la cantidad de amigos: ")

	//var conPropina=parseInt(conPropina);
	//var total=parseInt(total);
    
    //conPropina=total*10/100;
    //pagoTotal=conPropina+total;
    //pagoIndividual=pagoTotal/amigos;

    //alert(+amigos+" amigos comieron y gastaron "+total+" dieron de propina "+conPropina+" en total gastaron "+pagoTotal+" y cada uno pago "+pagoIndividual)

}

