import React, { useEffect, useState } from 'react';
import api from './services/api';

import TaskModal from './components/TaskModal';
import Header from './components/Header';
import StatusPanel from './components/StatusPanel';
import TaskList from './components/TaskList';

import GlobalStyle from './styles/global';
import { getScrollBarWidth } from './utils';

export interface Task {
  id?: number;
  name?: string;
  description?: string;
  estimate?: number;
  state?: string;
}
export interface Status {
  planned: number;
  inProgress: number;
  completed: number;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>({
    planned: 0,
    inProgress: 0,
    completed: 0,
  });

  useEffect(() => {
    async function loadTasks(): Promise<void> {
      const response = await api.get('/tasks');
      const fetchedTasks = response.data;
      setTasks(fetchedTasks);
    }

    loadTasks();
  }, []);

  useEffect(() => {
    const statusSum = tasks.reduce(
      (accumulator: Status, task: Task) => {
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

    setStatus(statusSum);
  }, [tasks]);

  const toggleScrollLock = () => {
    const scrollbarWidth = getScrollBarWidth();
    const scrollbarVisible =
      document.body.scrollHeight > document.documentElement.clientHeight;

    const html = document.querySelector<HTMLElement>('html');
    if (html) {
      html.classList.toggle('scroll-lock');
      if (scrollbarVisible) {
        document.body.style.marginRight = `${scrollbarWidth}px`;
      } else {
        document.body.style.marginRight = '0px';
      }
    }
  };

  const handleOpenModal = () => {
    toggleScrollLock();
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    toggleScrollLock();
    setModalVisible(false);
  };

  async function handleUpdateTasks(newTask: Task) {
    try {
      const response = await api.post<Task>('/tasks', newTask);
      setTasks([...tasks, response.data]);
      handleCloseModal();
    } catch (err) {
      alert('Something went wrong.');
    }
  }

  async function handleDeleteTask(id: number) {
    try {
      const response = await api.delete(`/tasks/${id}`);
      if (response.status === 200) {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        handleCloseModal();
      } else {
        throw new Error('Something went wrong...');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Header onAddNewTask={handleOpenModal} />
      <StatusPanel data={status} />
      <TaskList data={tasks} onDeleteTask={handleDeleteTask} />
      {modalVisible && (
        <TaskModal closeModal={handleCloseModal} saveTask={handleUpdateTasks} />
      )}
      <GlobalStyle />
    </>
  );
};

export default App;
