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