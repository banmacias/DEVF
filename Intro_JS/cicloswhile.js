//1.Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

// var primerNumero = prompt("Escribe un número");
// var index = 0;
// while (index <= primerNumero) {
//   if (index % 5 == 0) {
//     console.log(index);
//   }
//   index++;
// }

//2.Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

// var primerNumero = prompt("Escribe un número entre 1 y 50");
// var segundoNumero = prompt("Ahora escribe otro número diferente entre 1 y 50");

// primerNumero = parseInt(primerNumero);
// segundoNumero = parseInt(segundoNumero);

// var index = 1;

// while (index <= 50) {
//   console.log(index);
//   index++;
//   if (index === primerNumero || index === segundoNumero) {
//     console.log("¡Loteria!");
//   }
// }

//3.Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

// var arreglo = [];
// var userInput;
// while (!(userInput==0)){
//   userInput = prompt("Ingresa cualquier número. Para ver la lista de número introduce el 0");
//   arreglo.push(userInput);
// }
// console.log("Introdujiste estos números" + arreglo);

//4.Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

// var arreglo = [];
// var userInput;
// while (!(userInput == "")){
//   userInput = prompt("Ingresa cualquier letro o palabra");
//   arreglo.push(userInput);
// }
// alert("Introdujiste estas palabras:" + arreglo);


//5.Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

// var userInput = prompt("Introduce un día de la semana:");

// while (userInput.toLowerCase() !== "domingo") {
//   if (userInput.toLowerCase() === "lunes") {
//     alert("Es lunes. ¡Ánimo!");
//   } else if (userInput.toLowerCase() === "martes") {
//     alert("Es martes. ¡A darle con todo!");
//   } else if (userInput.toLowerCase() === "miércoles") {
//     alert("Es miércoles. ¡Ya estás a mitad de semana!");
//   } else if (userInput.toLowerCase() === "jueves") {
//     alert("Es jueves. ¡Casi llegas al viernes!");
//   } else if (userInput.toLowerCase() === "viernes") {
//     alert("Es viernes. ¡Fin de semana a la vista!");
//   } else if (userInput.toLowerCase() === "sábado") {
//     alert("Es sábado. ¡Disfruta tu día!");
//   } else {
//     alert("Día no válido. Inténtalo de nuevo.");
//   }
  
//   userInput = prompt("Introduce otro día de la semana:");
// }

// alert("¡Es domingo! Ve a descansar.");
