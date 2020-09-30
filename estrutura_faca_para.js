function btnCalc() {

var numero, fatorial,

numero = prompt("Digite o número para calcular o fatorial.")

fatorial = 1

for (contador = 1; contador <= numero; contador ++){ // Declaro e já defino um valor para o contador
    fatorial = fatorial * contador
} 

document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial

}
