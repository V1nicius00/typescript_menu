"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcoes_1 = require("./funcoes");
var funcoes_2 = require("./funcoes");
var funcoes_3 = require("./funcoes");
var funcoes_4 = require("./funcoes");
do {
    var control;
    var teclado = require("prompt-sync")();
    console.log("\n1 - Fatorial; \n2 - Exponenciação;\n3 - Porcentagem;\n4 - Área do triângulo;\n5 - Sair\n\n");
    control = teclado();
    control = Number(control);
    var result = void 0;
    switch (control) {
        case 1:
            var num = void 0;
            console.log("Digite o valor que deseja calcular o fatorial: ");
            num = teclado();
            result = (0, funcoes_2.calcularFatorial)(num);
            console.log("O resultado do fatorial do n\u00FAmero ".concat(num, " \u00E9: ").concat(result, "\n"));
            break;
        case 2:
            var base = void 0, expoente = void 0;
            console.log("Digite o valor da base: ");
            base = teclado();
            console.log("Digite o valor do expoente: ");
            expoente = teclado();
            result = (0, funcoes_1.calcularExponenciacao)(base, expoente);
            console.log("O resultado da exponencia\u00E7\u00E3o \u00E9 ".concat(result, "\n"));
            break;
        case 3:
            var valor = void 0, porc = void 0;
            console.log("Digite o valor: ");
            valor = teclado();
            console.log("Digite o valor da porcentagem que deseja saber: ");
            porc = teclado();
            result = (0, funcoes_3.calcularPorcentagem)(valor, porc);
            console.log("".concat(porc, "% de ").concat(valor, " \u00E9 ").concat(result, "\n"));
            break;
        case 4:
            var baseT = void 0, altura = void 0;
            console.log("Digite a base do triângulo: ");
            baseT = teclado();
            console.log("Digite a altura do triângulo: ");
            altura = teclado();
            result = (0, funcoes_4.areaTriangulo)(baseT, altura);
            console.log("A \u00E1rea do tri\u00E2ngulo informado \u00E9 de ".concat(result, "cm\u00B2\n"));
            break;
        case 5:
            console.log(" ");
            break;
        default:
            console.log("Digite um valor válido!\n");
    }
} while (control != 5);
console.log("CÓDIGO ENCERRADO!\n");
