function GenerateFibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    var resultado = GenerateFibonacci(10);
    console.log(resultado);  // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]