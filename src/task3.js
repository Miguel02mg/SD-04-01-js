const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Escribe tu codigo por debajo de esta linea
/** 
 * Sintaxis de splice:
 * 
 * array.splice(inicio, cantidadEliminar, elemento1, elemento2, ...)
 * inicio -> posición donde comenzará el cambio
 * cantidadEliminar -> cuántos elementos eliminar
 * elemento1... -> elementos a agregar
*/
arr.splice(7, 0, 8);


// TEscribe tu codigo por encima de esta linea

//No tocar esta funcion
export function taskArr(){
  return arr;
}
