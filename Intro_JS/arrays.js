
// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

// var arraynumeros = []


let numeros = [];

for (let i = 0; i < 10; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100); 
  numeros.push(numeroAleatorio); 
}

console.log(numeros);


//____________________________________________________________________________________________________________

// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.


//____________________________________________________________________________________________________________

// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.



