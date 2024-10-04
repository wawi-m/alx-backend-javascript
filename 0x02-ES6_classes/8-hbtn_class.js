class HolbertonClass {
  constructor(size, location) {
    this.size = size; // Calls the setter for validation
    this.location = location; // Calls the setter for validation
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = value;
  }

  // Cast to Number
  valueOf() {
    return this.size;
  }

  // Cast to String
  toString() {
    return this.location;
  }
}

export default HolbertonClass;
