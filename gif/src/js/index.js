
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

    let color = ['primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'dark'
    ]

    data.data.forEach(image => {
        let imageURL = image.images.fixed_height.url;
        const title = image.title;
        const capitalTitle = title.replace(/^\w/, e => e.toUpperCase()); // capitalize the first letter of a string

        let rand = Math.floor((Math.random() * color.length)); // generate a random value to determine the color of the card



        document.getElementById('content').innerHTML += `
        <div class="col-md-3 hover-img">
        <div class="card text-white bg-${color[rand]}  mb-3">
            <div class="card-header h5">${capitalTitle}</div>
            <div class="card-body p-1">
                <img src="${imageURL}" class="card-img-top" alt="">
            </div>
            <div class="card-footer p-1 text-muted">

            <div class="d-flex">
                <input class="form-control form-control-sm rounded-0 " id="input" type="search"
                    value="${imageURL}" aria-label="Search" readonly>
                <button  type="button sm" class="copy-gif-button btn btn-primary rounded-0  btn-sm"><i
                        class="fas  fa-share-alt-square"></i> </button>
      
            </div>
            <span class="h6 text-white">2 days ago</span>
            <div class="col">
            </div>
        </div>
        </div>
    </div>
    `;
        //console.log(image);
    });

    document.querySelectorAll('.hover-img').forEach(e => {

        console.log("ciao");
        e.addEventListener("mouseover", function (event) {
            this.firstElementChild.lastElementChild.classList.remove("d-none");

        });
        e.addEventListener("mouseout", function (event) {
            if (!this.firstElementChild.lastElementChild.classList.contains("d-none")) {
                this.firstElementChild.lastElementChild.classList.add("d-none");
            }
        });


    });

    document.querySelectorAll('.copy-gif-button').forEach(element => {
        element.addEventListener("click", function () {
            console.log(this);
            UrlInput = this.parentElement.firstElementChild;
            UrlInput.select();
            UrlInput.setSelectionRange(0, 999);
            document.execCommand("copy");
        });
    });

}