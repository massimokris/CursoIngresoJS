function mostrar()
{
	var habitacion;
	var precioHabitacion;
	var promociones;
	var tipoDePago;
	var tipoDePaquete;
	var subtotal;
	var total;
	var dias;

	promociones=100;

	habitacion=prompt("Ingrese la habitacion: ");
	precioHabitacion=prompt("Precio de la habitacion: ");
	dias=prompt("Cuantos dias se quedara: ");
	tipoDePago=prompt("Tipo de pago: ");
	tipoDePaquete=prompt("Tipo de Paquete: ");

	switch(tipoDePago){

		case"visa":
		case"mercadoPago":
		promociones=90;
		break;
		case"paypal":
		promociones=85;
		case"efectivo":
		promociones=80
		break;
		default:
		promociones=95;
	}

	subtotal=precioHabitacion*dias;
	total=subtotal*promociones/100;
	alert("Su habitacion es: "+habitacion+" El precio por dia es: "+precioHabitacion+" el precio subtotal es: "+subtotal+" Usted pagara: "+total+" y tendra el paquete "+tipoDePaquete);

}

switch(tipoDePaquete){
			case"todoIncluido":
			promociones=75;
		}
		break;
		switch(tipoDePaquete){
			case"soloDesayunos":
			promociones=70;
			break;
			case"todoIncluido":
			promociones=65;
			break;
		}
