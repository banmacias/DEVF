
// Ejemplo clase contador&for
// var contador = 0;
// for (var index = 1; index <= 10; index ++) {
//     if (index % 2== 0) {
//         contador = contador +1; 
//         console-log('${index} es multiplo de 2');
//     }
// }
// console.log("De 0 a 10 existen ${contador} mutiplos de 2")


//1.Crea un programa que imprima en consola los números impares del 1 al 50.

// for (var index = 1; index <= 50; index ++){
//     if (!    (index % 2 == 0))
//     console.log(index + " es número impar")
// }

//2.Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6

// var pokemons = [ 'bulbasaur',
// 'ivysaur',
// 'venusaur',
// 'charmander',
// 'charmeleon',
// 'charizard',
// 'squirtle',
// 'wartortle',
// 'blastoise',
// 'caterpie',
// 'metapod',
// 'butterfree',
// 'weedle',
// 'kakuna',
// 'beedrill',
// 'pidgey',
// 'pidgeotto',
// 'pidgeot',
// 'rattata',
// 'raticate',
// 'spearow',
// 'fearow',
// 'ekans',
// 'arbok',
// 'pikachu',
// 'raichu',
// 'sandshrew',
// 'sandslash',
// 'nidoran-f',
// 'nidorina',
// 'nidoqueen',
// 'nidoran-m',
// 'nidorino',
// 'nidoking',
// 'clefairy',
// 'clefable',
// 'vulpix',
// 'ninetales',
// 'jigglypuff',
// 'wigglytuff',
// 'zubat',
// 'golbat',
// 'oddish',
// 'gloom',
// 'vileplume',
// 'paras',
// 'parasect',
// 'venonat',
// 'venomoth',
// 'diglett',
// 'dugtrio',
// 'meowth',
// 'persian',
// 'psyduck',
// 'golduck',
// 'mankey',
// 'primeape',
// 'growlithe',
// 'arcanine',
// 'poliwag',
// 'poliwhirl',
// 'poliwrath',
// 'abra',
// 'kadabra',
// 'alakazam',
// 'machop',
// 'machoke',
// 'machamp',
// 'bellsprout',
// 'weepinbell',
// 'victreebel',
// 'tentacool',
// 'tentacruel',
// 'geodude',
// 'graveler',
// 'golem',
// 'ponyta',
// 'rapidash',
// 'slowpoke',
// 'slowbro',
// 'magnemite',
// 'magneton',
// 'farfetchd',
// 'doduo',
// 'dodrio',
// 'seel',
// 'dewgong',
// 'grimer',
// 'muk',
// 'shellder',
// 'cloyster',
// 'gastly',
// 'haunter',
// 'gengar',
// 'onix',
// 'drowzee',
// 'hypno',
// 'krabby',
// 'kingler',
// 'voltorb' ] //var pokemons2 = require("./pokemons.js");

// var numero = 24 //prompt("Ingresa un número alto:")
// for (var index = 0; index <= numero; index++){
//     if (index % 5 == 0)
//     console.log (pokemons[index])
// }

//3.Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

// var arreglo = [4,"dos",8,"tres",5,9,1,"cero"]
// for (var index = 0; index < arreglo.length; index ++){
//     if (typeof arreglo[index] === "number"){
//     console.log (arreglo[index]);
//     }
// }



