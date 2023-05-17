// ForEach vs Map 

let numers = [1,3,5,6,8,9,10];

const Each = numers.forEach(e =>e*2)
    console.log(Each);
/*El valor undefined se muestra en la consola debido a que el método forEach no devuelve ningún valor. Su propósito principal es ejecutar una función en cada elemento del array, pero no produce un nuevo array ni retorna un resultado. */    
////////////////////////////////////////////////////////////////////////////////


const map =numers.map(e =>e*2) 
    console.log(map)

//en el caso de map crea una nueva array y la almacena 