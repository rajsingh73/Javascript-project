const inp=document.querySelector('.inpt');
const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower='abcdefghijklmnopqrstuvwxyz';
const num='123456789';
const sym='!@#$%^&*()_+~-=';
const all=upper+lower+num+sym;
const length=12;
function generate(){
    let pass='';
    pass+=upper[Math.floor(Math.random()*upper.length)];
    pass+=lower[Math.floor(Math.random()*lower.length)];
    pass+=num[Math.floor(Math.random()*num.length)];
    pass+=sym[Math.floor(Math.random()*sym.length)];
    while(length>pass.length){
        pass+=all[Math.floor(Math.random()*all.length)];
    }
    inp.value=pass;
}
function copypass(){
    navigator.clipboard.writeText(inp.value);
    const im=document.querySelector('.cp');
    const c=document.querySelector('.chec');
    im.classList.add('hidden');
    c.classList.remove('hidden');
    setTimeout(()=>{
        im.classList.remove('hidden');
        c.classList.add('hidden');
    },2000);
}
document.querySelector('.cp').addEventListener('click',()=>{
    copypass();
});
document.querySelector('.gn').addEventListener('click',()=>{
    generate();
});