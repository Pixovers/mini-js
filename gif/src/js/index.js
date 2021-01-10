
document.getElementById("button").addEventListener("click", ()=> {

    let input_text = document.getElementById("input").value;

    Request();

});

document.getElementById("input").addEventListener("keyup", (e)=> {

    let input_text = document.getElementById("input").value;

    if (e.keyCode === 13) {
       Request();
    }

});



// AJAX Request
function Request(){

    let url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";
    let call = new XMLHttpRequest();
    call.open( 'GET', url );
    call.send();
    
    
    call.addEventListener('load',(e)=>{
    
        let data = JSON.parse(e.target.response);
        
        console.log(data);
        ShowGIFS( data );
    
    });
}


/* 3. Show GIFs */

function ShowGIFS(data) {


    var imageURL = data.data[0].images.fixed_height.url;
    console.log(imageURL);

    document.getElementById('content').innerHTML = `<img src="${imageURL}">`;
    //document.getElementById("content").innerHTML = input_text;

    
}