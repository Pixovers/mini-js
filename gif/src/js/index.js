
document.getElementById("button").addEventListener("click", ()=> {

    let input_text = document.getElementById("input").value;

    ShowGIFS(input_text);

});

document.getElementById("input").addEventListener("keyup", (e)=> {

    let input_text = document.getElementById("input").value;

    if (e.keyCode === 13) {
        ShowGIFS(input_text);
    }

});

let url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

// AJAX Request
let call = new XMLHttpRequest();
call.open( 'GET', url );
call.send();

call.addEventListener('load',(e)=>{

    let data = e.target.response;
    console.log(data);

})


/* 3. Show GIFs */

function ShowGIFS(input_text) {

    document.getElementById("content").innerHTML = input_text;

    
}