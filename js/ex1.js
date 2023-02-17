/*
   Exercise 1 JavaScript code
*/

class Square {
    constructor(side) {
        this.side = side;
    }
    perimeter() {
        return this.side * 4;
    }
    area() {
        return this.side * this.side;
    }
    diagonal() {
        return Math.sqrt(2 * this.side * this.side);
    }
    describe() {
        console.log(`Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}.`);
    }
}

const square1 = new Square(2);
square1.describe();

const square2 = new Square(3);
square2.describe();

const square3 = new Square(4);
square3.describe();