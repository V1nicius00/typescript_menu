export function calcularFatorial(valor: number): number{
    let i, fat: number;
    fat = 1;
    for(i = valor; i > 0; i--){
        fat = fat * i;
    } 
    return fat;
}

export function calcularExponenciacao(base: number, expoente: number): number{
    let resp:number = 0;
    let i: number = 0;

    for(i = 1; i <=  expoente; i++){
        resp = base * base;
    }
    return resp;
}

export function calcularPorcentagem(valor: number, porc: number): number{
    let result: number;
    result = (valor * porc) / 100;
    return result;
}

export function areaTriangulo(base: number, altura: number): number{
    let result;
    result = (base * altura) / 2;
    return result;
}