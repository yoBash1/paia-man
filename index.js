let elementoResposta = document.querySelector('#resposta')
let inputPergunta = document.querySelector('#inputPergunta')
let buttonPerguntar = document.querySelector('#buttonPerguntar')
let respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúviudas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha reposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minha fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

function fazerPergunta() {
  if (inputPergunta.value == '') {
    alert('Digite sua pergunta!')
    return
  }

  buttonPerguntar.setAttribute('disabled', true)

  let pergunta = '<div>' + inputPergunta.value + '</div>'

  let totalRespostas = respostas.length
  let numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1

  setTimeout(function () {
    elementoResposta.style.opacity = 0
    buttonPerguntar.removeAttribute('disabled')
  }, 3000)
}
