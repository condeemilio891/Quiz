const quizData=[
    {
        question: "which of the following correctly describes a neuron?",
        a:'axon terminal recieves information, the cell body processes the information, the axon trasmites the data accross the neuron and the dendrites pass the information off the other neurons',
        b: 'the axon recieves stimuli, the axon terminal processes the information, the cell body passes the information across the neuron, the axon terminal passes it to the  other neurons ',
        c:'dendrites recieve stimuli, the cell body processes the stimuli/information, the axon passes signals long distances across the neuron, the axon terminal sends stimuli to  the next neuron',
        d:'the dendrites recieve the stimuli, the axon processes the stimuli, the cell body transports the stimuli, the exon terminal tramsmites the information to other neurons',
        correct:'c'
     

    },
    {
        question: "a bundle of axons is a ?",
        a:'nerve',
        b: 'Myelin sheath',
        c:'neuronal circuit',
        d:'muscle fiber',
        correct:'a'
     

    },
    {
        question: "when the neuron is in a resting state",
        a:'their are more negativly charged ions outside of the cell',
        b: 'the membrane potential is at a voltage of 0mV',
        c:'the chemical and electrical gradiants are even on both the outside and inside',
        d:'the inside of the cell is less positive than the outside',
        correct:'d'
     

    },
    {
        question: "how do ions move accross the membrane",
        a:'passive diffusion through the specific channel to their molucule',
        b: 'voltage-gated ion channels',
        c:'ligand gated channels ',
        d:'all of the above',
        correct:'d'
     

    },
    {
        question: "how are ligand gated channels triggered",
        a:'by a molecule that binds to the channel',
        b: 'when the voltage of the membrane reaches a specific potential',
        c:'in response to physical forces like changes in length and presure',
        d:'none of the above',
        correct:'a'
     

    },
    {
        question: "a graded potential causes the voltage of the membrane to",
        a:'depolerize slightly',
        b: 'hyperpolerize slightly',
        c:'depolerize and hyperpolerize slightly ',
        d:'none of the above',
        correct:'c'
     

    },
    {
        question: "in order to stabalize the neurons membrane potential the sodium potasium pump ",
        a:'transports K+ outside the cell and na inside of the cell it does this using a ligand molecule',
        b: 'transports Na+ outside the cell and k+ inside of the cell it does this by using ATP',
        c:'transports Na+ outside the cell and K+ inside of the cell by using a ligand molecule',
        d:'transports K+ outside the cell and NA inside of the cell by using ATP',
        correct:'b'
     

    },
    {
        question: "the concentration gradient on the inside of the cell ",
        a:'is negative and contains more NA+ than the outside of the cell',
        b: 'is positive and contains more NA+ than the outside of the cell',
        c:' is positive and containes more K+ than the outside of the cell',
        d:'is negative and contains more K+ than the outside of the cell',
        correct:'d'
     

    },
    {
        question: "under  what conditions does a nueron need to be in order to fire an action potential",
        a:'depolerize slightly',
        b: 'hyperpolerize slightly',
        c:'depolerize and hyperpolerize slightly ',
        d:'none of the above',
        correct:'c'
     

    },
    {
        question: "what is the treshhold voltage that results in an action potential",
        a:'-70mv',
        b: '-40mv',
        c:'0mv ',
        d:'40mv',
        correct:'b'
     

    },
    {
        question: "when the action potential initiates what occurs during depolerization",
        a:'the voltage gated channels(NA) are opened causing NA to rush into the cell making the membrane potential more positive',
        b: 'the voltage gated channels(K) are opened causing K to rush into the cell making the membrane potential more positive',
        c:' voltage gated channels(K) are opened causing k to rush outside the cell making the membrane potential more negative',
        d:'voltage gated channels(NA) are opened causing NA to rush outside the cell making the membrane potential more negative',
        correct:'a'
     

    },
    {
        question: "after the overshoot repolerization occurs how does this happen? ",
        a:'voltage gated channels(NA) open causing Na+ to rush outside the cell',
        b: 'voltage gated channels(K) open causing K+ to rush outside of the cell',
        c:'ligand gated channels open causing NA to rush outside the cell',
        d:'ligand gated channels open causing K to rush back in the cell ',
        correct:'b'
     

    },
    {
        question: "What is the purpose of hyperpolerization",
        a:'to reset the action potential',
        b: 'to get teh voltage down to -70mV',
        c:'to reduce the voltage to -40mV ',
        d:'to prevent another action potential from occuring immediatly after the first',
        correct:'d'
     

    },
    {
        question: "The abosolute refractory period",
        a:'prevents another action potential from occuring again to quickly',
        b: 'prrevent the action potential from going backwards',
        c:'both a and b',
        d:'none of the above',
        correct:'c'
     

    },
    {
        question:"if a stronger stimuli hits the action potential how is it effected",
        a:'the information is processed more rapidly',
        b: 'it does not matter',
        c:' it is neurotoxic',
        d:'yourr depression is gone',
        correct:'b'
     

    },
    {
        question: "how is it that the body can respond to intense pain and a gentle breeze diffentry regarding the behavior of action potentials",
        a:'the action potential is more intense causing higher voltage',
        b: 'the action potential is shot off at a rate with higher frequency',
        c:'both a and b ',
        d:'none of the above, the action potential is not a mechanism that can measure this stimuli ',
        correct:'b'
     

    },
];
//this get the element of list from the html. the specific answers. 
const questionel=document.getElementById('question');
const quiz=document.getElementById('quiz');
const answerEls=document.querySelectorAll('.answer');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById("submit");
//variable that counts the current question in the quizdata array 
let currentQuestion=0;

let score=0;
// function that I will call on click
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    //current quiz data = the current question in teh array of quiz data
    const currentQuizData=quizData[currentQuestion]

    // Change the HTML content of the element questionEl with inner html. to the current index of 
    //the array ofquz data 
   questionel.innerText=currentQuizData.question;
   a_text.innerText=currentQuizData.a;
   b_text.innerText=currentQuizData.b;
   c_text.innerText=currentQuizData.c;
   d_text.innerText=currentQuizData.d;
}

function getSelected(){


    let answer=undefined;


    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}
//a function to deselect a reset the state
function deselectAnswers(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}


   //a function that triggers on the submit click, 
submitBtn.addEventListener('click',()=> {
    const answer=getSelected();
    console.log(answer);

    if(answer){
        if(answer===quizData[currentQuestion].correct){
            score++
            
        }
        
      currentQuestion++;
 
// if the lenght of the array is not at the end run the function load Quiz
        if(currentQuestion<quizData.length){
                loadQuiz();
        }else{
                alert('You finished')
                    quiz.innerHTML=`<h2>you answered
                     ${score}/${quizData.length} questions correctly 
                     </h2><button onclick="location.reload()"
                     >Try Again</button>`;
        }
    }
});
   


