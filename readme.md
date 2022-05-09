# **FizzBuzz**

**Proyecto para resolver FIZZBUZZ, semana 4**

Ejercicio que muestra n números que agrega la palabra Fizz a
los múltiplos de 3, la palabra Buzz a los múltiplos de 5 y la palabra FizzBuzz
cuando son múltiplos de 3 y de 5. Con este script se logró:

* Obtener la lista de explorers que solo están en node.
* Obtener la cantidad de explorers que están en node.
* Obtener la lista de usuarios de github de los explorers
  que están en node.

Si el campo score del explorer es divisible entre 3,
entonces se agrega un campo nuevo llamado trick cuyo valor será FIZZ. Si el
campo score del explorer es divisible entre 5, entonces se agrega un campo
nuevo llamado trick cuyo valor será BUZZ. Si el campo score del explorer es
divisible entre 3 y 5, entonces se agrega un campo nuevo llamado trick cuyo
valor será FIZZBUZZ. Si el campo score no es divisible por ninguna de las
reglas anteriores, se agrega un campo nuevo llamado trick cuyo valor será el
del score.

**Requerimientos:**

Crea un API para usar la funcionalidad anterior:

| Endpointcolcol                                 | Requestcolcol                              | col3col                                                                                |
| ---------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------- |
| localhost:3000/v1/explorers/:mission           | localhost:3000/v1/explorers/node           | Deberás obtener la lista de explorers en la misión que enviaste (node o java)        |
| localhost:3000/v1/explorers/amount/:mission    | localhost:3000/v1/explorers/amount/node    | Deberás obtener la cantidad de explorers según la misión que enviaste (node o java) |
| localhost:3000/v1/explorers/usernames/:mission | localhost:3000/v1/explorers/usernames/node | Deberás obtener la lista de usernames en la misión que enviaste (node o java)        |


**Nuevo requerimiento:**

Crea un endpoint para recibir un número y aplicar la
validación del fizzbuzz.
