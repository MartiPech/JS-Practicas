//Filtrar objetos por rango de valores
const products = [
    { name: "Apple", price: 0.5 },
    { name: "Banana", price: 0.3 },
    { name: "Orange", price: 0.8 },
    { name: "Grapes", price: 0.6 }
  ];
  
  const product = products.filter(e => e.price > 0.3 && e.price < 0.8);
  console.log(product);

  
  
  
  
  
  
  