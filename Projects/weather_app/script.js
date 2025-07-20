const weatherform = document.querySelector(".weatherform");
const city_name=document.querySelector(".city_name");
const card =document.querySelector(".card");
const api="91bc7aedf283853f2f1373900f1f8d2e";

weatherform.addEventListener("submit", async event=>{
    event.preventDefault();
    const city=city_name.value;
    if (city) {
        try{
            const weatherdata= await getwaetherdata(city);
            display(weatherdata);
        } catch (error) {
            console.error(error);
            disperror(error);
        }
    }
    else{
        disperror("Enter a City !")
    }

})

async function getwaetherdata(city){
    const apiurl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    const response = await fetch(apiurl);
    if (!response.ok){
        throw new Error("404! 🤷");
    }
    return await response.json()
}
function display(data) {
    const {name:city, 
           main:{temp,humidity},
           weather:[{description,id}]} = data;
    card.textContent="";
    card.style.display="flex";
    const displycityname=document.createElement("h1");
    const displytemp=document.createElement("p");
    const displyhumidity=document.createElement("p");
    const displyedesc=document.createElement("p");
    const displyemoji=document.createElement("p");
    displycityname.textContent=city;
    displycityname.classList="displycityname"
    card.appendChild(displycityname);
    displytemp.textContent=`${(temp-273.15).toFixed(1)}°C`;
    displytemp.classList="displytemp";
    card.appendChild(displytemp);
    displyhumidity.textContent=`Humidity: ${humidity}%`;
    displyhumidity.classList="displyhumidity";
    card.appendChild(displyhumidity);
    displyedesc.textContent=description;
    displyedesc.classList="displyedesc";
    card.appendChild(displyedesc);
    displyemoji.textContent=wdispemoji(id);
    displyemoji.classList="displyemoji";
    card.appendChild(displyemoji);
}
function wdispemoji(watherid) {
    switch (true) {
        case (watherid >=200 && watherid < 300):
            return "🌧️";
        case (watherid >=300 && watherid < 400):
            return "🌧️"; 
        case (watherid >=500 && watherid < 600):
            return "🌧️";   
        case (watherid >=600 && watherid < 700):
            return "❄️";
        case (watherid >=700 && watherid < 800):
            return "🌫️";
        case (watherid === 800):
            return "☀️";   
        case (watherid >=801 && watherid < 810):
            return "🌥️";
        default:
            return "❓"     ;                   
    }
}
function disperror(message) {
    const errordisp=document.createElement("p");
    errordisp.textContent=message;
    errordisp.style.margin="140px 0";
    errordisp.classList.add("displyerror");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(errordisp);
}