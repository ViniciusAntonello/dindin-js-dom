let pathname = window.location.pathname;

    // 1.1 - O header deve ter cor de fundo #2E948A.

    let cabeça = document.querySelector('header').style.backgroundColor = '#2E948A'

    if (pathname === '/index.html') {
    // 1.2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.html

    let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')

    linkCursos.setAttribute('href', '/cursos.html')
    
    // 2.1 - No banner da home, está faltando centralizar os elementos filhos da section que tem o id #introducao.
    
    let menu = document.getElementById('introducao')
    
    menu.style.justifyContent = 'space-around'
    
    // 2.2 - Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".

    document.querySelector('.titulo.depoimento h3').innerHTML = 'O que falam sobre nós'

    // 2.3 - Na etapa de blog, o título deveria ser "Mais conteúdo pra você".

    document.querySelector('#falam_sobre+.titulo h3').innerHTML = 'Mais conteúdo pra você'

    // 2.4 - Todos os textos que estiverem com a classe .titulo devem apresentar todas as letras maiúsculas.

    let titulos = document.querySelectorAll(".titulo"); 

    titulos.forEach((titulo) => {
        titulo.style.textTransform = 'uppercase'
    });

    // 2.5 - o botão "ver todos os posts" deve ter um link que direciona para o arquivo blog.html

    let linkPosts = document.getElementById('todos_posts');

    linkPosts.setAttribute('href', 'blog.html');

    // 2.6 - Adicionar um novo curso na section que contém o id investimentos_poupando_independencia:

    let novoCurso = document.getElementById('investimentos_poupando_independencia');

    let novaDiv = `<div id="independencia">
    <img src="/imagens/independencia_financeira.png"
    width="180px" alt="Independência Financeira">
    <h2>Independência Financeira</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore
    eu fugiat nulla pariatur. </p>
    <a class="comecar_agora" href="./curso.html">começar
    agora</a>
    </div>`

    novoCurso.innerHTML += novaDiv;
}


if (pathname === '/contato.html') {

    // 3.1 - O formulário não está funcionando, o atributo action deve mandar para url sucesso.html

    let action = document.querySelector('form').setAttribute('action', 'sucesso.html');

    // 3.2 - Após o campo de email, precisamos de um novo campo para que o usuário adicione também um número de telefone.

    let phone = document.createElement('input');

    phone.setAttribute('type', 'tel');
    phone.setAttribute('placeholder', 'Seu telefone');
    phone.setAttribute('required', 'yes');
    document.querySelector('textarea').insertAdjacentElement('beforebegin', phone);

    // 3.3 - O campo de mensagem está ultrapassando o tamanho do elemento pai. Podemos resolver adicionando o atributo box-sizing: border-box;

    let box = document.querySelector('textarea');

    box.style.boxSizing = 'border-box'

    // 3.4 - O botão não está do tamanho adequado, precisa ter uma largura maior;

    let btn = document.getElementById('enviar');

    btn.style.width = '100px'

    // 3.5 - Abaixo da section do formulário, adicione uma seção de comentário igual a página Home.

    let commentTitle = document.createElement('section');

    commentTitle.setAttribute('class', 'titulo depoimento');

    commentTitle.innerHTML = '<h3>Depoismentos</h3>';

    let comments = document.createElement('section');

    comments.setAttribute('id', 'falam_sobre');

    comments.innerHTML = `<section id='falam_sobre'>
    <div class="depoimentos">
        <img src="/imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
        <p>
            ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam.”
            <br>
            <br>
            Wally, 25
        </p>
    </div>

    <div class="depoimentos">
        <img src="/imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
        <p>
            ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.”
            <br>
            <br>
            Jaden Smith, 23
        </p>
    </div>

    <div class="depoimentos">
        <img src="/imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
        <p>
            ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.”
            <br>
            <br>
            Whoopi Goldberg, 37
        </p>
    </div>

    <div class="depoimentos">
        <img src="/imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
        <p>
            ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.”
            <br>
            <br>
            Janes Joplin, 29
        </p>
    </div>
    </section>`
    
    let mainArea = document.querySelector('main');

    mainArea.append(commentTitle, comments);

    let commentsStyle = document.querySelector('head');

    commentsStyle.innerHTML += '<link rel="stylesheet" href="/css/index.css">';
}
