import React, { useEffect, useState } from 'react';
import Header from './components/Header';

import GlobalStyle from './styles/global';
import api from './services/api';
import TaskList from './components/TaskList';

export interface Task {
  id: number;
  name: string;
  description: string;
  estimate: number;
  state: 'Planned' | 'In-Progress' | 'Completed';
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function loadTasks(): Promise<void> {
      const response = await api.get('/tasks');
      setTasks(response.data);
    }

    loadTasks();
  }, []);

  return (
    <>
      <Header />
      <TaskList tasks={tasks} />
      <GlobalStyle />
    </>
  );
};

export default App;
