let datoPersonales = {
    nombre:"alejandro",
    apellido:"perez", 
    edad:31, 
    altura:1.81, 
    eresDesarrollador: true,
}
console.log(datoPersonales)

console.log(datoPersonales.edad)

let datoAmigos = [{
    ...datoPersonales
},{
    nombre:"cintia",
    apellido:"coronel", 
    edad:36, 
    altura:1.65, 
    eresDesarrollador: false,
}, {
    nombre:"lautaro",
    apellido:"sosa", 
    edad:16, 
    altura:1.85, 
    eresDesarrollador: false,
}]

console.log(datoAmigos)

datoAmigos.sort((a,b) => b.edad - a.edad)

console.log(datoAmigos)