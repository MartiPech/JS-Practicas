let texto1 = "     la educacion es lo mas importente en  ";
let texto2 = "ARGENTINA"

//situacion de que tiene muchos espacios un string lo arreglo con trim()

let resultado = texto1.trim().concat(" ").concat(texto2)
//opciones trimStar para el inicio y para el final trimEnd
console.log(resultado);
