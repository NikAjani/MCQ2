var QuestionObj = function(question, options, ans) {
  (this.question = question), (this.options = options), (this.ans = ans);
};

var question1 = new QuestionObj(
  "1. Who is father of C Language ?",
  ["Bjarne Stroustrup", "James A. Gosling", "Dennis Ritchie", "Dr. E.F. Codd"],
  2
);
var question2 = new QuestionObj(
  "2. Standard ANSI C recognizes ______ number of keywords ?",
  ["30", "32", "24", "33"],
  1
);
var question3 = new QuestionObj(
  "3. Which one of the following is not a reserved keyword for C ?",
  ["main", "auto", "case", "default"],
  0
);
var question4 = new QuestionObj(
  "4. Which is the only function all C programs must contain ?",
  ["start()", "main()", "printf()", "exit()"],
  1
);
var question5 = new QuestionObj(
  "5. C programs are converted into machine language with the help of ...",
  ["An Editor", "OS", "A Compiler", "none Of these"],
  2
);

console.log(sessionStorage.getItem("qNo"));

var currentQuestion;

function checkAnswer() {
  currentQuestion = parseInt(sessionStorage.getItem("qNo"));
  loadQuestion(currentQuestion);
  loadQuestion();
}

function loadData() {
  if (sessionStorage.getItem("qNo")) {
    currentQuestion = parseInt(sessionStorage.getItem("qNo"));
    currentQuestion == 1
      ? loadQuestion(currentQuestion)
      : loadQuestion(currentQuestion - 1);
  } else {
    var questionInHtml = document.querySelector("#questionInHtml");
    questionInHtml.innerHTML = question1.question;

    for (var i = 1; i < 5; i++) {
      document.querySelector("#options" + i).value = question1.options[i - 1];
      document.querySelector("#choice" + i).innerHTML =
        question1.options[i - 1];
    }
    currentQuestion = 1;

    sessionStorage.setItem("qNo", currentQuestion);
  }
}

function loadQuestion(currentQue) {
  if (currentQue == 1) {
    var questionInHtml = document.querySelector("#questionInHtml");
    questionInHtml.innerHTML = question1.question;

    for (var i = 1; i < 5; i++) {
      document.querySelector("#options" + i).value = question1.options[i - 1];
      document.querySelector("#choice" + i).innerHTML =
        question1.options[i - 1];
    }
    currentQue += 1;

    sessionStorage.setItem("qNo", currentQue);
  } else if (currentQue === 2) {
    var questionInHtml = document.querySelector("#questionInHtml");
    questionInHtml.innerHTML = question2.question;

    for (var i = 1; i < 5; i++) {
      document.querySelector("#options" + i).value = question2.options[i - 1];
      document.querySelector("#choice" + i).innerHTML =
        question2.options[i - 1];
    }
    currentQue += 1;

    sessionStorage.setItem("qNo", currentQue);
  } else if (currentQue === 3) {
    var questionInHtml = document.querySelector("#questionInHtml");
    questionInHtml.innerHTML = question3.question;

    for (var i = 1; i < 5; i++) {
      document.querySelector("#options" + i).value = question3.options[i - 1];
      document.querySelector("#choice" + i).innerHTML =
        question3.options[i - 1];
    }
    currentQue += 1;

    sessionStorage.setItem("qNo", currentQue);
  } else if (currentQue === 4) {
    var questionInHtml = document.querySelector("#questionInHtml");
    questionInHtml.innerHTML = question4.question;

    for (var i = 1; i < 5; i++) {
      document.querySelector("#options" + i).value = question4.options[i - 1];
      document.querySelector("#choice" + i).innerHTML =
        question4.options[i - 1];
    }
    currentQue += 1;

    sessionStorage.setItem("qNo", currentQue);
  } else if (currentQue === 5) {
    var questionInHtml = document.querySelector("#questionInHtml");
    questionInHtml.innerHTML = question5.question;

    for (var i = 1; i < 5; i++) {
      document.querySelector("#options" + i).value = question5.options[i - 1];
      document.querySelector("#choice" + i).innerHTML =
        question5.options[i - 1];
    }
    currentQue += 1;

    sessionStorage.setItem("qNo", currentQue);
  }
}
