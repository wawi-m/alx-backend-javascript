const _brand = ('brand');
const _motor = ('motor');
const _color = ('color');
class Car {
    constructor(brand, motor, color) {
      this._brand = brand; // Use underscore for private attributes
      this._motor = motor;
      this._color = color;
    }

  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  cloneCar() {
    return new this.constructor(this[_brand], this[_motor], this[_color]);
  }
}

export default Car;
