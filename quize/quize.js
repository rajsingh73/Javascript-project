const questions=[
    {
        question:"what is your name?",
        answer:[
            {text:"shark",correct:false},
            {text:"dolphin",correct:false},
            {text:"elephen",correct:false},
            {text:"nishant",correct:true}
        ]
    },
    {
        question:"what is your class?",
        answer:[
            {text:"1",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:false},
            {text:"4",correct:true}
        ]
    },
    {
        question:"what is your roll no?",
        answer:[
            {text:"1",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:false},
            {text:"67",correct:true}
        ]
    }
]
const question=document.querySelector('.question');
const ans=document.querySelector('.button-container');
const nbt=document.querySelector('.next');
let currentindex=0;
let score=0;
const qulen=questions.length;
function startquize(){
    index=0;
    score=0;
    nbt.innerHTML="Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currentquestion=questions[currentindex];
    let questionno=currentindex+1;
    question.innerHTML=questionno+". "+currentquestion.question;
    currentquestion.answer.forEach(answers=>{
        const but=document.createElement("button");
        but.innerHTML=answers.text;
        but.classList.add("bt");
        ans.appendChild(but);
        if(answers.correct){
            but.dataset.correct=answers.correct;
        }
        but.addEventListener('click',selectanswer);
    });
}
function resetstate(){
    while(ans.firstChild){
        ans.removeChild(ans.firstChild);
    }
    nbt.style.display="none";
}
function selectanswer(e){
    const selectbtn=e.target;
    const val=selectbtn.dataset.correct==="true";
    if(val){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(ans.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nbt.style.display="block";

}
nbt.addEventListener('click',show);
function show(){
    if(currentindex<qulen){
        handlebut();
    }
    else{
        currentindex=0;
        startquize();
    }
}
function handlebut(){
    currentindex++;
    if(currentindex<qulen){
        showquestion();
    }
    else{
        showscore();
    }
}
function showscore(){
    resetstate();
    question.innerHTML=`Your score is: ${score}/${questions.length}`;
    nbt.innerHTML="play again";
    nbt.style.display="block";
}
startquize();