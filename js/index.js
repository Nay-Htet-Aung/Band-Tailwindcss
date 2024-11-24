
let box = 1;

function next() {
    document.querySelector(`#box${box}`).style.display = "none";
    box++;
    if (box > 3) box = 1;
    document.querySelector(`#box${box}`).style.display = "block";
}

function prev() {
    document.querySelector(`#box${box}`).style.display = "none";
    box--;
    if (box < 1) box = 3;
    document.querySelector(`#box${box}`).style.display = "block";
}
setInterval(next, 5000);


function openSideNavBar() {
    document.querySelector('#mobileview-side-navbar').style.display = "block";
    document.querySelector('#m-bar').style.display = "none";
}
function closeSideNavBar() {
    document.querySelector('#mobileview-side-navbar').style.display = "none";
    document.querySelector('#m-bar').style.display = "inline-block";
}

function openTicketsModel() {
    document.querySelector('#ticketsModel').style.display = 'block';
}
