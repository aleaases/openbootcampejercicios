let texto_largo = "este es un texto de prueba para probar la teoia y la gramatica de los archivos javascripts la manera de hacerlos es la siguiente"
//esta es una forma de saber cuantas veces esta una string en un texto
console.log(texto_largo.match(/la/g))
// esta es una forma de verificar que string hay en un texto
console.log(texto_largo.includes("perro"))
// comprueba si empieza y termina con una frase del texto trabajado
console.log(texto_largo.startsWith("este"))
console.log(texto_largo.endsWith("siguiente"))
