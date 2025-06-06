const inputbox=document.querySelector('.inp');
const linecont=document.querySelector('.line-contain');
function addtask(){
    if(inputbox.value===''){
        alert('Please write something to Add on list');
    }
    else{
        const li=document.createElement('li');
        li.innerHTML=inputbox.value;
        linecont.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputbox.value='';
    savedata();
}
linecont.addEventListener('click',(event)=>{
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked');
    }
    else if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();

    }
    savedata();
})
function savedata(){
    localStorage.setItem('data',linecont.innerHTML);
}
function showtask(){
    linecont.innerHTML=localStorage.getItem('data');
}
showtask();
inputbox.addEventListener('keydown',(event)=>{
    if(event.key==="Enter") addtask();
})