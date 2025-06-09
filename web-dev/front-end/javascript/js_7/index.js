//rest parameters it is kind of opposite if spread operator
function sum(...a){
    b=[...a];
    return a;
}

let add=sum(1,2,5,6,7);
console.log(add)