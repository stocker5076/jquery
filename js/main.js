// 1. Pon tu nombre al atributo value del campo first name
// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
// 3. Cambia la etiqueta de First name a 'Tu nombre'
// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
// 5. Escoge la opción Female de la pregunta de género.
// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
// 7. Encuentra la primera form del documento y pon el atributo name = job_info
// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
// 9. Agrega un título a la pregunta Male/Female 'Gender'
// 10. Agrega una pregunta Email: con un input de tipo texto después de last name
// 11. Agrega la clase form a ambas formas


$('input:first').val("Franciscow");

$('select:first').val("Monday");

$("label[name='first_name_label']").text("Tu nombre");

console.log($('select:first').attr('name'));

$("input[type='radio']").;



