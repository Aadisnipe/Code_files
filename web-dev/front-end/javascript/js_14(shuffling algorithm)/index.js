a=[1,2,3,4,5,6,7,8,9,10]
function shuffle (a){
    for(let i =a.length-1;i>0;i--){
        let random = Math.floor(Math.random() * (i+1)); 
        [a[random],a[i]] = [a[i],a[random]];
    }
    return a; 
}
console.log(shuffle(a));
