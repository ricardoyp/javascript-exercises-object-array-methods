![Alt text](image.png)

# Ejercicios con objetos

Este repositorio contiene cinco ejercicios para practicar el trabajo con objetos en JavaScript.

## Ejercicio 1

Calcula el precio total de los artículos de un objeto `preciosProducto`, donde la propiedad es el nombre del producto y el valor es el precio del producto. Usa `Object.values()`.

Ejemplo de objeto: `{ laptop: 800, teléfono: 600, tablet: 400, auriculares: 100 }`

Firma de la función: `function getTotalPrice(object)`

## Ejercicio 2

Dado un objeto con los nombres de las personas como claves y las edades como valores, calcule la edad media de las personas. Utiliza `Object.values()`.

Objeto de ejemplo: `{ Alice: 25, Bob: 30, Charlie: 28, David: 35 }`

Firma de la función: `function getAverageAge(object)`

## Ejercicio 3

Crear un array de objetos a partir de un objeto con los nombres de las personas como propiedades y las edades como valores. Usa `Object.keys()`.

Ejemplo objeto: `{ Alice: 25, Bob: 30, Charlie: 28, David: 35 }`

Ejemplo de resultado: `[{ nombre: 'Alice', edad: 25 }, { nombre: 'Bob', edad: 30 }, ...]`.

Firma de la función: `function getPeopleArray(object)`

## Ejercicio 4

Dado un objeto con nombres de frutas como claves y su cantidad como valores, filtra las frutas que tengan una cantidad mayor de 10 y crea un array de objetos con el nombre de la fruta y su cantidad. Utiliza `Object.entries()`.

Ejemplo de objeto: `{ Manzana: 5, Plátano: 15, Naranja: 8, Uva: 12 }`.

Ejemplo de resultado: `[ { fruta: 'Plátano', cantidad: 15 }, { fruta: 'Uva', cantidad: 12 }]`

Firma de la función: `function getAbundantFruits(object)`

## Ejercicio 5

Calcular la suma de todos los caracteres de un objeto, tanto la suma de los caracteres de las propiedades como la suma de los caracteres de los valores. El resultado debe ser un único número.

Ejemplo de objeto: `{ title: 'El Señor de los Anillos', author: 'J.R.R. Tolkien', género: 'Fantasía' }`

Firma de la función: `function getCharacterCount(object)`
