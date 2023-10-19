// =============================================================================
// 1. Calcula el precio total de los items de un objeto productPrices
// cuya propiedad es el nombre del producto y el valor es el precio del producto.
// Usa object.values()
// Ej objeto: { laptop: 800, phone: 600, tablet: 400, headphones: 100 }
// =============================================================================

function getTotalPrice(object) {
  return Object.values(object).reduce((acc,element) => acc + element, 0)
}

// =============================================================================
// 2. Dado un objeto con nombres de personas como claves y edades como valores,
// calcula la media de edad de las personas. Usa object.values()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// =============================================================================

function getAverageAge(object) {
  const sumAges = Object.values(object).reduce((acc,element) => acc + element, 0);
  return sumAges / Object.values(object).length;
}

// =============================================================================
// 3. Crea un array de objetos a partir de un objeto con nombres de personas
// como propiedades y edades como valores. Usa object.keys()
// Ej objeto: { Alice: 25, Bob: 30, Charlie: 28, David: 35 }
// Ej resultado: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, ...]
// =============================================================================

function getPeopleArray(object) {
  const arrayNames = Object.keys(object); 
  const arrayAges =  Object.values(object);
  
  const result = [];

  for ( i=0 ; i < arrayNames.length ; i++ ){
    result[i] = {
      name: arrayNames[i],
      age: arrayAges [i]
    }
  }
  return result;
}

// =============================================================================
// 4. Dado un objeto con nombres de frutas como claves y su cantidad como valor,
// filtra las frutas que tienen una cantidad superior a 10 y crea un array de
// objetos con el nombre de la fruta y su cantidad. Usa object.entries().
// Ej objeto: { Apple: 5, Banana: 15, Orange: 8, Grape: 12 }
// Ej resultado: [ { fruit: 'Banana', quantity: 15 }, { fruit: 'Grape', quantity: 12 }]
// =============================================================================



function getAbundantFruits(object) {
  const arrays = Object.entries(object); // arrays = [ [apple,5] , [banana,15] , [orange,8] ]
  const result = [];
  let aux  = 0;

  for (i=0 ; i < arrays.length ; i++ ){
    if ( arrays[i][1] > 10){
      result[aux] = {
        fruit: arrays[i][0],
        quantity: arrays[i][1]
      }
      aux++;
    }
  }
  return result;
}

// =============================================================================
// 5. Calcula la suma de todos los caracteres de un objeto, tanto la suma de los
// caracteres de las propiedades como la suma de los caracteres de los valores.
// El resultado debe ser un único numero.
// book: { titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', genero: 'Fantasía' }
// =============================================================================
//    object = {
//      titulo: 'El señor de los anillos',
//      autor: 'J.R.R. Tolkien', 
//      genero: 'Fantasia'
//    } 

function getCharacterCount(object) {

  const sumProperties = Object.keys(object).reduce((acc,element) => acc + element, '').length;
  const sumValues = Object.values(object).reduce((acc,element) => acc + element, '').length;

  return sumProperties + sumValues;
}
