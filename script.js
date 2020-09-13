const quizData=[
    {
        question: "Which of the following correctly describes the functions of the parts of the neuron?",
        a:' The axon terminal receives information, the cell body processes the information, the axon passes the data across the neuron and the dendrites pass the information to the other neurons',
        b: 'The axon receives stimuli, the axon terminal processes the information, the cell body passes the information across the neuron, the axon terminal passes it to the  other neurons ',
        c:'Dendrites receive stimuli, the cell body processes the stimuli/information, the axon passes signals long distances across the neuron, the axon terminal sends stimuli to  the next neuron',
        d:'The dendrites recieve the stimuli, the axon processes the stimuli, the cell body transports the stimuli, the axon terminal transmites the information to other neurons',
        correct:'c'
     

    },
    {
        question: "a bundle of axons is a ?",
        a:'Nerve',
        b: 'Myelin sheath',
        c:'Neuronal circuit',
        d:'Muscle fiber',
        correct:'a'
     

    },
    {
        question: "when the neuron is in a resting state",
        a:'Their are more negativly charged ions outside of the cell',
        b: 'The membrane potential is at a voltage of 0mV',
        c:'The chemical and electrical gradiants are even on both the outside and inside',
        d:'The inside of the cell is less positive than the outside',
        correct:'d'
     

    },
    {
        question: "How do ions move accross the membrane",
        a:'Through passive diffusion through the specific channel assigned to their molecule',
        b: 'Voltage-gated ion channels',
        c:'Ligand gated channels ',
        d:'All of the above',
        correct:'d'
     

    },
    {
        question: "How are ligand gated channels triggered",
        a:'By a molecule that binds to the channel',
        b: 'When the voltage of the membrane reaches a specific potential',
        c:'In response to physical forces like changes in length and presure',
        d:'None of the above',
        correct:'a'
     

    },
    {
        question: "A graded potential causes the voltage of the membrane to",
        a:'depolarize slightly',
        b: 'hyperpolarize slightly',
        c:'depolarize and hyperpolarize slightly ',
        d:'none of the above',
        correct:'c'
     

    },
    {
        question: "in order to stabalize the neurons membrane potential.The sodium potasium pump ",
        a:'Transports K+ outside the cell and na inside of the cell it does this using a ligand molecule',
        b: 'Transports Na+ outside the cell and k+ inside of the cell it does this by using ATP',
        c:'Transports Na+ outside the cell and K+ inside of the cell by using a ligand molecule',
        d:'Transports K+ outside the cell and NA inside of the cell by using ATP',
        correct:'b'
     

    },
    {
        question: "The concentration gradient on the inside of the cell ",
        a:'Is negative and contains more NA+ than the outside of the cell',
        b: 'Is positive and contains more NA+ than the outside of the cell',
        c:' Is positive and containes more K+ than the outside of the cell',
        d:'Is negative and contains more K+ than the outside of the cell',
        correct:'d'
     

    },

    {
        question: "What is the treshhold voltage that results in an action potential",
        a:'-70mv',
        b: '-40mv',
        c:'0mv ',
        d:'40mv',
        correct:'b'
     

    },
    {
        question: "When the action potential initiates what occurs during depolarization",
        a:'The voltage gated channels(NA) are opened causing NA to rush into the cell making the membrane potential more positive',
        b: 'The voltage gated channels(K) are opened causing K to rush into the cell making the membrane potential more positive',
        c:'Voltage gated channels(K) are opened causing k to rush outside the cell making the membrane potential more negative',
        d:'Voltage gated channels(NA) are opened causing NA to rush outside the cell making the membrane potential more negative',
        correct:'a'
     

    },
    {
        question: "after the overshoot repolerization occurs how does this happen? ",
        a:'Voltage gated channels(NA) open causing Na+ to rush outside the cell',
        b: 'Voltage gated channels(K) open causing K+ to rush outside of the cell',
        c:'Ligand gated channels open causing NA to rush outside the cell',
        d:'Ligand gated channels open causing K to rush back in the cell ',
        correct:'b'
     

    },
    {
        question: "What is the purpose of hyperpolerization",
        a:'To reset the action potential',
        b: 'To get teh voltage down to -70mV',
        c:'To reduce the voltage to -40mV ',
        d:'To prevent another action potential from occuring immediatly after the first',
        correct:'d'
     

    },
    {
        question: "The absolute refractory period",
        a:'Prevents another action potential from occuring again to quickly',
        b: 'Prevent the action potential from going backwards',
        c:'Both a and b',
        d:'None of the above',
        correct:'c'
     

    },
    {
        question:"If a stronger stimuli hits the action potential how is it effected",
        a:'The information is processed more rapidly',
        b: 'It does not matter',
        c:' It is neurotoxic',
        d:'your depression is gone due to electrochemical therapy',
        correct:'b'
     

    },
    {
        question: "How is it that the body can respond to intense pain and a gentle breeze differently regarding the behavior of action potentials",
        a:'The action potential is more intense causing higher voltage',
        b: 'The action potential is shot off at a rate with higher frequency',
        c:'Both a and b ',
        d:'None of the above, the action potential is not a mechanism that can measure this stimuli ',
        correct:'b'
     

    },
    {
        question:"What is long term potentiation",
        a:"the process that is thought to create short term memories",
        b:"the strengthening of the synapse through repeated stimulation",
        c:"The opposite of long term depression",
        d:"all of the above",

    },
    { question:"New memories are believed to be formed in the",
        a:"Hippocampus",
        b:"Pre-frontal cortex",
        c:"Occipital lobe",
        d:"Amygdala",
        correct:"a"

    },
    {
        question: "AMPA and NMDA receptors bind what molecule and are what kind of channel?",
            a:"Glutamte mechanical",
            b:"Glutamate ligand-gated",
            c:"GABA mechanical",
            d:"GABA ligand-gated",
            correct:"b",
    },
    {
        question:"Which receptor needs less stimulation to activate",
            a:"NMDA receptors",
            b:"AMPA receptors",
            c:"Glutamate receptors",
            d:"GABA receptors",
            correct:"b"


    },
    {
        question:"When Glutamate is released",
        a:"Na+ and Ca++ move into the cell at the same time because Glutamate opens the channels", 
        b:"Ca+ moves into the cell after the electrochemical gradient is nullified then Na+ moves into the cell",
        c:"Glutamate binds to the NMDA receptors and AMPA receptors causing Mg,Ca++,Na+ to come into the cell ",
        d:"Na+ moves in the cell, this results in the removal of MG++ from channels causing CA+ to flood in",
        correct:"d"
    },
    {
        question:"in the early stages of ATP the protein kineses caMKII and PKC enhance neuro transmition in what ways",
            a:"it adds phosphorus to the AMPA receptor allowing ions to flow through it more vigourously",
            b:"it adds more AMPA receptors and NMDA receptors",
            c:"it adds more AMPA receptors ",
            d:"both a and c",
            correct:'d',
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
                
                    quiz.innerHTML=`<h2>you answered
                     ${score}/${quizData.length} questions correctly 
                     </h2><button onclick="location.reload()"
                     >Try Again</button>`;
        }
    }
});
   


