/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var number1;
	var number2;
	var sum;

	number1=numeroUno.value;
	number2=numeroDos.value;

	var number1=parseInt(number1);
	var number2=parseInt(number2);
	
	sum=number1+number2;

	alert("The result is: "+sum);


}

