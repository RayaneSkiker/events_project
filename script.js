let div = document.querySelector("div");

let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorlessButton = document.getElementById("colorless");

aquaButton.onclick = function()
{
    div.style.backgroundColor = "aqua";
    div.innerHTML = "aqua";
}

tealButton.onclick = function()
{
    div.style.backgroundColor = "teal";
    div.innerHTML = "teal";
}

pinkButton.onclick = function()
{
    div.style.backgroundColor = "pink";
    div.innerHTML = "pink";
}

purpleButton.onclick = function()
{
    div.style.backgroundColor = "purple";
    div.innerHTML = "purple";
}

colorlessButton.onclick = function()
{
    div.style.backgroundColor = "white";
    div.innerHTML = "colorless";
}