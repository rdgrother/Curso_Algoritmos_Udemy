/*escreval("Digite o nome do aluno")
leia(nome)
escreval("Digite a nota 1 do aluno")
leia(nota01)
escreval("Digite a nota 2 do aluno")
leia(nota02)
media := (nota01 + nota02) / 2 // := recebe

se media >= 50 entao
escreval("Aprovado!", nome)
senao
escreval("Reprovado!", nome)
fimse*/

var nome, nota01, nota02;
nome = prompt ("Digite o nome do aluno")
nota01 = prompt ("Digite a nota 1 do aluno")
nota02 = prompt ("Digite a nota 2 do aluno") // aqui no JS o = é o nosso recebe

media = (parseInt(nota01) + parseInt(nota02)) / 2; // parseInt muda de string para numero inteiro

if(media>= 50) // se tiver mais instruções neste bloco devemos colocar {}
    alert ("Aprovado!" + nome)
else
    alert ("Reprovado!" + nome)
