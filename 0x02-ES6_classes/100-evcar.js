import Car from './10-car.js';

const _range = Symbol('range');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // Call the parent class constructor
    this[_range] = range; // Store the range using a symbol
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color); // Return an instance of Car
  }
}

export default EVCar;
