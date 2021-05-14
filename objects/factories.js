// factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);
circle.draw();

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

Circle.location = function () {
    console.log("simply");
  };

// functions are object

let obj = { value: 10 };
function increase(numobjber) {
  obj.value++;
}

increase(obj);
console.log(obj);
// ading and removing properties
const constructorCircle = new Circle(1);
constructorCircle.draw();
constructorCircle.location = function () {
  console.log("simply");
};

Circle.location();
delete Circle.location;





