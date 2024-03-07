self.addEventListener('message',function(event){

    const inputNumber = event.data; // Extrai os dados da mensagem recebida
    const square = inputNumber * inputNumber; // Calculada o quadrado do numero 

    this.self.postMessage(square);

});
