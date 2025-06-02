const dec= document.getElementById(`dec`);
const res= document.getElementById(`res`);
const inc= document.getElementById(`inc`);
const lab=document.getElementById(`lab`);
let count=0;
dec.onclick=function(){
    count--;
    lab.textContent=count;
}
res.onclick=function(){
    count=0;
    lab.textContent=count;
}
inc.onclick=function(){
    count++;
    lab.textContent=count;
}
