function roll_dice(){
    const no_ofdice=document.getElementById("no_ofdice").value;
    const result_in_number=document.getElementById("result_in_number");
    const result_in_images=document.getElementById("result_in_images");
    const value=[];
    const image=[]
    for (let i = 0; i < no_ofdice; i++) {
        let no=(Math.floor(Math.random()*6))+1;
        value.push(no);
        image.push(`<img src="images/${no}.png" alt="Dice ${no}">`);
    }
    result_in_number.textContent=`dice: ${value.join(", ")}`;
    result_in_images.innerHTML=image.join(" ");
}