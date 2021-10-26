let button = document.getElementById("button");
button.addEventListener("click", translate);

// to translate input;
async function translate(){

let from = document.getElementById("input").value;

let final = document.getElementById("languages").value;

let res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
        q: from,
        source: "en",
        target: final,
    }),
    headers: { "Content-Type": "application/json" }
});

let data = await res.json();

// to show data in output box
let output = document.getElementById("output");
output.innerText = data.translatedText;
}


let copy_button = document.getElementById("copy");
copy_button.addEventListener("click", copy);

function copy(){
    // to get the text field
    let copy_text = document.getElementById("output");

    // to select the text field
    copy_text.select();
    copy_text.setSelectionRange(0, 99999);

    //to copy text inside
    navigator.clipboard.writeText(copy_text.value);
}