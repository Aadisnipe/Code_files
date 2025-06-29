function generate_password({isnumber,islower,isupper,issymbol,passlength}){
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbolcase="!@#$%^&*()_+-=~{}|[]\\:'<>?,./'`";
    let numbbercase="01233456789";
    let password="";
    let allvalues="";
    allvalues+= islower ? lowercase : "";
    allvalues+= isnumber ? numbbercase : "";
    allvalues+= issymbol ? symbolcase : "";
    allvalues+= isupper ? uppercase : "";
    if (passlength<=7) {
        return "Password Musrt Be 8 Character Long";    
    }
    if (allvalues.length==0) {
        return "Must select a option";   
    }
    for (let i = 0; i < passlength; i++) {
        let index=Math.floor(Math.random()*allvalues.length)
        password += allvalues[index];
    }
    return password;
    
}
const puss={
 isnumber:true,
 islower:true,
 isupper:true,
 issymbol:true,
 passlength:8
};
let password=generate_password(puss);
console.log(password);