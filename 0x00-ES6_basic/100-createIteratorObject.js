export default function createIteratorObject(report) {
    const employees = [];
  
    // Flatten the employees into a single array
    for (const department in report.allEmployees) {
      employees.push(...report.allEmployees[department]);
    }
  
    // Create and return an iterator
    return employees[Symbol.iterator]();
  }
  