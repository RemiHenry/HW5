/*
   Exercise 1 JavaScript code
*/

const square = {
    side: 2,
    perimeter: function() {
        return this.side * 4;
    },
    area: function() {
        return this.side * this.side;
    },
    diagonal: function() {
        return Math.sqrt(2 * this.side * this.side);
    },
    describe: function() {
        console.log(`Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}.`);
    }
}

const square1 = Object.create(square);
square1.side = 2;
square1.describe();

const square2 = Object.create(square);
square2.side = 3;
square2.describe();

const square3 = Object.create(square);
square3.side = 4;
square3.describe();