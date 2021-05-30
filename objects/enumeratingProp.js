function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);
for (const key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

if('radius'in circle) console.log(true);