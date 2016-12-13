"use strict";

var path = require("path");
var config = require(path.join(__dirname, "js", "configuration"));
document.querySelector("#env").textContent = config.environment;
console.log(config);

let pokemonHTML = (data) => `
<h2> #${data.id}: ${data.name} </h2>
<img src="${data.sprites.back_default}" alt="${data.name}"/>
`
const url = "http://pokeapi.co/api/v2/pokemon/1/"

let getDetails = document.getElementById("get-details")
getDetails.addEventListener("click", () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let details = document.getElementById("details");
        details.innerHTML = pokemonHTML(data);
        new Notification(document.title, {
            body: "Data Loaded."
        })
    })
    .catch((err) => console.log(err))
})
