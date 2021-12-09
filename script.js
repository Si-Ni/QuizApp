let currentQuestion;
let questionsAnsweredRight = 0;
let questionsAnsweredWrong = 0;

newQuestion();

function newQuestion() {
  let randomNumber = Math.floor(Math.random() * Questions.length);
  currentQuestion = Questions[randomNumber];
  updateGUIforNewQuestion();
}

function updateGUIforNewQuestion() {
  setCurrentQuestion();
  setAnswersToButtons();
  setColorsOfButtons();
  enableButtons();
}

function setCurrentQuestion() {
  document.getElementsByClassName("Question")[0].innerText = currentQuestion.question;
}

function setAnswersToButtons() {
  document.getElementById("1").innerText = currentQuestion.answer1;
  document.getElementById("2").innerText = currentQuestion.answer2;
  document.getElementById("3").innerText = currentQuestion.answer3;
  document.getElementById("4").innerText = currentQuestion.answer4;
}

function setColorsOfButtons() {
  document.getElementById("1").style.backgroundColor = "rgb(239, 239, 239)";
  document.getElementById("2").style.backgroundColor = "rgb(239, 239, 239)";
  document.getElementById("3").style.backgroundColor = "rgb(239, 239, 239)";
  document.getElementById("4").style.backgroundColor = "rgb(239, 239, 239)";
}

function checkSolution(clickedButtonId) {
  if (clickedButtonId == currentQuestion.rightAnswer) {
    rightAnswerClicked(clickedButtonId);
  } else {
    wrongAnswerClicked(clickedButtonId);
  }
}

function rightAnswerClicked(clickedButtonId) {
  document.getElementById(clickedButtonId).style.backgroundColor = "#82b74b";
  questionsAnsweredRight++;
  disableButtons();
  updateStatusRightWrongAnswers();
}

function wrongAnswerClicked(clickedButtonId) {
  document.getElementById(clickedButtonId).style.backgroundColor = "#c83349";
  document.getElementById(currentQuestion.rightAnswer).style.backgroundColor = "#82b74b";
  questionsAnsweredWrong++;
  disableButtons();
  updateStatusRightWrongAnswers();
}

function disableButtons() {
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  document.getElementById("4").disabled = true;
}

function enableButtons() {
  document.getElementById("1").disabled = false;
  document.getElementById("2").disabled = false;
  document.getElementById("3").disabled = false;
  document.getElementById("4").disabled = false;
}

function updateStatusRightWrongAnswers() {
  document.getElementsByClassName("rightAnswers")[0].innerText = "richtig beantwortete Fragen: " + questionsAnsweredRight;
  document.getElementsByClassName("wrongAnswers")[0].innerText = "falsch beantwortete Fragen: " + questionsAnsweredWrong;
}
