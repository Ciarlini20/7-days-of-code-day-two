const personName = document.querySelector('#name')
const personAge = document.querySelector('#age')
const language = document.querySelector('#language')
const button = document.querySelector('#buttonAnswer')
const answer = document.querySelector('#answer')
const newQuestions = document.querySelector('#newQuestion')
const showNewAnswer = document.querySelector('#showNewAnswer')

function showAnswer() {
  if (personName.value == '' || personAge.value == '' || language.valor == '') {
    answer.innerHTML = 'Por favor preencha todos os campos'
    answer.style.opacity = 1

    setTimeout(function () {
      answer.style.opacity = 0
      button.removeAttribute('disabled')
    }, 3500)
    return
  }

  button.setAttribute('disabled', true)

  answer.innerHTML = [
    `Olá  ${personName.value}, você tem ${personAge.value} anos e já está aprendendo ${language.value}!`
  ]
  answer.style.opacity = 1

  const newQuestion =
    'Você gosta de estudar ' +
    language.value +
    '? Responda com o número 1 para SIM ou 2 para NÃO. <br> <input id="numberAnswer" type ="number" min="1" max="2"><br><button id="newButton" onclick="anotherAnswer()">Responder</button>'
  newQuestions.innerHTML = newQuestion
  const numberAnswer = document.querySelector('#numberAnswer')
  const newButton = document.querySelector('#newButton')
}
function anotherAnswer() {
  if (numberAnswer.value == 1) {
    showNewAnswer.innerHTML =
      'Muito bom! Continue estudando e você terá muito sucesso.'
    newButton.setAttribute('disabled', true)
  }
  if (numberAnswer.value == 2) {
    showNewAnswer.innerHTML =
      'Ahh que pena... Já tentou aprender outras linguagens?'
    newButton.setAttribute('disabled', true)
  }
}
