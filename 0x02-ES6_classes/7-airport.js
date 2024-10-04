class Airport {
  constructor(name, code) {
    this.name = name; // Calls the setter for validation
    this.code = code; // Calls the setter for validation
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  toString() {
    return `[object ${this.code}]`;
  }
}

export default Airport;
