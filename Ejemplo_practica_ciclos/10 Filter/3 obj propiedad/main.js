//Filtrar objetos por propiedad las que sean fruit 

const products = [
    { name: "Apple", category: "fruit" },
    { name: "Carrot", category: "vegetable" },
    { name: "Orange", category: "fruit" },
    { name: "Broccoli", category: "vegetable" }
  ];

  let propiedadObj = products.filter(e=>e.category == "fruit");
  console.log(propiedadObj)

  