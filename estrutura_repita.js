function btnCalc() {
    var sair, valor01, valor02
    do {
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "Resultado: " + (parseInt( valor01 ) + parseInt( valor02 ))
        sair = prompt("Deseja sair? S/N")
    }while(sair != "S")
       
       
}
    
    
    