/**
 * *CALLBACK
 * !Es una funcion que pasa como argumento a otra funcion y que * sera utilizadasegun sea el caso.
 */

function sum(num1, num2){
    return num1 + num2;
};

function calc(num1, num2, callback){ //La funcion callback ejecuta la funcion sum.
    return callback(num1, num2);
};

console.log(calc(3, 3, sum)); //!No es necesario agregar() de la funcion sum porque la estariamos invocando y tampoco es necesario agregar los argumentos porque ya estan siendo agregados en calc.

/**
 * *SET TIME OUT (setTimeOut)
 * !Permite ejecutar codigo en un tiempo determinado que se elija y pasarle un funcion para que se ejecute en ese tiempo
 */

setTimeout(function () {
    console.log("Hello JavaScript");
},5000); //!La funcion tarda 5000 ms en ejecutarse

function grettin(name){
    console.log(`Hello ${name}`);
}

setTimeout(grettin, 2000, 'Danilo Estupinan'); 

