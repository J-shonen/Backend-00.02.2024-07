let strDNI = prompt("Escribe tu DNI");
let strNumeroVeriricador = prompt("Escribe tu numero verificador")

try {
    ///Ejecutamos el codigo
/*
42262648<2
donde 42262648 es el DNI y 2 es el dígito de control
Para validar si es DNI valido se multiplica por el juego 7,3,1 y luego se suma todo, es decir:
4   2   2   6   2   6   4   8
7   3   1   7   3   1   7   3
28+6+2+42+6+6+28+24=142
El dígito de control el el último dígito de la suma, es decir 2
*/

let suma = 0;
let arrSerie =[3, 2, 7, 6, 5, 4, 3, 2];
const numberKeys = [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5];
let arrDNI = strDNI.split('');
console.log(arrDNI);
for (let index = 0; index < arrSerie.length; index++) {
    suma += arrDNI[index] * arrSerie[index];

    
}
console.log(suma)
let residuo = suma % 11;
let resultado =11 - residuo;

if (resultado == 11){
    resultado = 0;
}

let intVerificador  =  numberKeys[resultado];

if(intVerificador == strNumeroVeriricador){
    alert("Tu DNI es Valido")
}else{
    alert("DNI No Valido")
}
} catch (error) {
    //capturamos el error
}





