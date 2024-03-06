"use strict";
const log = console.log();

function openNav(e) {
  document.getElementById("myNav").style.height = "100%";
  e.classList.toggle("change");
  if (e.classList[1] != "change") closeNav();
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
