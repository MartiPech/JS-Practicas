//Filtrar objetos basado en múltiples condiciones

const products = [
    { name: "Apple", category: "fruit", price: 0.5 },
    { name: "Carrot", category: "vegetable", price: 0.3 },
    { name: "Orange", category: "fruit", price: 0.8 },
    { name: "Broccoli", category: "vegetable", price: 0.6 }
  ];

  const product = products.filter(work => work.category === "fruit" && work.price < 0.8 );
  console.log(product)

