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
  {question: 'What is your favorite pet animal?', A: 'cat', B:'dog', C: 'parakeet', D:'bunny', correctAnswer:"cat", correctSelection: 'A'},
  {question: 'What is your favorite movie genre?', A: 'drama', B:'western', C: 'science fiction', D:'comedy', correctAnswer:"science fiction", correctSelection: 'C'},
  {question: 'What is your favorite dinner?', A: 'spaghetti', B:'steak and potatoes', C: 'hamburgers and chips', D:'seared scallops and salad', correctAnswer:"seared scallops and salad", correctSelection: 'D'}];



function startQuiz(){
  console.log('hello PJ')
  setTime()
  loopQ(0)

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

    if(minutesLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      // gameOver();
    }

  }, 
  // 60000 //one minute intervals
  10000 // ten second intervals
  );

}

function loopQ(qNo){
  if (minutesLeft >0 & qNo<quizQnA.length){
      //write question and answers to webpage
      document.getElementById('questionText').innerHTML = quizQnA[qNo].question;
      document.getElementById('answerTextA').innerHTML = quizQnA[qNo].A; 
      document.getElementById('answerTextB').innerHTML = quizQnA[qNo].B;
      document.getElementById('answerTextC').innerHTML = quizQnA[qNo].C;
      document.getElementById('answerTextD').innerHTML = quizQnA[qNo].D;
      //event listener for clicking on answers, 
      //check answer against correct answer
      //add to correct question and total question values
  
      selectB1.addEventListener('click',gradeQ);
      selectB2.addEventListener('click',gradeQ);
      selectB3.addEventListener('click',gradeQ);
      selectB4.addEventListener('click',gradeQ);
    
      
    function gradeQ(event){
      selectB1.removeEventListener('click', gradeQ);
			selectB2.removeEventListener('click', gradeQ);
			selectB3.removeEventListener('click', gradeQ);
			selectB4.removeEventListener('click', gradeQ);
      console.log(quizQnA[qNo].correctSelection)
      console.log(this.value) //this returns the selected value A,B,C,D
      if(this.value == quizQnA[qNo].correctSelection){
        console.log('Correct Answer!'),
        correctAnswers ++,
        totalAnswers ++,
        console.log(correctAnswers),
        console.log(totalAnswers)
      }
      else{
        console.log('bummer'),
        console.log(`The correct answer is ${quizQnA[qNo].correctSelection}.{quizQnA[i].correctAnswer}`),
        totalAnswers ++,
        console.log(totalAnswers)
        //subtract time from timer
        minutesLeft--;
      }
      loopQ(qNo +1)
    }
  }
    else{
      gameOver();
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
}

startEl.addEventListener('click',startQuiz);















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