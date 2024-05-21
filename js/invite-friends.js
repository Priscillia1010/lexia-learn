var modal = document.getElementById("myModal")
var invite = document.getElementById("invite")
var span = document.getElementsByClassName("close")[0];

invite.onclick = function() {
    modal.style.display = "block"
}

span.onclick = function() {
    modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}