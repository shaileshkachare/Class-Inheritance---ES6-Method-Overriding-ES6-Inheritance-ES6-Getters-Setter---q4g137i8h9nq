// import using require

// declare class
var Shape = require('./shape.js');

class circle extends Shape{
    constructor(color) {
        super();

    }
    CalculateArea(){

    }
}
// export class using module.exports
module.exports = circle;