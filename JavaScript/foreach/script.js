// Array
// É um grupo de valores. Servem para guardarmos diferentes valores em uma única variável.
/*
var videoGame =  ['Switch ' , 'PS4' , 'XBOX'];

var numeros = [1,2,3]
console.log(videoGame[0])
console.log(videoGame[1])
console.log(videoGame[2])

console.log(numeros[0]+numeros[2])

*/
/*
var i = 0;
while(i<10){
    console.log(i);
    i = i + 1 
}
*/
/*
for (var i = 0 ; i < 10 ; i= i+1){
    console.log(i)
}
*/


//ForEach
//ForEach é um método que executa uma função para cada item array. É uma forma mais simples de utilizamos um loop com arrays.
/*
videoGame.forEach(function (a,b,c,){
    console.log(a,b,c)
})
*/
//Crie uma Array com os anos que o Brasil ganhou a copa 1958,1962,1970,1994,2002
var brasil =  [1958,1962,1970,1994,2002]

// Interaja com a array utilizando um longo, para mostrar no console a seguinte mensagem,'O brasil ganhou a copa de ${ano}
brasil.forEach(function(c){
    console.log('O Brasil ganhou a copa ' + c)
})

