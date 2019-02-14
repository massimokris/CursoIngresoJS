
function mostrar()
{

	var mascotaUno;
	var mascotaDos;
	var pesoUno;
    var pesoDos;
	var suma;

	mascotaUno=prompt("Ingrese el nombre de su mascota uno ");
	mascotaDos=prompt("Ingrese el nombre de su mascota dos ");
	pesoUno=prompt("Ingrese el peso de su mascota uno ");
	pesoDos=prompt("Ingrese el peso de su mascota dos ");

	var pesoUno=parseInt(pesoUno);
	var pesoDos=parseInt(pesoDos);

	suma=pesoUno+pesoDos;



	alert("Tienes dos mascotas: " +mascotaUno+ " y, "+mascotaDos+" que pesan "+pesoUno+ " y " +pesoDos+ "kilos, la suma de los kilos es " +suma);

}
