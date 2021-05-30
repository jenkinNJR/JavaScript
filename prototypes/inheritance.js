/*

function stopWatch() {
    let startTime, running, endTime;
    this.duration = 0;
    this.running= false;



    Object.defineProperty(this, 'endTime', {
        get: function () { return endTime }
    });


    Object.defineProperty(this, 'startTime', {
        get: function () { return startTime }
    });

}

stopWatch.prototype.start = function () {
    if (this.running)
        throw new Error('Stop Watch already started');
    this.running = true;
    this.startTime = new Date();
};

stopWatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stop Watch not started');

    this.running = false;

    this.endTime = new Date();

    const seconds = (this.endTime.getTime() - this.startTime.getTime) / 1000;
    this.duration += seconds;
};

stopWatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};

const sw = new stopWatch();
sw.start();

setTimeout(() => {
    sw.stop();
    console.log(sw.duration);
}, 1000);

// messed up

*/





function Circle(radious) {
    this.radious = radious;
    let v;
    this.draw = function () {
        console.log("draw");
    }

    this.pro = function () {
        return Promise.resolve("hi");
    }
}

Circle.prototype.show = () => {
    console.log("show");
}
let c = new Circle();

console.log(c.toString());

Circle.prototype.toString = function(){
    return "hi"
}

console.log(Circle.toString());

console.log(c.toString());
c.draw();
c.show();

console.log(Object.keys(c));