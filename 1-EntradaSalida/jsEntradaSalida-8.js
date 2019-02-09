/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividend;
	var divider;
	var rest;
	
	dividend=numeroDividendo.value;
	divider=numeroDivisor.value;

	var dividend=parseInt(dividend);
	var divider=parseInt(divider);

	rest=dividend%divider;

	alert("the rest is: "+rest);
}
