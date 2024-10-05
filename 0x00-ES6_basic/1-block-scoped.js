export default function taskBlock(trueOrFalse) {
  const outerTask = false;
  const outerTask2 = true;

  let task = outerTask;
  let task2 = outerTask2;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
