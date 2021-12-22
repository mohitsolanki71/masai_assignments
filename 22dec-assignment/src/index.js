import("./index.css");
import image from "./logo-social.png";

let title = document.createElement("h1");
title.innerText = "Assignment Notes";

let logo = document.createElement("img");
logo.src= image;

document.getElementById("name").append(logo, title);

let task = document.getElementById("task");
let input = document.createElement("input");
input.type="text";
input.placeholder="enter your task here";

let todo = document.getElementById("todo");

let button = document.createElement("button");
button.innerText = "submit";
button.addEventListener("click", sub);


function sub(){
    let list = document.createElement("li");
    
    list.innerText = input.value;
    
    if(input.value.length != 0){
        
        todo.append(list);
    }

    input.value = null;
}

task.append(input, button);
