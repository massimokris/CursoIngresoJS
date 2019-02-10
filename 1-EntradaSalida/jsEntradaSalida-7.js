/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var number1;
	var number2;
	var result;

	number1=numeroUno.value;
	number2=numeroDos.value;

	var number1=parseInt(number1);
	var number2=parseInt(number2);

	result=number1+number2;

	alert ("the sum is: "+result);
}

function restar()
{
	
	var number1;
	var number2;
	var result;

	number1=numeroUno.value;
	number2=numeroDos.value;

	number1=parseInt(number1);
	number2=parseInt(number2);

	result=number1-number2;

	alert ("the substraction is: "+result);
}

function multiplicar()
{ 
	var number1;
	var number2;
	var result;

	number1=numeroUno.value;
	number2=numeroDos.value;

	var number1=parseInt(number1);
	var number2=parseInt(number2);

	result=number1*number2;

	alert ("The multiplication is: " +result);
}

function dividir()
{
	var number1;
	var number2;
	var result;

	number1=numeroUno.value;
	number2=numeroDos.value;

	var number1=parseInt(number1);
	var number2=parseInt(number2);

	result=number1%number2;

	alert("The division is: "+result); 
}


