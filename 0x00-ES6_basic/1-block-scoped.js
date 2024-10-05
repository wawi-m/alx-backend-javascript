export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  // Only reassign the outer variables, don't declare new ones inside the block
  if (trueOrFalse) {
    task = true;   // Reassign outer task
    task2 = false; // Reassign outer task2
  }

  return [task, task2];  // Returns the values of the outer variables
}
