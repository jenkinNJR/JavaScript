//  private properties
// ..  getters and setters
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 4 };


    let computeOptimumLocation = function (factor) {
        console.log(factor);
    };

    this.draw = function () {

        computeOptimumLocation(defaultLocation);
        console.log("draw");

    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error("Invalid location");
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation={ x: 50, y: 40 };
console.log(circle.defaultLocation);
circle.draw()
