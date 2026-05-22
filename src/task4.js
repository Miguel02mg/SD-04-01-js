const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Escribe tu codigo por debajo de esta linea
/** 
 * Sintaxis de splice:
 * array.splice(inicio, cantidadEliminar, elemento1, elemento2, ...)
 * inicio -> índice donde empieza el cambio
 * cantidadEliminar -> cantidad de elementos a borrar
 * elemento1... -> elementos opcionales para agregar
*/
  arr.splice(5, 1); 

// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
