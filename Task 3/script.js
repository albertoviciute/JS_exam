/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


document.getElementById("btn").addEventListener("click", (e)=>{
    e.preventDefault();
    getApi();
})


function getApi(){
    fetch(ENDPOINT)
    .then(response => {
    if(response.ok){
        console.log("Duomenys gauti");
        return response.json();
    }
    else{
        console.log("Kažkas negerai")
    }
    })
    .then(data => {
        createCards(data);
        document.getElementById("message").style.display = "none";
        
    });
}

function createCards(data){
    data.forEach((item,index)=>{
        createCard(item);
    })
}


function createCard(item){
    let cardDiv = document.createElement('div');
    cardDiv.setAttribute("class", "card");

    let userImg = document.createElement("img");
    userImg.setAttribute("src", item.avatar_url);
    userImg.setAttribute("class", "userImg");

    let userLogin = document.createElement("h4");
    userLogin.textContent = `Login: ${item.login}`;
    userLogin.style.textAlign = "center";
    userLogin.style.padding = "0.2rem"

    cardDiv.append(userImg, userLogin);
    document.getElementById("output").append(cardDiv);
}



