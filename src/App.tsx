/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import api from './services/api';

import TaskModal from './components/TaskModal';
import Header from './components/Header';
import StatusPanel from './components/StatusPanel';
import TaskList from './components/TaskList';
import NoTasks from './components/NoTasks';

import GlobalStyle from './styles/global';
import './styles/transitions.css';
import { getScrollBarWidth, getStatusSummary } from './utils';

export interface Task {
  id?: number;
  name: string;
  description: string;
  estimate: number;
  state: string;
}
export interface StatusSummary {
  planned: number;
  inProgress: number;
  completed: number;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [isFiltering, setIsFiltering] = useState<string>('');
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const [selectedTask, setSelectedTask] = useState<Task>({} as Task);
  const [status, setStatus] = useState<StatusSummary>({} as StatusSummary);

  useEffect(() => {
    async function loadTasks(): Promise<void> {
      const response = await api.get('/tasks');
      const fetchedTasks = response.data;
      setTasks(fetchedTasks);
    }

    loadTasks();
  }, []);

  useEffect(() => {
    const statusDurations = getStatusSummary(tasks);
    setStatus(statusDurations);
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
    if (isEditing) setIsEditing(false);
    if (selectedTask) setSelectedTask({} as Task);
    setModalVisible(false);
  };

  async function handleSaveTask(newTask: Task) {
    try {
      const response = await api.post<Task>('/tasks', newTask);
      setTasks([...tasks, response.data]);
      handleCloseModal();
    } catch (err) {
      alert('Something went wrong.');
    }
  }

  async function handleUpdateTask(editedTask: Task) {
    const editingConfirmed = window.confirm(
      `Do you really want to edit the task "${editedTask.name}"?`,
    );

    if (editingConfirmed)
      try {
        const response = await api.put<Task>(
          `/tasks/${editedTask.id}`,
          editedTask,
        );

        if (response.status === 200) {
          const updatedTasks = tasks;
          const updatedIndex = tasks.findIndex(
            task => task.id === editedTask.id,
          );
          updatedTasks[updatedIndex] = editedTask;

          const updatedDurations = getStatusSummary(updatedTasks);
          setStatus(updatedDurations);
          setTasks(updatedTasks);
          setIsEditing(false);
          setSelectedTask({} as Task);
          handleCloseModal();
        }
      } catch (err) {
        alert('Something went wrong.');
      }
  }

  async function handleDeleteTask({ id, name }: Task) {
    const deletionConfirmed = window.confirm(
      `Do you really want to delete the task "${name}"?`,
    );

    if (deletionConfirmed)
      try {
        const response = await api.delete(`/tasks/${id}`);
        if (response.status === 200) {
          const updatedTasks = tasks.filter(task => task.id !== id);
          setTasks(updatedTasks);
        } else {
          throw new Error('Something went wrong...');
        }
      } catch (error) {
        alert(error.message);
      }
  }

  function handleEditingMode(task: Task) {
    setIsEditing(true);
    setSelectedTask(task);
    handleOpenModal();
  }

  function handleFilteringMode(activeFilterStatus: string) {
    setIsFiltering(activeFilterStatus);
    if (activeFilterStatus) {
      const filterTasks = tasks.filter(
        task => task.state === activeFilterStatus,
      );
      setFilteredTasks(filterTasks);
    } else {
      setFilteredTasks([] as Task[]);
      setIsFiltering('');
    }
  }

  return (
    <>
      <Header onAddNewTask={handleOpenModal} />
      <StatusPanel data={status} onFilter={handleFilteringMode} />
      {tasks.length === 0 ? (
        <NoTasks />
      ) : (
          <TaskList
            data={isFiltering ? filteredTasks : tasks}
            onClickTask={handleEditingMode}
            onDeleteTask={handleDeleteTask}
          />
        )}
      <TaskModal
        visibility={modalVisible}
        editMode={isEditing}
        editData={selectedTask}
        onCloseModal={handleCloseModal}
        onSaveTask={handleSaveTask}
        onEditTask={handleUpdateTask}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
