/* eslint-disable no-alert */
import { Duration } from 'luxon';
import { StatusSummary, Task } from '../App';
import { newTaskDTO } from '../components/TaskModal';

export const getStatusSummary = (array: Task[]): StatusSummary => {
  const statusSummary = array.reduce(
    (accumulator: StatusSummary, task: Task) => {
      switch (task.state) {
        case 'Planned':
          accumulator.planned += Number(task.estimate);
          break;
        case 'In-Progress':
          accumulator.inProgress += Number(task.estimate);
          break;
        case 'Completed':
          accumulator.completed += Number(task.estimate);
          break;
        default:
          break;
      }
      return accumulator;
    },
    {
      planned: 0,
      inProgress: 0,
      completed: 0,
    },
  );
  return statusSummary;
};

export const getScrollBarWidth = (): number => {
  const inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  const outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;
  if (w1 === w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
};

export const getTaskValidation = (newTask: newTaskDTO): Task | null => {
  try {
    const { name, description, hours, minutes, state } = newTask;

    const validateState =
      state === 'Planned' || state === 'In-Progress' || state === 'Completed';
    const validateDuration = !hours && !minutes;

    if (!validateState) throw new Error('Please select a valid status.');
    if (validateDuration)
      throw new Error('Please insert hours and/or minutes.');

    const durationHours = hours || 0;
    const durationMinutes = minutes || 0;

    const estimate = Duration.fromObject({
      hours: durationHours,
      minutes: durationMinutes,
    }).as('milliseconds');

    return {
      name,
      description,
      estimate,
      state,
    };
  } catch (error) {
    alert(error.message);
    return null;
  }
};
