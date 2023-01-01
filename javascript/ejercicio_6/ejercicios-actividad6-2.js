let listacompra = ["harina","leche","dulce de leche", "fideos", "arroz"]
console.log(listacompra);

listacompra.push("aceite de girasol")
console.log(listacompra);

listacompra.pop()
console.log(listacompra);

let peliculas = [
    {titulo: "corazon valiente", director:"Mel Gibson", fecha: 1995},
    {titulo: "hasta el ultimo hombre", director:"Mel Gibson", fecha: 2016},
    {titulo: "el patriota", director:"Roland Emmerich", fecha: 2000},
];

let peliculanueva = peliculas.find(Object => Object.fecha < 2010)
console.log(peliculanueva);

let directores = peliculas.map(pelicula => {
    return pelicula.director
})
console.log(directores);

let titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
console.log(titulos);

let listadirector = directores.concat(titulos)
console.log(listadirector);

let listadirector2 = [...directores,...titulos]
console.log(listadirector2)