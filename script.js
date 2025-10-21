let home = 0;
let away = 0;

let homeEl = document.getElementById("home-score");
let awayEl = document.getElementById("away-score");

function home_add_1() {
    home += 1;
    homeEl.textContent = home;
}
function home_add_2() {
    home += 2;
    homeEl.textContent = home;
}
function home_add_3() {
    home += 3;
    homeEl.textContent = home;
}
function away_add_1() {
    away += 1;
    awayEl.textContent = away;
}
function away_add_2() {
    away += 2;
    awayEl.textContent = away;
}
function away_add_3() {
    away += 3;
    awayEl.textContent = away;
}