let quizQuestion = quizQnA[0].question


let quizQnA = [
  {question: 'What is your favorite color?', firstchoice: 'blue', secondchoice: 'green', thirdchoice: 'yellow', fourthchoice:'red', answer: 'green'},
  {question: 'What is your favorite pet animal', firstchoice: 'cat', secondchoice:'dog', thirdchoice: 'parakeet', fourthchoice:'bunny', correctanswer:"cat"},
]

console.log(quizQnA[0].question)
console.log(quizQnA.length)

for (let i = 0; i <quizQnA.length; i++){
  quizQuestion = quizQnA[i].question;
  quizFirstChoice = quizQnA[i].firstchoice;
  quizSecondChoice = quizQnA[i].secondchoice;
  quizThirdChoice = quizQnA[i].thirdchoice;
  quizFourthChoice = quizQnA[i].fourthchoice;
  quizAnswer = quizQnA[i].correctanswer;
}

