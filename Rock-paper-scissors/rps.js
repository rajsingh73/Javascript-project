let score;
const store = localStorage.getItem('score');
score = store ? JSON.parse(store) : { win: 0, loose: 0, Tie: 0 };
let s=false;
const autoj=document.querySelector('.auto-js');
let id;
autoj.addEventListener('click',(event) =>{
    autop();
});
document.body.addEventListener('keydown',(event)=>{
    buttonplay();
});
document.querySelector('.reset-js').addEventListener('click',()=>{
    reset();
})
document.querySelector('.rock-js').addEventListener('click',()=>{
    findresult('rock');
})
document.querySelector('.paper-js').addEventListener('click',()=>{
    findresult('paper');
})
document.querySelector('.scissor-js').addEventListener('click',()=>{
    findresult('scissor');
})
function findresult(yourc) {
    const computerc = choicee();
    let finalresult='';
    if (computerc === yourc) {
        finalresult='Game Tie';
        score.Tie++;
    } else if (
        (computerc === 'rock' && yourc === 'scissor') ||
        (computerc === 'scissor' && yourc === 'paper') ||
        (computerc === 'paper' && yourc === 'rock')
    ) {
        finalresult='You Loose';
        score.loose++;
    } else {
        finalresult='You win';
        score.win++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    const res=document.querySelector('.js-result');
    res.innerHTML=finalresult;
    showimage(computerc,yourc);
    updatescore();
}
function showimage(computerc,yourc){
    const choi=document.querySelector('.js-choice');
    if(computerc==='rock' && yourc==='rock') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> computer</div>';
    if(computerc==='rock' && yourc==='paper') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> computer</div>';
    if(computerc==='rock' && yourc==='scissor') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> computer</div>';
    if(computerc==='paper' && yourc==='paper') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> computer</div>';
    if(computerc==='paper' && yourc==='rock') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> computer</div>';
    if(computerc==='paper' && yourc==='scissor') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> computer</div>';
    if(computerc==='scissor' && yourc==='scissor') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> computer</div>';
    if(computerc==='scissor' && yourc==='rock') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/rock-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> computer</div>'; 
    if(computerc==='scissor' && yourc==='paper') choi.innerHTML='<div class="flex items-center">You <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/paper-emoji.png"> <img class="h-10 w-10" src="https://supersimple.dev/projects/rock-paper-scissors/images/scissors-emoji.png"> computer</div>';
}
function choicee() {
    let a = Math.random();
    if (a <= 1 / 3) return 'rock';
    else if (a > 1 / 3 && a <= 2 / 3) return 'scissor';
    else return 'paper';
} 
function updatescore(){
    const finalr=document.querySelector('.js-complete-result');
    finalr.innerHTML=`Win: ${score.win} | Lose: ${score.loose} | Tie: ${score.Tie}`;
}
function reset(){
    score.win=0;
    score.Tie=0;
    score.loose=0;
    document.querySelector('.js-result').innerHTML='';
    document.querySelector('.js-choice').innerHTML='';
    updatescore();
    localStorage.removeItem('score');
    if(s){
        autop();
    }
}
function buttonplay(){
    if(event.key==='r'){
        findresult('rock');
    }
    else if(event.key==='p'){
        findresult('paper');
    }
    else if(event.key==='s'){
        findresult('scissor');
    }
}
function autop(){
    if(autoj.innerHTML=='Auto Play'){
        autoj.innerHTML='Close Auto play';
    }
    else{
        autoj.innerHTML='Auto Play';
    }
    if(!s){
        s=true;
        id=setInterval(()=>{
            const yuc=choicee();
            findresult(yuc);
        },2000);
    }
    else{
        clearInterval(id);
        s=false;
    }
}
const finalr=document.querySelector('.js-complete-result');
finalr.innerHTML=`Win: ${score.win} | Lose: ${score.loose} | Tie: ${score.Tie}`;