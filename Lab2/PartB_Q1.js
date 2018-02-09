var hyundai = {
   make: "Hyundai",
   model: "SantaFe",
   year: 2010,
   color: "blue",
   passengers: 5,
   convertible: false,
   carStatus: false,
   fuelLevel: 0,
   mileage: 89000,
   start: function() {
      if(this.fuelLevel > 0) {
         this.carStatus = true;
      } else alert("Not enough fuel to start!");
   }
};

var HSFengine = {
   type: 'V6',
   size: 3.5
};

// printCarInfo
function printCarInfo(car) {
   console.log("Your new car is " + car.year + " " + car.make + " " + car.model);
}

function init() {
   // hyundai.engine = HSFengine;
   printCarInfo(hyundai);
   hyundai.start();
}

window.onload = init();