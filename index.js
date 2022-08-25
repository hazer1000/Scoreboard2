let homecount = 0
let awaycount = 0
let home = document.getElementById("home-score")

function addOne() {
    homecount += 1
    home.textContent = homecount
}

function addTwo() {
    homecount += 2
    home.textContent = homecount
}

function addThree() {
    homecount += 3
    home.textContent = homecount
}

function resetHome() {
    homecount = 0
    home.textContent = homecount
}

