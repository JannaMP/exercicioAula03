export function exercicio5(){
    
    let numAnterior = 0;
    let numAtual = 1;

    console.log (numAnterior)
    console.log(numAtual)

    for(let contador = 3; contador <=10; contador++ ) {
     let proximoNumero = numAnterior + numAtual
     
     console.log(proximoNumero)
     
     numAnterior = numAtual
     numAtual = proximoNumero
}
}