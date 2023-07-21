
    import promptSync from 'prompt-sync';

    let prompt = promptSync()

    export function exercicio4(){

    let numeroEscolhido = prompt('Qual numero voce quer multiplicar?:');

    for( let multiplicacao = 1; multiplicacao <=10; multiplicacao++) {
    let resultado = numeroEscolhido* multiplicacao;
    console.log (`${numeroEscolhido} x ${multiplicacao} = ${resultado}`)
}
}