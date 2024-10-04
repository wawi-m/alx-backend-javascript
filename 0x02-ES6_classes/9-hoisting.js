export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass; // Correctly assign holbertonClass
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass; // Correctly return this._holbertonClass
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`; // Use this instead of self
  }
}

// Create student instances
const student1 = new StudentHolberton('Gume', 'Sa', class2020); 
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// List of students
export const listOfStudents = [student1, student2, student3, student4, student5];
