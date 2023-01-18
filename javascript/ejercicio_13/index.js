let Nombre = "Alejandro"
let Apellido = "PEREZ"

let Estudiante = (Nombre.concat(" " + Apellido))
console.log(Estudiante)

let ESTUDIANTEMAYUS = Estudiante.toLocaleUpperCase()
console.log(ESTUDIANTEMAYUS)

let estudianteMinus = Estudiante.toLocaleLowerCase()
console.log(estudianteMinus)

let Num_letras = Estudiante.length
console.log(Num_letras)

let Primer_letra = Nombre.charAt(0)
console.log(Primer_letra)

let Ultima_letra = Apellido [Apellido.length - 1]
console.log(Ultima_letra)

let Sin_espacio = Estudiante.replace(" ", "" )
console.log(Sin_espacio)


let booleana = Estudiante.includes(Nombre)
console.log(booleana)