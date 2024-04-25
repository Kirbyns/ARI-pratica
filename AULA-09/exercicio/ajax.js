
//  listener de evento ao botão "carregar"
document.getElementById('carregar').addEventListener('click', function () {

    // Cria uma nova instância do objeto XMLHttpRequest para fazer a requisição AJAX
    var tela = new XMLHttpRequest();


    // Abre uma conexão para fazer uma requisição GET para a URL fornecida
    tela.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);


    // Define o que acontece quando a resposta da requisição é carregada
    tela.onload = function () {

        // Verifica se o status da resposta está entre 200 e 299, indicando uma resposta de sucesso
        if (tela.status >= 200 && tela.status < 300) {

            // Parseia a resposta JSON em um array de objetos JavaScript
            var posts = JSON.parse(tela.responseText);

            // trazendo o elemento do container
            var postsContainer = document.getElementById('container'); 

            posts.forEach(function (post) { //foreach just basic
                //edições gerais do HTML trazendo as infos
                var postElement = document.createElement('div');
                postElement.innerHTML = '<h2>' + post.title + '</h2><p>' + post.body + '</p>';
                postsContainer.appendChild(postElement); //famoso append para linkar no elemento container
            });
        } else {
            // Se o status da resposta não estiver na faixa de sucesso, exibe um erro no console
            console.error('Erro ao carregar os posts. Código de status:', tela.status);
        }
    };
    // Define o que acontece em caso de erro na requisição AJAX
    tela.onerror = function () {
        console.error('Erro de conexão.');
    };
    // Envia a requisição AJAX
    tela.send();
});