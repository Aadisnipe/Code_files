function generate_password(number,lower,upper,symbol,length){
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbolcase="!@#$%^&*()_+-=~{}|[]\\:'<>?,./'`";
    let numbbercase="01233456789";
    let password="";
    let allvalues="";
    allvalues+= lower ? lowercase : "";
    allvalues+= number ? numbbercase : "";
    allvalues+= symbol ? symbolcase : "";
    allvalues+= upper ? uppercase : "";
    if (length<=0) {
        return "Password Musrt Be 8 Character Long";    
    }
    if (allvalues.length==0) {
        return "Must select a option";   
    }
    for (let i = 0; i < length; i++) {
        let index=Math.floor(Math.random()*allvalues.length)
        password += allvalues[index];
    }
    return password;
    
}
const isnumber=false;
const islower=false;
const isupper=false;
const issymbol=false;
const passlength=55;

let password=generate_password(isnumber,islower,isupper,issymbol,passlength);
console.log(password);