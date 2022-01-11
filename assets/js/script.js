var timer = document.querySelector("#timer")
var intro = document.querySelector(".intro")
var questions = document.querySelector(".questions")
var showhighscore = document.querySelector(".showhighscore")
var startQuiz = document.querySelector("#start-quiz")
var inputinitial = document.querySelector(".inputinitial")
var quizData = [{
    questionTitle: "question1",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice3"
},{
    questionTitle: "question2",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice1"
},{
    questionTitle: "question3",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice2"
},{
    questionTitle: "question4",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice4"
},{
    questionTitle: "question5",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice3"
}]
var index = 0;

var timeRemaining = quizData.length*15
var timerId = null

startQuiz.addEventListener("click", beginQuiz)
function beginQuiz(){
    intro.classList.add("invisible")
    questions.classList.remove("invisible")
    displayQuestions()
timerId = setInterval(displaytimer,1000)
}
function displayQuestions(){
    questions.innerHTML = `<h3>${quizData[index].questionTitle}</h3>
    <ul>
        <li><button class="choicebutton">${quizData[index].choices[0]}</button class="choicebutton"></li>
        <li><button class="choicebutton">${quizData[index].choices[1]}</button></li>
        <li><button class="choicebutton">${quizData[index].choices[2]}</button></li>
        <li><button class="choicebutton">${quizData[index].choices[3]}</button></li>
    </ul>`
    var choicebutton = document.querySelectorAll(".choicebutton")
    for (let i = 0; i < choicebutton.length; i++) {
        choicebutton[i].addEventListener("click", function(){
            index = index + 1
            if(index<quizData.length){
                displayQuestions()
            }
            else{
                clearInterval(timerId)
                questions.classList.add("invisible")
                inputinitial.classList.remove("invisible")
            }
        })
    }
}
function displaytimer(){
  
    if(timeRemaining===0){
        clearInterval(timerId)
    }
    timer.innerHTML = timeRemaining--
}