import React, { useEffect, useState } from 'react';
import api from './services/api';

import AddTaskModal from './components/AddTaskModal';
import Header from './components/Header';
import StatusPanel from './components/StatusPanel';
import TaskList from './components/TaskList';

import GlobalStyle from './styles/global';

export interface Task {
  id: number;
  name: string;
  description: string;
  estimate: number;
  state: 'Planned' | 'In-Progress' | 'Completed';
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

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Header onAddNewTask={handleOpenModal} />
      <StatusPanel data={status} />
      <TaskList data={tasks} />
      {modalVisible && <AddTaskModal onCancel={handleCloseModal} />}
      <GlobalStyle />
    </>
  );
};

export default App;
