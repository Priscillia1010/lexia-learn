var tiger_modal = document.getElementById("tigerModal")
var tiger = document.getElementById("tiger-modal")
var btn_tiger = document.getElementsByClassName("close-tiger")[0];

tiger.onclick = function() {
    console.log("Tiger image clicked");
    tiger_modal.style.display = "block"
}

btn_tiger.onclick = function() {
    console.log("Close button clicked");
    tiger_modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == tiger_modal) {
        console.log("Outside modal clicked");
        tiger_modal.style.display = "none"
    }
}

var frog_modal = document.getElementById("frogModal")
var frog = document.getElementById("frog-modal")
var btn_frog = document.getElementsByClassName("close-frog")[0];

frog.onclick = function() {
    console.log("Frog image clicked");
    frog_modal.style.display = "block"
}

btn_frog.onclick = function() {
    console.log("Close button clicked");
    frog_modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == frog_modal) {
        console.log("Outside modal clicked");
        frog_modal.style.display = "none"
    }
}

var reindeer_modal = document.getElementById("reindeerModal")
var reindeer = document.getElementById("reindeer-modal")
var btn_reindeer = document.getElementsByClassName("close-reindeer")[0];

reindeer.onclick = function() {
    console.log("Reindeer image clicked");
    reindeer_modal.style.display = "block"
}

btn_reindeer.onclick = function() {
    console.log("Close button clicked");
    reindeer_modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == reindeer_modal) {
        console.log("Outside modal clicked");
        reindeer_modal.style.display = "none"
    }
}

var dove_modal = document.getElementById("doveModal")
var dove = document.getElementById("dove-modal")
var btn_dove = document.getElementsByClassName("close-dove")[0];

dove.onclick = function() {
    console.log("Dove image clicked");
    dove_modal.style.display = "block"
}

btn_dove.onclick = function() {
    console.log("Close button clicked");
    dove_modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == dove_modal) {
        console.log("Outside modal clicked");
        dove_modal.style.display = "none"
    }
}

var lion_modal = document.getElementById("lionModal")
var lion = document.getElementById("lion-modal")
var btn_lion = document.getElementsByClassName("close-lion")[0];

lion.onclick = function() {
    console.log("Lion image clicked");
    lion_modal.style.display = "block"
}

btn_lion.onclick = function() {
    console.log("Close button clicked");
    lion_modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == lion_modal) {
        console.log("Outside modal clicked");
        lion_modal.style.display = "none"
    }
}

var rabbit_modal = document.getElementById("rabbitModal")
var rabbit = document.getElementById("rabbit-modal")
var btn_rabbit = document.getElementsByClassName("close-rabbit")[0];

rabbit.onclick = function() {
    console.log("Rabbit image clicked");
    rabbit_modal.style.display = "block"
}

btn_rabbit.onclick = function() {
    console.log("Close button clicked");
    rabbit_modal.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == rabbit_modal) {
        console.log("Outside modal clicked");
        rabbit_modal.style.display = "none"
    }
}