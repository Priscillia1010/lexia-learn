var modal = document.getElementById("myModal")
var complete = document.getElementById("claim-hadiah")
var span = document.getElementsByClassName("close")[0];
var claim = document.getElementsByClassName("claim")[0];

complete.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none"
}

claim.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}