/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { FormEvent, MouseEvent, useState, useRef } from 'react';
import { CgClose } from 'react-icons/cg';
import { Duration } from 'luxon';
import { Task as NewTask } from '../../App';
import { Background, Container, Form, Header } from './styles';

interface TaskModalProps {
  closeModal(): void;
  saveTask(newTask: NewTask): void;
}

const TaskModal: React.FC<TaskModalProps> = ({
  closeModal,
  saveTask,
}: TaskModalProps) => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [state, setState] = useState<string>();

  const modalRef = useRef<any>(null);

  function handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
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

      const newTask = {
        name,
        description,
        estimate,
        state,
      };

      saveTask(newTask);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleClickOutside = (event: MouseEvent<HTMLElement>) => {
    if (modalRef && !modalRef.current.contains(event.target)) closeModal();
  };

  const formRef = useRef<any>(null);

  return (
    <Background onClick={handleClickOutside}>
      <Container ref={modalRef}>
        <Header>
          <h2>Add Task</h2>
        </Header>
        <Form ref={formRef} onSubmit={handleAddTask}>
          <section className="details">
            <h3>Task Details</h3>
            <span>
              <label htmlFor={name}>Name</label>
              <input
                type="text"
                placeholder="Insert task name..."
                name="name"
                required
                autoFocus
                onChange={event => setName(event.target.value)}
              />
            </span>
            <span>
              <label htmlFor={name}>Description</label>
              <input
                type="text"
                placeholder="Insert task description..."
                name="description"
                required
                onChange={event => setDescription(event.target.value)}
              />
            </span>
          </section>
          <section className="duration-status">
            <section className="duration">
              <h4>Estimated Duration</h4>
              <span className="duration-fields">
                <label htmlFor={name}>Hours</label>
                <input
                  type="number"
                  name="hours"
                  min="0"
                  onChange={event => setHours(Number(event.target.value))}
                />
                <div className="spacing" />
                <label htmlFor={name}>Minutes</label>
                <input
                  type="number"
                  name="minutes"
                  min="0"
                  max="45"
                  step="15"
                  onChange={event => setMinutes(Number(event.target.value))}
                />
              </span>
            </section>
            <section className="status">
              <h4>Task Status</h4>
              <input
                list="status-options"
                placeholder="Select task status..."
                name="status"
                id="status"
                required
                onChange={event => setState(event.target.value)}
              />
              <datalist id="status-options">
                <option value="Planned" />
                <option value="In-Progress" />
                <option value="Completed" />
              </datalist>
            </section>
          </section>
          <section className="buttons">
            <button type="button" onClick={() => formRef.current.reset()}>
              Reset
            </button>
            <button type="submit">Save</button>
          </section>
        </Form>

        <button
          className="closeModal"
          type="button"
          onClick={() => closeModal()}
        >
          <CgClose size={16} color="#fff" />
        </button>
      </Container>
    </Background>
  );
};

export default TaskModal;
