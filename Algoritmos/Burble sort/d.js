let array = [2, 14, 9, 8, 71, 100];
let PointFinal = array.length - 1;
let PointIni = 0;

function searchBinary(arr, elem) {
    let PointMedium;

    while (PointIni <= PointFinal) {
        PointMedium = Math.floor((PointIni + PointFinal) / 2);

        if (arr[PointMedium] === elem) {
            return elem; // Elemento encontrado
        } else if (arr[PointMedium] < elem) {
            PointIni = PointMedium + 1; // Buscar en la mitad derecha
        } else {
            PointFinal = PointMedium - 1; // Buscar en la mitad izquierda
        }
    }

    return "no encontrado"; // Si el elemento no se encuentra en el array
}

console.log(searchBinary(array, 2));
