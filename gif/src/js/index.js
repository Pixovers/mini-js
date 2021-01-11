
document.getElementById("button").addEventListener("click", () => {

    let input_text = document.getElementById("input").value;

    Request(input_text);

});

document.getElementById("input").addEventListener("keyup", (e) => {

    let input_text = document.getElementById("input").value;

    if (e.keyCode === 13) {
        Request(input_text);
    }

});



// AJAX Request
function Request(query) {

    query.replace(" ", "+");

    let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`;
    let call = new XMLHttpRequest();
    call.open('GET', url);
    call.send();


    call.addEventListener('load', (e) => {

        let data = JSON.parse(e.target.response);

        console.log(data);
        ShowGIFS(data);

    });
}


/* 3. Show GIFs */

function ShowGIFS(data) {
    document.getElementById('content').innerHTML = "";


    data.data.forEach(image => {
        let imageURL = image.images.fixed_height.url;
        document.getElementById('content').innerHTML += `
        <div class="col-md-3 hover-img">
        <div class="card text-white bg-dark  mb-3">
            <div class="card-header">Header</div>
            <div class="card-body p-1">
                <img src="${imageURL}" class="card-img-top" alt="">
            </div>
            <div class="card-footer p-1 d-none text-muted">
                     <span>upload:  2 days ago</span> 
                      </div>
        </div>
    </div>
    `;
        //console.log(image);
    });


    console.log("dimensione:" + data.data.length);


    document.querySelectorAll('.hover-img').forEach(e => {
        console.log("ciao");
        e.addEventListener("mouseover", mouseOver);
        e.addEventListener("mouseout", mouseOut);


    });


    function mouseOver(event) {
        console.log(this);
        this.firstElementChild.lastElementChild.classList.remove("d-none");
            //event.target.classList;
    }

    function mouseOut(event) {
        
        if( !this.firstElementChild.lastElementChild.classList.contains("d-none") ) {
            this.firstElementChild.lastElementChild.classList.add("d-none");
        }
    }




}