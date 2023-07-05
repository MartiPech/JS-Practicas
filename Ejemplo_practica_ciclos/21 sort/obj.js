let list = [
    {auto:"bwm",año:2023},
    {auto:"Renault",año:2019},
    {auto:"Peougt",año:2020},
    {auto:"Astormartin",año:2013},
]

console.log(list.sort((x,y)=> x.año-y.año))
//ordenando una lista de objetos