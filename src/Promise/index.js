/**
 * *PROMESAS (PROMISE)
 * !Es un objeto que representa la terminacion o el fracaso de una operacion asincronica. Esencialmente, una promesa es un objeto devuelto al cual se adjuntas funciones callback, en lugar de pasar callbacks a una funcion. Una promesa tinene 3 estados: 1. Pendiente -> cuando se esta ejecutando 2. Cumplido -> cuando ha regresado la informacion deseada 3. Rechazado
 */

const PROMISE = new Promise(function(resolve, reject){
    resolve ('Hey')
});

const cows = 5;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    }else{
        reject("There is no cows on the farm");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Finally"));