// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(respone => respone.json())
// .then(data => console.log(data.id))
// .catch(error=>console.error(error));

//with async and await            
const imagehold=document.getElementById("imagehold");
const wrong =document.getElementById("wrong");
async function fetchdata(){
    try{
        const pokemon_search =document.getElementById("pokemon_search").value.toLowerCase();
        console.log(pokemon_search);
        const respone =await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_search}`);
        if (!respone.ok) {
            imagehold.style.display="None";
            wrong.textContent="Enter Correct Name";
            throw new Error("Something went Wrong");
        }
        else{
            const data =await respone.json();
            const imgdata=data.sprites.front_default;
            imagehold.src=imgdata;
            wrong.textContent="";
            imagehold.style.display="block";
        }
    }
    catch(error){
        console.error(error);
    }
    
}