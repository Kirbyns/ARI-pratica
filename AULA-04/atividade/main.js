function calculateSquare(){
    const inputElement = document.getElementById('inputNumber');// get em cima do elemento pelo ID
    const inputNumber = Number(inputElement.value);

    worker.postMessage(inputNumber); // envia o numero para o web worker para calcular o quadrado
}

//cria uma instancia do Web Worker

worker = new Worker('worker.js');

worker.addEventListener('message', function(event){

    const square = event.data;// Extrai o resultado da mensagem recebida
    const resultElement = document.getElementById('result');
    resultElement.textContent = ' O Quadrado do numero é: '+square; // exibe o resultado na página
});

function calculateTriangulo(){
    const inputElementTri = document.getElementById('base');// base do triangulo
    const inputElementTri2 = document.getElementById('altura');// altura do triangulo
    const inputNumberTri = Number(inputElementTri.value);
    const inputNumberTri2 = Number(inputElementTri2.value);
    const data = {
        inputNumberTri1: inputNumberTri,
        inputNumberTri2: inputNumberTri2
    };

    workerTriangulo.postMessage(data);

}

workerTriangulo = new Worker('workerTriangulo.js');

workerTriangulo.addEventListener('message', function(event){

    const triangulo = event.data;// Extrai o resultado da mensagem recebida
    const resultElementTriangulo = document.getElementById('resultTriangulo');
    resultElementTriangulo.textContent = ' a Area do triangulo é: '+triangulo; // exibe o resultado na página
});


function calculateFatorial() {
    const inputElementFatorial = document.getElementById('inputFatorial');
    const inputNumberFatorial = Number(inputElementFatorial.value);

    workerFatorial.postMessage(inputNumberFatorial);
}

workerFatorial = new Worker('workerFatorial.js');

workerFatorial.addEventListener('message', function(event) {
    const fatorialResult = event.data;
    const resultElementFatorial = document.getElementById('resultFatorial');
    resultElementFatorial.textContent = 'O Fatorial do número é: ' + fatorialResult;
});