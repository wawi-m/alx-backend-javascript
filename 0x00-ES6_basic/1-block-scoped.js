export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  // Return an array based on the trueOrFalse argument
  return trueOrFalse ? [true, false] : [task, task2];
}
