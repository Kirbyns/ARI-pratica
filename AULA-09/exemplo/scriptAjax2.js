window.onload = function () {
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    let minhaAPI = "c41c8c545e12b1e6da62c38093de3496";
    let resultado;
    let cidade;

    cidades.onchange = function () {
        //criando o objeto ajax dependendo do navegador
        var ajax = null;
        //se no navegador existir o XMLHttpRequest(), ele cria por essa metodologia
        if (window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
            //se no navegar não existir ele usa ActivXObject
        } else if (window.ActiveXObject) {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }
        //executa a função anônima depois que toda a página for carregada
        window.onload = function () {
            let url = "http://api.openweathermap.org/data/2.5/weather?";
            let minhaAPI = "c41c8c545e12b1e6da62c38093de3496";
            let resultado;
            let cidade;

            cidades.onchange = function () {
                //criando o objeto ajax dependendo do navegador
                var ajax = null;
                //se no navegador existir o XMLHttpRequest(), ele cria por essa metodologia
                if (window.XMLHttpRequest) {
                    ajax = new XMLHttpRequest();
                    //se no navegar não existir ele usa ActivXObject
                } else if (window.ActiveXObject) {
                    ajax = new ActiveXObject("Msxml2.XMLHTTP");
                }
                resultado = JSON.parse(ajax.responseText);
                console.log(resultado);
                console.log(resultado.name);
                console.log(resultado.main.temp_min);
                console.log(resultado.main.temp_max);
                console.log(resultado.weather[0].description);
            }
        }
    }
}