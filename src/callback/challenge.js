/**
 * *XMLHTTPRequest
 * !Es un objeto JavaScript que fue disenado por microsoft y adoptado por mozilla, google y apple. Actualmente es estandar de la W3C. Proporciona una forma facil de obtener informacion de una URL sin tener que recargar la pagina completa. Una pagina web puede recargar una parte sin interrumpir lo que el usuario este haciendo. Puede ser usado para recibir cualquier tipo de dato, no solo xml y admite otros formatosa ademas de http (incluyendo file y ftp)
 */

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'htttps://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange  = function (event) {
    if (xhttp.readyState === 4){
        if (xhttp.status === 200){
            callback(null, JSON.parse(xhttp.responseText));
        };
    }else{
        const error = new Error('Error' + urlApi);
        return callback(error, null);
    }
  }
  xhttp.send();
}

fetchData(`${API}/products`, function(error1, data1){
    if (error1) return console.error(error1);
    fetchData(`${API}/products${data[0].id}`, function(error2, data2){
    if (error2) return console.error(error2);
    fetchData(`${API}/categories/${data2?.category.id}`, function(error3, data3){
      if (error3) return console.error(error3);
      console.log(data1[0]);
      console.log(data2.title);
      console.log(data3.name);
    });
    });
} );


