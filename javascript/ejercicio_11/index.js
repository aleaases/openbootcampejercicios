let estudidante = {
    nombre : "alejandro",
    asignaturas : [ Javascript, HTML, CSS, ],
    obtenDatos() {
        this.nombre,
        this.asignaturas,
    }
};

let estudidante2 = new estudidante()
console.log(estudidante2)

console.log(estudidante.obtenDatos())