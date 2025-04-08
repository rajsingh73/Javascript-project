let score;
let store=localStorage.getItem('score');
score=store?JSON.parse(store):{win:0,loose:0};
function clickable(yourc){
    const computerc=getcomputer();
    let result='';
    if(computerc===yourc){
        result='You win';
        score.win++;
    }
    else{
        result='You loose';
        score.loose++;
    }
    const finr=document.querySelector('.js-result');
    finr.innerHTML=result;
    imgshow(computerc);
    localStorage.setItem('score',JSON.stringify(score));
    updatescore();
}
function  imgshow(computerc){
    const imgs=document.querySelector('.img-result');
    if(computerc==='head'){
        imgs.innerHTML='<img class="w-24 h-24" src="https://www.royalmint.com/globalassets/bullion/images/products/best-value/victoria-old-veiled/marketing-1893-sovereign-obverse.png"> <p class="text-2xl ">computer choice</p>';
    }
    else imgs.innerHTML='<img class="w-24 h-24" src="https://images.vexels.com/media/users/3/264570/isolated/preview/14210011cda8a72ecf54ebf67b607dc5-quarter-dollar-illustration-tail.png"> <p class="text-2xl ">computer choice</p>';
}
function getcomputer(){
    let c=Math.random();
    if(c<1/2){
        return 'head';
    }
    else return 'tail';
}
function updatescore(){
    upd.innerHTML=`win :  ${score.win} | Loose :  ${score.loose}`;
}
const upd=document.querySelector('.update-sc');
upd.innerHTML=`win :  ${score.win} | Loose :  ${score.loose}`;