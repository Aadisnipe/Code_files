// digital clock

function update() {
    let time = new Date();
    let hour=time.getHours();
    let merdian = hour>12 ? "PM" : "AM";
    hour=hour % 12 || 12; // Convert 24-hour time to 12-hour format; replace 0 (midnight/noon) with 12 because in or oprator when left side is 0 , null and undefined it automatically paste right side value
    hour =hour.toString().padStart(2,0);
    let min=time.getMinutes().toString().padStart(2,0);
    let sec=time.getSeconds().toString().padStart(2,0);
    let time_string=`${hour}:${min}:${sec} ${merdian}`;
    document.getElementById("clock").textContent=time_string;
}
update();
setInterval(update,1000);