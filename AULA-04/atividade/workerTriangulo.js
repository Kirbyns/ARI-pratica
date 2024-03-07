self.addEventListener('message',function(event){

    const sides = event.data; // Extrai os dados da mensagem recebida
    const base = sides.inputNumberTri1; 
    const altura = sides.inputNumberTri2; 

    const triangulo = (base*altura)/2; // Calculada o quadrado do numero 

    this.self.postMessage(triangulo);

});
