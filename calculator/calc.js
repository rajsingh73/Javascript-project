let s='';
function showresult(value){
    s=s+value;
    const sel=document.querySelector('.js-result');
    sel.innerHTML=s;
}
function showres(){
    s=eval(s);
    const sel=document.querySelector('.js-result');
    sel.innerHTML=s;
}
function reset(){
    s='';
    const sel=document.querySelector('.js-result');
    sel.innerHTML=s;
}