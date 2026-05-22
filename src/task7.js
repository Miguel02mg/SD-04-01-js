const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  // Agregar un número a una fila existente
  arr[0].push(99); //Agrega 99 al final de la primera fila

  // Agregar una fila completa
  arr.push([15,16,17,18,19]);

  // Eliminar un número de una fila específica
  arr[1].splice(2, 1); // elimina el 7 de la segunda fila

  // Invertir una fila sin afectar las demás
  arr[2].reverse(); //Invierte la tercer fila

  console.log(arr);
  
  
  // Type your code above this line!