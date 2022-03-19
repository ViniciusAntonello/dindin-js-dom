
// 1.1
let cabeça = document.querySelector('header').style.backgroundColor = '#2E948A'


// 1.2
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')

linkCursos.setAttribute('href', '/cursos.html')

// 2.2
document.querySelector('.titulo.depoimento h3').innerHTML = 'O que falam sobre nós'

// 2.1

let menu = document.getElementById('introducao')

menu.style.justifyContent = 'space-around'

// 2.3

document.querySelector('#falam_sobre+.titulo h3').innerHTML = 'Mais conteúdo pra você'

// 2.4

let titulos = document.querySelectorAll(".titulo"); 

titulos.forEach((titulo) => {
    titulo.style.textTransform = 'uppercase'
});

// 2.5

let linkPosts = document.getElementById('todos_posts');

linkPosts.setAttribute('href', 'blog.html');

// 2.6

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

// 3.1

