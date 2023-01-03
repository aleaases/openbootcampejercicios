let fechahoy = new Date()
console.log(fechahoy)

let fechaCumple = new Date(1991 , 0 , 27)
console.log(fechaCumple)

let comparacion = fechahoy > fechaCumple ;
console.log(comparacion)

let diaNacimiento = fechaCumple.getDate()
let mesNacimiento = fechaCumple.getMonth() 
let añoNacimiento = fechaCumple.getFullYear()

console.log(diaNacimiento)
console.log(mesNacimiento)
console.log(añoNacimiento)