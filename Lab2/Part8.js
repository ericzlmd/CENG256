var fiat = {
   make: "Fiat",
   model: "500",
   year: 1957,
   color: "Medium Blue",
   passengers: 2,
   convertible: false,
   mileage: 88000,
   started: false,
   start: function () {
      this.started = true;
      console.log("Car Started...");
   },
   stop: function () {
      this.started = false;
      console.log("Car Stopped...turning off...");
      alert("Car Stopped");
   },
   drive: function () {
      if (this.started) {
         console.log("Car is moving..ZOOM ZOOM.");
         alert("Zoom zoom!");
      } else {
         console.log("You need to start the engine first.");
         alert("You need to start the engine first.");
      }
   }
};

console.log(fiat);