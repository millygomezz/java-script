//Funções 
/*
   function nomeDaFunção (parâmetros){
    ações 
   }
*/

var a = 7
var b = 8
var total = a + b
console.log(total)

function soma (c,d){
    var total = c + d
    return console.log(total)
}

soma(10,50)
soma (7,5)

// Calculo da área de um quadrado

function areaDeUmQuadrado(lado){
    var area = lado*lado
    return console.log(area)
}
areaDeUmQuadrado(4)

 // Faça uma função que calcule a área de um retángulos de lados diferentes.
 function areaDeUmRetangulo(lado, lado2){
    var area1 = lado*lado2
    return console.log(area1)
}
areaDeUmRetangulo(7,2)

// Função

function pi(){
    return 3.1415
}

function corFavorita(cor){
    if(cor === 'azul'){
        return 'gosta do céu'
    }else if ( cor === 'preto'){
        return 'É corinthianoo'
    }else{
        return'você gosta de nada'
    }
}

// Crie uma função que retorne o perímetro de um quadrado 
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro (l111,l212,l313,l414){
    var total = 11+12+13+14;
    console.log(total)
    return total
}
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto (nome, sobrenome){
    var somaNomes = nome + " "+
    console.log(total)
    return somaNomes 
}


// Crie uma função que verifica se um número é par.
function par (numero){
    if (numero % 2 == 0){
        console.log('par')
    }else{
        console.log('impar')
    }  
}


