var move = document.getElementById("move");
var Examine = document.getElementById("Examine");
var Take = document.getElementById("Take");
var Attack = document.getElementById("Attack");
var selected = 2;


document.getElementById("start").addEventListener("click", function(){
    document.getElementById("StartScreen").style.display = "none";
});

move.addEventListener("mouseover",function(){
    move.style.color = "black";
    move.style.border = "5px solid black";
    move.style.backgroundColor = "white";
});
move.addEventListener("mouseout",function(){
    move.style.color = "white";
    move.style.border = "5px solid white";
    move.style.backgroundColor = "black";
});
Examine.addEventListener("mouseover",function(){
    Examine.style.color = "black";
    Examine.style.border = "5px solid black";
    Examine.style.backgroundColor = "white";
});
Examine.addEventListener("mouseout",function(){
    Examine.style.color = "white";
    Examine.style.border = "5px solid white";
    Examine.style.backgroundColor = "black";
});
Take.addEventListener("mouseover",function(){
    Take.style.color = "black";
    Take.style.border = "5px solid black";
    Take.style.backgroundColor = "white";
});
Take.addEventListener("mouseout",function(){
    Take.style.color = "white";
    Take.style.border = "5px solid white";
    Take.style.backgroundColor = "black";
});
Attack.addEventListener("mouseover",function(){
    Attack.style.color = "black";
    Attack.style.border = "5px solid black";
    Attack.style.backgroundColor = "white";
});
Attack.addEventListener("mouseout",function(){
    Attack.style.color = "white";
    Attack.style.border = "5px solid white";
    Attack.style.backgroundColor = "black";
});