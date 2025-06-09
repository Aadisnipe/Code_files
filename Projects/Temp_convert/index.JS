const input=document.getElementById("input");
const fromC=document.getElementById("unitC");
const fromF=document.getElementById("unitF");
const result=document.getElementById("result");
let temp;
function convert(){
    if (fromC.checked) {
        temp=Number(input.value);
        temp=(temp*9/5)+32;
        result.textContent=temp.toFixed(1) +`°F`; temp=Number(input.value);
    }
    else if(fromF.checked){
        temp=Number(input.value);
        temp=(temp-32)*5/9;
        result.textContent=temp.toFixed(2) +`°F`;
    }
    else{
        result.textContent="Select a Unit!"
    }
}

