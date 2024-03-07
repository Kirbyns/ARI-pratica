self.addEventListener('message', function(event) {
    const inputNumberFatorial = event.data;

    function calcularFatorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            return numero * calcularFatorial(numero - 1);
        }
    }

    const fatorialResult = calcularFatorial(inputNumberFatorial);
    
    this.self.postMessage(fatorialResult);
});