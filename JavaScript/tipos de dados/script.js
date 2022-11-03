//tipos de dados

// Todos são primitivos exceto os objetos.
var nome = "joão"//String
var idade = 16 // number
var VerdadeiroOuDalso = true // boolean
var time; // Undefined 
var comida = null // null
var novoObjeto = {} // object 


// objetos
     const Alunos = {
        nomeDoAluno:'Erick',
        IdadeDoAluno: 16,
        TimeDoAluno: false,
        }

console.log (Alunos.nomeDoAluno)

// verificar os tipod de dados
console.log ( typeof nome);
console.log (typeof idade);
console.log (typeof VerdadeiroOuDalso);
console.log (typeof time);
console.log (typeof comida);
console.log (typeof novoObjeto);

//Você pode somar string e assim concatenar as palavras 

var nome2 = "sophii"
var sobrenome = "gomes"
var nomeCompleto = nome2 + " "  + sobrenome;
console.log(nomeCompleto)


//Você pode somar números co strings, o resultado fianal será sempre string.

var gols = 1000;
var frase = 'Pelé fez' + gols + 'gols'
console.log(frase)

// Tamplete string
var golacos = 1000;
var frase2 = `sophii gomes fez mais de ${golacos} gols`
console.log(frase2);


// declara uma variável contendo uma string
let carro = "voyage";

// declara uma variável contendo um número dentro da string
let númeroString = "16";

// declare uma variável com sua idade
var minhaIdade = 16;

// declara duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
var meuNome = "Emilly "
var meuSobrenome = "gomess"
var  meuNomeCompleto = meuNome + " " + meuSobrenome

// coloque a seguinte frase em uma variável: It's time
let ItsTime = "It's time"

// Verifique o tipo da variável que contém o seu nome 
console.log(typeof meuNomeCompleto)


var número = prompt("digite um valor:");
console.log(número)

//Faça um programa que peça dois números para o usúario. Imprima a soma desses dois números.

//Criar dois prompt dentro de varáveis
let x =  parseInt (prompt("Digite o 1° valor :" ))
let y =  parseInt (prompt ("Digite o 2° valor:"))

//Somar os resusltados
let soma = x + y 
console.log(soma)


     