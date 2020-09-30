function btnCalc() {
var nome, idade, limite, contador

limite = prompt("Digite quantas vezes vamos verificar a idade")
contador = 0
while(contador < limite){
    nome = prompt("Digite o nome da pessoa: ")
    idade= prompt("Digite a idade de "+ nome)
    if (idade > 18)
        document.getElementById("paragrafo").innerText = nome + " Você é maior de idade!"
    else
        document.getElementById("paragrafo").innerText = nome + " Você é menor de idade!"
    contador ++

}


}