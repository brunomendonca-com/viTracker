/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-autofocus */
import React, {
  FormEvent,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import { CgClose } from 'react-icons/cg';
import { CSSTransition } from 'react-transition-group';
import { Duration } from 'luxon';

import { Task } from '../../App';
import { Background, Viewport, Modal, Form, Header } from './styles';
import { getTaskValidation } from '../../utils';

interface TaskModalProps {
  visibility: boolean;
  editMode: boolean;
  editData: Task;
  onCloseModal(): void;
  onSaveTask(newTask: Task): void;
  onEditTask(updatedTask: Task): void;
}

export interface newTaskDTO {
  name: string;
  description: string;
  hours: number;
  minutes: number;
  state: string;
}

const TaskModal: React.FC<TaskModalProps> = ({
  visibility,
  onCloseModal,
  onSaveTask,
  onEditTask,
  editData,
  editMode,
}: TaskModalProps) => {
  const [id, setId] = useState<number>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [state, setState] = useState<string>();

  const modalRef = useRef<any>(null);
  const formRef = useRef<any>(null);

  const handleReset = () => {
    setName('');
    setDescription('');
    setState('');
    setMinutes(Number());
    setHours(Number());
    if (formRef.current) formRef.current.reset();
  };

  useEffect(() => {
    if (editMode) {
      const duration = Duration.fromMillis(editData.estimate).shiftTo(
        'hours',
        'minutes',
      );

      setId(editData.id);
      setName(editData.name);
      setDescription(editData.description);
      setState(editData.state);
      setMinutes(duration.minutes);
      setHours(duration.hours);
    } else {
      handleReset();
    }
  }, [editMode, editData]);

  function handleSubmission(event: FormEvent<HTMLFormElement>) {
    if (event) event.preventDefault();

    const newTask = {
      name,
      description,
      hours,
      minutes,
      state,
    } as newTaskDTO;

    const validatedTask = getTaskValidation(newTask);

    if (validatedTask) {
      if (editMode) {
        validatedTask.id = id;
        onEditTask(validatedTask);
      } else {
        onSaveTask(validatedTask);
      }
    }
  }

  const handleClickOutside = (event: MouseEvent<HTMLElement>) => {
    if (modalRef && !modalRef.current.contains(event.target)) onCloseModal();
  };

  return (
    <>
      <CSSTransition
        classNames="background"
        timeout={300}
        in={visibility}
        mountOnEnter
        unmountOnExit
      >
        <Background />
      </CSSTransition>

      <CSSTransition
        classNames="modal"
        timeout={300}
        in={visibility}
        mountOnEnter
        unmountOnExit
      >
        <Viewport onClick={handleClickOutside}>
          <Modal ref={modalRef}>
            <Header>{editMode ? <h2>Edit Task</h2> : <h2>Add Task</h2>}</Header>
            <Form ref={formRef} onSubmit={handleSubmission}>
              <section className="details">
                <h3>Task Details</h3>
                <span>
                  <label htmlFor={name}>Name</label>
                  <input
                    type="text"
                    placeholder="Insert task name..."
                    name="name"
                    value={name}
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
                    value={description}
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
                      value={hours}
                      min="0"
                      onChange={event => setHours(Number(event.target.value))}
                    />
                    <div className="spacing" />
                    <label htmlFor={name}>Minutes</label>
                    <input
                      type="number"
                      name="minutes"
                      value={minutes}
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
                    value={state}
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
                {editMode ? (
                  <button type="button" onClick={onCloseModal}>
                    Cancel
                  </button>
                ) : (
                    <button type="button" onClick={handleReset}>
                      Reset
                    </button>
                  )}
                <button type="submit">Save</button>
              </section>
            </Form>

            <button
              className="close-button"
              type="button"
              onClick={() => onCloseModal()}
            >
              <CgClose size={16} color="#fff" />
            </button>
          </Modal>
        </Viewport>
      </CSSTransition>
    </>
  );
};

export default TaskModal;
