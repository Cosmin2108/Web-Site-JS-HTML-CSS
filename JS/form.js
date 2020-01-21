
window.onload = function(){
    var btn = document.getElementById("feedbackSubmit");
    var list = document.getElementById("comments")

    var myObj = {comments: [] }
    if(!localStorage.getItem("comments"))
        localStorage.setItem("comments", JSON.stringify(myObj))

    show();
    btn.addEventListener("click", sent)

    function sent(event){
        event.preventDefault();
        var formData = { name: document.getElementById("name").value, email:document.getElementById("email").value, description: document.getElementById("description").value }
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("description").value = ""
        ///console.log(formData)
        store(formData)
        post(formData)
    }

    function store(obj){
        ///need Json db but I'll use localeStorage
        myObj = JSON.parse(localStorage.getItem("comments"))
        myObj.comments.push(obj)
        localStorage.setItem("comments", JSON.stringify(myObj))
        console.log(localStorage.getItem("comments"))
        // alert("Pushed")
    }

    function post(obj){
        var div = document.createElement("div")
            var h = document.createElement("h3")
            var p = document.createElement("p")

            div.className = "comment"
            h.className = "person"
            p.className = "message"

            h.innerHTML = obj.name
            p.innerHTML = obj.description
            
            div.appendChild(h)
            div.appendChild(p)
            list.appendChild(div)

    }

    function show(){

        myObj = JSON.parse(localStorage.getItem("comments"))
        for(let i = 0; i < myObj.comments.length; i++){
            var div = document.createElement("div")
            var h = document.createElement("h3")
            var p = document.createElement("p")

            div.className = "comment"
            h.className = "person"
            p.className = "message"

            h.innerHTML = myObj.comments[i].name
            p.innerHTML = myObj.comments[i].description

            div.appendChild(h)
            div.appendChild(p)
            list.appendChild(div)

        }
    }

    var useless = document.getElementsByClassName("content")[0];

    var mda = window.getComputedStyle(useless, null).getPropertyValue("background-color");

    alert("color is " + mda);

}