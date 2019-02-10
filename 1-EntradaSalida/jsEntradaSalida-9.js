/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaramos variables
	var salary;
	var finalSalary;

    //tomo importe por ID
    salary=sueldo.value;
    
    //transformo a enteros por parseInt
	var salary=parseInt(salary);
	var finalSalary=parseInt(finalSalary);
    
    //aplico la ecuacion
 	finalSalary=salary*(1+10/100);

    //muestro el resultado por ID
    resultado.value=finalSalary;

	
}
