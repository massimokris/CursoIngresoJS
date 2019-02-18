/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidadLamparas;
	var lamparitasBajoConsumo;
	var precioFinal;
	var porcentaje;
	var precioBruto;
	var ingresoBruto;
	var marca;

	lamparitasBajoConsumo=35;
	porcentaje=100;

	lamparitasBajoConsumo=parseInt(lamparitasBajoConsumo);

	cantidadLamparas=cantidad.value;
	marca=Marca.value;

	precioBruto=lamparitasBajoConsumo*cantidadLamparas;

	if(cantidadLamparas>5 && marca=="ArgentinaLuz"){

		porcentaje=50;

	}else{

		if(cantidadLamparas==5){

			if(marca == "ArgentinaLuz"){

				porcentaje=60;
			}else{

				porcentaje=70;
			}
		}else{

			if(cantidadLamparas==4){

				if(marca=="ArgentinaLuz" || marca=="FelipeLamparas"){

					porcentaje=75;
				}else{

					porcentaje=80;
				}
			}else{

				if(cantidadLamparas==3){

					if(marca=="ArgentinaLuz"){

						porcentaje=85;
					}else{

						if(cantidadLamparas==3){

							if(marca=="FelipeLamparas"){

								porcentaje=90;
							}else{

								porcentaje=95;
							}
						}
					}
				}
			}
		}
	}

	precioFinal=precioBruto*porcentaje/100;
	precioDescuento.value=precioFinal;
	//alert(precioFinal);
	if(precioFinal>120){

		ingresoBruto=precioFinal*10/100;
		alert("Usted pago "+ingresoBruto+" de IIBB");
	}
}
