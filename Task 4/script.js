/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
.then( response =>{
    if(response.ok){
        console.log("Duomenys gauti");
        return response.json();
    }
    else{
        console.log("Kažkas negerai")
    }
})
.then(data => {
    console.log(data);
    createCards(data);
})


function createCards(data){
    data.forEach((item,index)=>{
        createCard(item);
    })
}

function createCard(item){
    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card");

    let title = document.createElement("h1");
    title.textContent = item.brand;

    let par = document.createElement("p");

    let arr = item.models;
    
    let str = "<ul>";
    arr.forEach((arrItem)=>{
        str += `<li>${arrItem}</li>`;
    })
   str += "</ul>";
   par.innerHTML = `<span>Models:</span>${str}`
   cardDiv.append(title,par);
   document.getElementById("output").append(cardDiv); 
}
