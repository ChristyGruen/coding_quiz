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
  {question: 'What kind of datatype is a string?', A: 'Boolean', B: 'Primitive', C: 'Complex', D:'Undefined', correctAnswer: 'Primitive', correctSelection: 'B'},

  {question: 'What do you call a variable is declared but not assigned?', A: 'Boolean', B:'Primitive', C: 'Complex', D:'Undefined', correctAnswer:"Undefined", correctSelection: 'D'},

  {question: 'What kind of datatype is an array?', A: 'Boolean', B:'Primitive', C: 'Complex', D:'Undefined', correctAnswer:"Complex", correctSelection: 'C'},

  {question: 'How is the operator = = used?', A: 'to assign a value to a variable', B:'to compare both values and types between two variables', C: 'to compare values between two variables', D:'to identify whether two variables are not the same', correctAnswer:"to compare values between two variables", correctSelection: 'C'},

  {question: 'How is the assignment operator != used?',  A: 'to assign a value to a variable', B:'to compare both values and types between two variables', C: 'to compare values between two variables', D:'to identify whether two variables are not the same', correctAnswer:"to identify whether two variables are not the same", correctSelection: 'D'},

  {question: 'An array is surrounded by which symbols?', A: '< >', B:'" "', C: '[ ]', D:'{ }', correctAnswer:"[ ]", correctSelection: 'C'},

  {question: 'myArray = ["dog","cat","mouse", "snake"]  What result would be logged by console.log(myArray[3])? ', A: 'dog', B:'cat', C: 'mouse', D:'snake', correctAnswer:"snake", correctSelection: 'D'},

  {question: 'let text = "onomatopoeia";  let length = text.length; length = ?', A: '10', B:'12', C: '0', D:'1', correctAnswer:"12", correctSelection: 'B'},

  {question: 'What is not a type of JavaScript loop?', A: 'for', B:'when', C: 'while', D:'for in', correctAnswer:"when", correctSelection: 'B'},

  {question: 'JSON stands for?', A: 'JavaScript Object Notation', B:'JavaScript Object Node', C: 'The best kid ever', D:'JavaScript Open Notation', correctAnswer:"JavaScript Object Notation", correctSelection: 'A'},

];
  



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
    timeEl.textContent = `Time: ${minutesLeft/2}  minutes left.`;

    if(minutesLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      // gameOver();
    }

  }, 
  // 60000 //one minute intervals
  30000 // ten second intervals
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
    alert(`You answered all of the questions before the timer ran out.  You answered ${correctAnswers} out of a total of ${totalAnswers}.`)
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