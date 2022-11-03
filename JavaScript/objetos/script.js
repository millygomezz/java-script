// Objetos
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Grazi',
    idade: 20,
    profissao:'Monitora do professor math bonitão',
    faculdade: true,
}

pessoa.nome
console.table(pessoa)

//Objetos com funções ou métodos

var quadrado = {
    perimetro: function(lado){
        return lado + lado + lado + lado 
   },
   area : function(area){
    return area*area
   }
}

// Arrays 

// É um grupo de valores geralmente relacionados.Servem para gurdarmos diferentes valores em uma única variável.

var videoGames = [ 'PS4' , 'XBOX' , ' Switch']

console.log(videoGames.length)




