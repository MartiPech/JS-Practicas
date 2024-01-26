let array = [2, 14, 9, 8, 71, 100];
let PointMedium = Math.floor(array.length / 2);
let PointFinal = array.length - 1;
let PointIni = 0;

function searchBinary(arr, elem) {
    for (let i = PointMedium; i >= PointIni; i--) {
        if (arr[i] === elem) {
            return elem;
        } else {
            for (let j = PointMedium; j <= PointFinal; j++) {
                if (arr[j] === elem) {
                    return elem;
                } else {
                    return "no encontrado";
                }
            }
        }
    }
}
console.log(searchBinary(array,2))
