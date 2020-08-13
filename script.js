//variables 
const startButton = document.getElementById('start-btn')
const nextButton =document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById
('answer-buttons')

//variables that didnt work with const
let countRightAnswers=0;
let shuffledQuestions, currentQuestionIndex
// start and next button
startButton.addEventListener ('click', startGame)
//next button is clicked variable current question index increases by 1 initiate set next question funtion
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})
// Start game funtion 

function startGame(){
    console.log('Started)')
    startButton.classList.add('hide')
    shuffledQuestions=questions.sort(()=>Math.random() -.5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    countRightAnswers=0;
    
}  

   
function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText=question.question
    question.answers.forEach(answer=> {
        const button = document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    }
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
}
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct= selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length>currentQuestionIndex+1){
    nextButton.classList.remove('hide')
}   else{
    startButton.innerText='Restart'
    startButton.classList.remove('hide')
}
if(selectedButton.dataset=correct){
    countRightAnswers++;
}
document.getElementById('right-answers').innerHTML=countRightAnswers
}

function setStatusClass(element,correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        } else {
                element.classList.add('wrong')
            }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions =[
    {
        question: 'What is the order of the 3 variables used to describe a for loop' ,
        answers : [
            
            {text: 'initialization, iteration statement, stopping condition', correct: false},
            {text: 'initialization,stopping condition, iteration statement', correct:true},
            {text: 'iteration statment, initialization, stopping condition', correct : false},
            { text: 'iteration statment, stopping condition, initialization', correct:false},

        ]   
    },
    {
        question: 'In the example operation A||B when will the operation return true ',
        answers : [
            
            {text: 'If Neither A nor B are true than the operation will return true', correct: false},
            { text: 'Both A and B must both be true in order for the operation to return true', correct:false},
            {text: 'the values of A and B are inverted', correct:false},
            {text: 'If Either A or B are true than the operation will return as true', correct:true},
        ]   
    },
    {
        question: 'Choose the Function that correctly demonstrated X+Y',
        answers : [
            {text: 'function sum(num1,num2) {return num1+num2}', correct:true},
            {text: 'function sum(num1,num2) {num1+num2}', correct: false},
            {text: 'function sum(num1,num2) { num1+num2.value}', correct: false},
            {text: 'function sum(num1,num2) { num1+num2.length}', correct: false},
        ]   
    },
    {
        question: 'What is scope?',
        answers : [
            
            {text: 'A method that allows the user to zoom on an object ', correct: false},
            {text: 'A datatype for storing values', correct: false},
            {text: 'The concept that refers to where functions and values can be accessed', correct:true},
            {text: 'A phenominon in wireframing where examine and plan thinking about the big picture of the code', correct: false},
        ]   
    },
    {
        question: 'What is more specific than AN ID or a class',
        answers : [
            {text: 'ID', correct:true},
            {text: 'Class', correct: false}
        ]   
    },
    {
        question: 'What will happen to the array of pokemon[Pickacu,Bulbasaur,Charmander] When pokemon.splice(1,0,Raltz) is run',
        answers : [
            
            {text: '[Pikachu,Bulbasaur, Charmander, Raltz]', correct: false},
            {text: '[Pikachu,Raltz,Bulbasaur,Charmander]', correct:true},
            {text: '[Raltz,Pickachu, bulbasaur, Charmander', correct: false},
            {text: '[Pikachu, Raltz, Charmander', correct: false},
        ]   
    },
   
    
]