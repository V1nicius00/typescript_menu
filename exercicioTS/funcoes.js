"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaTriangulo = exports.calcularPorcentagem = exports.calcularExponenciacao = exports.calcularFatorial = void 0;
function calcularFatorial(valor) {
    var i, fat;
    fat = 1;
    for (i = valor; i > 0; i--) {
        fat = fat * i;
    }
    return fat;
}
exports.calcularFatorial = calcularFatorial;
function calcularExponenciacao(base, expoente) {
    var resp = 0;
    var i = 0;
    for (i = 1; i <= expoente; i++) {
        resp = base * base;
    }
    return resp;
}
exports.calcularExponenciacao = calcularExponenciacao;
function calcularPorcentagem(valor, porc) {
    var result;
    result = (valor * porc) / 100;
    return result;
}
exports.calcularPorcentagem = calcularPorcentagem;
function areaTriangulo(base, altura) {
    var result;
    result = (base * altura) / 2;
    return result;
}
exports.areaTriangulo = areaTriangulo;
