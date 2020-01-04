var tVal = document.getElementsByClassName("currentTime");

window.onload = function(){

    var repeat = setInterval(updateDate, 1000);

    function updateDate(){
        var d = new Date;
        var t = d.toLocaleTimeString();
        console.log(t);
        console.log(tVal.length);

        tVal[0].innerHTML = "Time: " + t;
    }
    
    tVal[0].onclick = function(){ clearInterval(repeat)}
}

