/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */



document.querySelector("form").addEventListener("submit", (e)=>{
    let weight = Number(document.getElementById("search").value);
    e.preventDefault();
    let lb = weight * 2.2046;
    let g = weight / 0.0010000;
    let oz = weight * 35.274;
    createTable(lb,g,oz);
})

function createTable(lb,g,oz){
    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const thTitle = document.createElement("th");
    thTitle.textContent = "Svorio matavimo vienetai";
    const thTitle2 = document.createElement("th");
    thTitle2.textContent = "Svoris"
    tr.append(thTitle,thTitle2);
    
    const trAnswer = document.createElement("tr");
    const tdAnswerlb = document.createElement("td");
    tdAnswerlb.textContent = "Svarai (lb)";
    const tdAnswerlbNumber = document.createElement("td");
    tdAnswerlbNumber.textContent = lb;
    trAnswer.append(tdAnswerlb,tdAnswerlbNumber);

    const trAnswer2 = document.createElement("tr");
    const tdAnswerg = document.createElement("td");
    tdAnswerg.textContent = "Gramai (g)";
    const tdAnswergNumber = document.createElement("td");
    tdAnswergNumber.textContent = g;
    trAnswer2.append(tdAnswerg,tdAnswergNumber);

    const trAnswer3 = document.createElement("tr");
    const tdAnsweroz = document.createElement("td");
    tdAnsweroz.textContent = "Unicijos (oz)";
    const tdAnswerozNumber = document.createElement("td");
    tdAnswerozNumber.textContent = oz;
    trAnswer3.append(tdAnsweroz,tdAnswerozNumber);

    table.append(tr,trAnswer,trAnswer2,trAnswer3);
    document.getElementById("output").append(table);
    table.setAttribute("class", "myTable");
}