// EJERCICIO 1: Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

// var preguntabella = prompt("¿Eres bellisimo/a?");
// if (preguntabella === "sí") {
//   document.write("Ciertamente");
// } else if(preguntabella === "no") {
//   document.write("No te creo :)");
// } else{
//   document.write("Escribe exacactmamente:sí o no")
// }
// console.log(preguntabella)
//___________________________________________________________________________________________________________

// EJERCICIO 2 y 3
// var numeroDivisible = prompt(
//   "Escribe un número para saber si es divisible entre dos"
// );
// if (numeroDivisible % 2 === 0) {
//   alert(numeroDivisible + " número es divisible entre 2");
// } else {
//   alert(numeroDivisible + " número NO es divisible entre 2");
// }
// console.log(numeroDivisible);
//___________________________________________________________________________________________________________

// EJERCICIO 4: Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

// var primerNumero = prompt("Escribe un número");
// if (primerNumero === 1000) {
//   alert ( "Ganaste un premio")
// }
// else {
//   alert (primerNumero + " Lo sentimos sigue particiapando")
// }
//___________________________________________________________________________________________________________

// EJERCICIO 5: Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

// var primerNumero = prompt("Escribe un número");
// var segundoNumero = prompt("Escribe otro número");
// if (primerNumero > segundoNumero) {
//   alert(segundoNumero + " es menor que " + primerNumero);
// } else {
//   alert(primerNumero + " es menor que " + segundoNumero);
// }
// console.log(primerNumero,segundoNumero);
//___________________________________________________________________________________________________________

// EJERCICIO 6: Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

// var primerNumero = prompt("Escribe un número");
// primerNumero = parseInt(primerNumero)
// var segundoNumero = prompt("Escribe otro número");
// segundoNumero = parseInt(segundoNumero)
// var tercerNumero = prompt("Escribe otro número");
// tercerNumero = parseInt(tercerNumero)
// console.log(primerNumero, segundoNumero, tercerNumero);
// if (primerNumero === segundoNumero && primerNumero === tercerNumero) {
//   alert(`${primerNumero},${segundoNumero},${tercerNumero} son número iguales`);
// } else if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
//   alert(primerNumero + " es el número más grande");
// } else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
//   alert(segundoNumero + " es el número más grande");
// } else {
//     alert(tercerNumero + " es el número más grande");
// }
//___________________________________________________________________________________________________________

// EJERCICIO 7: Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

// var diasemana = prompt( "Escribe un día de la semana")
// if (diasemana == "Lunes") {
//   alert ("La primera oportunidad de la semana para ser feliz ")
// }
// else if (diasemana == "Viernes") { 
//   alert ("Que la fuerza del viernes te acompañe")
// }
// else if (diasemana == "Sabado") { 
//   alert ("modo de fin de semana 'on'")
// }
// else{
//   alert("Tú decides lo maravilloso que puede ser este día")
// }
//___________________________________________________________________________________________________________

//EJERCICIO 8: Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

// var calificacion = prompt("Califica tu dia en una escala del 1 al 10");
// calificacion = parseInt(calificacion);
// if (calificacion === 10) {
//   alert("Excelente");
// } else if (calificacion >= 1 && calificacion <= 5) {
//   alert("Reprobado");
// } else if (calificacion >= 6 && calificacion <= 8) {
//   alert("Regular");
// } else if (calificacion === 9) {
//   alert("Bien");
// } else {
//   alert("Error, escribe un número del 1 al 10");
// }

//___________________________________________________________________________________________________________

//EJERCICIO 9: Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija. En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

// var topping = prompt ("Dinos con que topping quieres tu helado")
// if (topping == "oreo") { 
//   alert ("El costo de tu helado es $60 MXN")
// }
// else if (topping === "KitKat") { 
//   alert ("El costo de tu helado es $65 MXN")
// }
// else if (topping == "brownie") { 
//   alert ("El costo de tu helado es $70 MXN")
// }
// else{
//   alert ("No tenemos este topping, lo sentimos. El costo de tu helado son topping es de $50 MXN")
// }

//___________________________________________________________________________________________________________

//EJERCICIO 10: Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

// var nivel = prompt("Nivel del curso? (Course, Carrera o Master)");
// var beca = prompt("Tipo de Beca? (Facebook, Google, Jesua)");
// // var duracion = prompt("Duración? (Course, Carrera, Master)");
// var mensualidad;
// var duracion;

// if(nivel == "Course") {
//   mensualidad = 4999;
//   duracion = 2;
// } else if (nivel == "Carrera") {
//   mensualidad = 3999;
//   duracion = 6;
// } else if (nivel == "Master") {
//   mensualidad = 2999;
//   duracion = 12;
// }

// var descuento;

// if(beca == "Facebook") {
//   descuento = 0.20

// } else if (beca == "Google") {
//   descuento = 0.15
// } else if (beca == "Jesua") {
//   descuento = 0.50
// } else { // Por si no tiene beca
//   descuento = 0
// }

// // A continuación se hace el calculo

// var costo_por_mes = mensualidad - (mensualidad*descuento)
// document.write("El costo por mes será de: " + costo_por_mes)
// document.write("<br> El costo total será de: " + costo_por_mes*duracion)
// document.write("<br> La duración será de: " + duracion)

//___________________________________________________________________________________________________________

//EJERCICIO 11: Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:

// var vehiculo = prompt("¿Cuál de los siguientes vehículos usas? (Coche, Moto o Autobús");
// var distancia = prompt("¿Cuántos Kilometros recorriste? (Solo escribe el número)");

// var preciokm;
// if(vehiculo == "Coche") {
//   preciokm = 0.20;
// } else if (vehiculo == "Moto") {
//   preciokm = 0.10;
// } else if (vehiculo == "Autobús") {
//   preciokm = 0.5;
// }

// var cargoextra;
// if(distancia > 0 && distancia < 100){
//     cargoextra = 5
// }
// else if(distancia > 100){
//     cargoextra = 10
// }else{
//     cargoextra = 0
// }

// var totalapagar = cargoextra + (preciokm * distancia)
// alert("Tu total a pagar es de: " + totalapagar)
