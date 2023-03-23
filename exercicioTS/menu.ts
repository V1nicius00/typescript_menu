import { calcularExponenciacao } from "./funcoes";
import { calcularFatorial } from "./funcoes";
import { calcularPorcentagem } from "./funcoes";
import { areaTriangulo } from "./funcoes";


do{
    var control : number;
    let teclado = require("prompt-sync")();
    
    console.log("\n1 - Fatorial; \n2 - Exponenciação;\n3 - Porcentagem;\n4 - Área do triângulo;\n5 - Sair\n\n");
    control = teclado();
    control = Number(control);

    let result: number;

    switch(control){
        case 1:
            let num: number;
            console.log("Digite o valor que deseja calcular o fatorial: ");
            num = teclado();
            result = calcularFatorial(num);
            console.log(`O resultado do fatorial do número ${num} é: ${result}\n`);
            break;

        case 2:
            let base, expoente: number;
            console.log("Digite o valor da base: ");
            base = teclado();
            console.log("Digite o valor do expoente: ");
            expoente = teclado();
            result = calcularExponenciacao(base, expoente);
            console.log(`O resultado da exponenciação é ${result}\n`);
            break;

        case 3:
            let valor, porc: number;
            console.log("Digite o valor: ");
            valor = teclado();
            console.log("Digite o valor da porcentagem que deseja saber: ");
            porc = teclado();
            result = calcularPorcentagem(valor, porc);
            console.log(`${porc}% de ${valor} é ${result}\n`);
            break;

        case 4:
            let baseT, altura: number;
            console.log("Digite a base do triângulo: ");
            baseT = teclado();
            console.log("Digite a altura do triângulo: ");
            altura = teclado();
            result = areaTriangulo(baseT, altura);
            console.log(`A área do triângulo informado é de ${result}cm²\n`);
            break;

        case 5:
            console.log(" ");
            break;

        default:
            console.log("Digite um valor válido!\n");
    }


}while(control != 5);

console.log("CÓDIGO ENCERRADO!\n");