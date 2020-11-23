/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { FormEvent, useState } from 'react';

import { ModalBackground, ModalContainer } from './styles';
import api from '../../services/api';

interface NewTask {
  name: string;
  description: string;
  estimate: number;
  state: string;
}

interface TaskModalProps {
  onCancel: () => void;
}

const AddTaskModal: React.FC<TaskModalProps> = ({
  onCancel,
}: TaskModalProps) => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [state, setState] = useState<string>();

  async function handleAddTask(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    console.log(event.target);
    // if (!event.target) {
    //   alert('Please, fill out all the fields.');
    //   return;
    // }

    try {
      let hoursToMillis;
      let minutesToMillis;
      let estimate;

      if (hours) {
        hoursToMillis = hours * 60 * 60 * 1000;
      }
      if (minutes) {
        minutesToMillis = minutes * 60 * 1000;
      }

      if (!hoursToMillis && !minutesToMillis) estimate = 0;
      if (hoursToMillis && !minutesToMillis) estimate = hoursToMillis;
      if (!hoursToMillis && minutesToMillis) estimate = minutesToMillis;
      if (hoursToMillis && minutesToMillis)
        estimate = hoursToMillis + minutesToMillis;

      const response = await api.post<NewTask>('/tasks', {
        name,
        description,
        estimate,
        state,
      });
      console.log(response.data);
      onCancel();
    } catch (err) {
      alert('Something went wrong.');
      onCancel();
    }
  }

  return (
    <ModalBackground>
      <ModalContainer>
        <form onSubmit={handleAddTask}>
          <h1>Add New Task</h1>
          <input
            type="text"
            placeholder="Insert task name..."
            name="name"
            required
            autoFocus
            onChange={event => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="Insert task description..."
            name="description"
            required
            onChange={event => setDescription(event.target.value)}
          />
          <input
            type="number"
            placeholder="hours"
            name="hours"
            min="0"
            onChange={event => setHours(Number(event.target.value))}
          />
          <input
            type="number"
            placeholder="minutes"
            name="minutes"
            min="0"
            max="45"
            step="15"
            onChange={event => setMinutes(Number(event.target.value))}
          />

          <label htmlFor="status">Task Status:</label>
          <input
            list="status-options"
            id="status"
            name="status"
            onChange={event => setState(event.target.value)}
          />

          <datalist id="status-options">
            <option value="Planned" />
            <option value="In-Progress" />
            <option value="Completed" />
          </datalist>

          <button type="button" onClick={() => onCancel()}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </form>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddTaskModal;
