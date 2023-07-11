// let quizQuestion = quizQnA[0].question
var timeEl
const startEl = document.querySelector('#startButton');
// const selectEl = document.querySelector('#listAnswer')
const selectB1 = document.querySelector('#buttonOne');
const selectB2 = document.querySelector('#buttonTwo');
const selectB3 = document.querySelector('#buttonThree');
const selectB4 = document.querySelector('#buttonFour');

let correctAnswers = 0;
let totalAnswers = 0;
let userInitials = '';
let userHistory = {initials: 'TBD',
numCorrect: 0, numTotal: 0}
localStorage.setItem('userHistory', JSON.stringify(userHistory));
let minutesLeft = 10;




//timers in Mod4 lessons 09, 10


let quizQnA = [
  {question: 'What is your favorite color?', A: 'blue', B: 'green', C: 'yellow', D:'red', correctAnswer: 'green', correctSelection: 'B'},
  {question: 'What is your favorite pet animal?', A: 'cat', B:'dog', C: 'parakeet', D:'bunny', correctAnswer:"cat", correctSelection: 'A'}];



function startQuiz(){
  console.log('hello PJ')
  setTime()
  loopQ()

}
  //end game when timer runs out

var timeEl = document.querySelector(".time");  // shows the countdown

function setTime(event) {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    let text = localStorage.getItem('userHistory');
    let userHistory = JSON.parse(text);
    minutesLeft--;
    timeEl.textContent = `Time: ${minutesLeft}  minutes left.`;

    if(minutesLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 60000);

}

// Function to create and append colorsplosion image
function sendMessage(event) {
  event.preventDefault();
  timeEl.textContent = " ";

}


function loopQ(){
//add while timer is not zero, else end
for (let i = 0; i <quizQnA.length; i++){
  //write question and answers to webpage
  document.getElementById('questionText').innerHTML = quizQnA[i].question;
  document.getElementById('answerTextA').innerHTML = quizQnA[i].A; 
  document.getElementById('answerTextB').innerHTML = quizQnA[i].B;
  document.getElementById('answerTextC').innerHTML = quizQnA[i].C;
  document.getElementById('answerTextD').innerHTML = quizQnA[i].D;
  //event listener for clicking on answers, 
  //check answer against correct answer
  //add to correct question and total question values

  selectB1.addEventListener('click',gradeQ);
  selectB2.addEventListener('click',gradeQ);
  selectB3.addEventListener('click',gradeQ);
  selectB4.addEventListener('click',gradeQ);
}

}



function gradeQ(event){
  console.log(quizQnA[1].correctSelection)
  console.log(this.value) //this returns the selected value A,B,C,D
  if(this.value == quizQnA[1].correctSelection){
    console.log('Correct Answer!'),
    correctAnswers ++,
    totalAnswers ++,
    console.log(correctAnswers),
    console.log(totalAnswers)

  }
  else{
    console.log('bummer')
    console.log(`The correct answer is ${quizQnA[1].correctSelection}.${quizQnA[1].correctAnswer}`)
    totalAnswers ++
    console.log(totalAnswers)
    //subtract time from timer
  }


}




function gameOver(){
  //enter initials
  userInitials = prompt('please enter your initials')
  //update userHistory with current info
  userHistory.initials = userInitials;
  userHistory.numCorrect = correctAnswers;
  userHistory.numTotal = totalAnswers;
  if (totalAnswers == quizQnA.length){
    alert('Congratulations! You completed all of the questions before the timer ran out!')
  }
  else
  {
    alert(`You answered ${correctAnswers} out of a total of ${totalAnswers}.  There were ${quizQnA.length - totalAnswers} left.  Better luck next time!`)
  }
  //save userHistory to localStorage
  localStorage.setItem('userHistory', JSON.stringify(userHistory));
  //reset variables
  userInitials = '';
  correctAnswers = 0;
  totalAnswers = 0;




  //update local storage with correct answers and total answers
  //if total answers = quizQnA.length, congratulations you completed all of the questions before the timer ran out!
  //if total answers != quizQnA.length, You answered correct answers out of a total of total answers.  There were quizQnA.length - totalAnswers left.  Better luck next time!

  

}

startEl.addEventListener('click',startQuiz);
// selectEl.addEventListener('click',gradeQ)
selectB1.addEventListener('click',gradeQ);
selectB2.addEventListener('click',gradeQ);
selectB3.addEventListener('click',gradeQ);
selectB4.addEventListener('click',gradeQ);














// startEl.addEventListener('click',startQuiz);
// selectEl.addEventListener('click',gradeQ);

// another way to store the questions?? 
// var questions = [{
// question: 'q1',
// answer:[
//   {text:'answer A', isCorrect: true},
//   {text:'answer B', isCorrect: false},
//   {text:'answer C', isCorrect: false},
//   {text:'answer D', isCorrect: false}
// ]
// }]

// Array.from(something) will give you an array from whatever is wrapped