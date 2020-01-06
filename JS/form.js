var btn = document.getElementById("feedbackSubmit");

btn.addEventListener("click", sent)

function sent(event){
    event.preventDefault();
    store();
}

function store(){
    ///Json db
    alert("Need Json");
}