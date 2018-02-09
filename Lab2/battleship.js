var area = [0, 0, 0, 0, 0, 0, 0];
var guess;
var guesses = 0;
var isSunk = false;
var size = 3;

// start game here
prompt("Random number is: " + Math.floor(Math.random() * 5));

// placeShip() here
placeShip();

guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

while (!isSunk) {
   guesses++;

   if (area[guess] == 1) {
      alert("HIT! Great shot!");
      area[guess] = 0;
   } else {
      alert("Missed... Try again!");
   }

   isSunk = checkSunk();

   // fire again if not sunk!
   if (!isSunk) {
      guess = prompt("Read, aim, fire! (enter a number from 0-6):");
   }
}

alert("SHIP SUNK!! After " + guesses + " tries..");

// check if ship has sunk or not
function checkSunk() {
   for (i = 0; i < area.length; i++) {
      if (area[i] == 1)
         return false;
   }

   return true;
}

// place ship on random location
function placeShip() {
   var x = Math.floor(Math.random() * 5);
   area[x] = x + 1; area[x] = x + 2; area[x] = x + 3;
}