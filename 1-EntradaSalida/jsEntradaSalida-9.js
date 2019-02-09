/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salary;
	var finalSalary;

    salary=sueldo.value;

	var salary=parseInt(salary);
	var finalSalary=parseInt(finalSalary);

	finalSalary=salary*(1+10/100);

    resultado.value=finalSalary;

	
}
