const fillbox=document.getElementById(`fillbox`);
const Check=document.getElementById(`Check`);
const rattempt=document.getElementById(`rattempt`);
const ghint=document.getElementById(`ghint`);
const gresult=document.getElementById(`gresult`);
const reset = document.getElementById("reset");
let min = 2;
let max = 100;
let random = Math.floor(Math.random() * (max - min )) + min;
let Tattempt=10;
let Uattempt=Tattempt;
let win;
Check.onclick=function(){
    a=Number(fillbox.value);
    if (random===a && Uattempt>0) {
        gresult.textContent="";
        Uattempt--;
        rattempt.textContent=Uattempt;
        win=Tattempt-Uattempt;
        gresult.style.color="green";
        gresult.textContent=`You Win in ${win} attempt & the No. was ${random}`;
        ghint.textContent="";
        Uattempt=10;
        Check.disabled = true; //this blocks clicking this button
        reset.style.display = "block";
    }
    else if (random<a && Uattempt>0){
        gresult.textContent="";
        Uattempt--;
        rattempt.textContent=Uattempt
        ghint.textContent=" Number is smaller than "+`${a}`

    }
    else if (random>a && Uattempt>0){
        gresult.textContent="";
        Uattempt--;
        rattempt.textContent=Uattempt
        ghint.textContent=" Number is greater than "+`${a}`

    }
    else if(Uattempt==0){
        console.log(Uattempt);
        gresult.textContent="";
        rattempt.textContent="All Attempt Used";
        ghint.textContent=""
        gresult.style.color="red";
        gresult.textContent=`You Lose your No. was ${random}`;
        Check.disabled = true;
        reset.style.display = "block";

    }
};
reset.onclick = function () {
    // Reset variables
    random = Math.floor(Math.random() * (max - min)) + min;
    Uattempt = Tattempt;

    // Clear UI
    fillbox.value = "";
    gresult.textContent = "";
    gresult.style.color = "black";
    rattempt.textContent = Uattempt;
    ghint.textContent = "";
    
    // Enable the check button again
    Check.disabled = false;

    // Hide reset button
    reset.style.display = "none";
};



