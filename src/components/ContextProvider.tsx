'use client';
import { TaskType } from '@/types/task';
import { createContext, useContext, useState } from 'react';

type AppContextType = {
  tasks: TaskType[];
  taskToDelete: string;
  isModalNewTaskOpen: boolean;
  isModalDeleteTaskOpen: boolean;
  setTaskToDelete: (taskId: string) => void;
  openModalNewTask: () => void;
  openModalDeleteTask: () => void;
  handleClickCheckTask: (taskId: string) => void;
  updateTasks: (tasks: TaskType[]) => void;
}

const AppContext = createContext({} as AppContextType);

type ContextoProviderProps = {
  children: React.ReactNode;
}

export function ContextProvider({ children }: ContextoProviderProps) {
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
  const [isModalDeleteTaskOpen, setIsModalDeleteTaskOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskToDelete, setTaskToDelete] = useState<string>('');

  const updateTasks = (tasks: TaskType[]) => {
    setTasks(tasks)
  }
  

  const handleClickCheckTask = (taskId: string) => {
    tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed
      }
    })

    setTasks([...tasks])
  }

  const openModalNewTask = () => {
    setIsModalNewTaskOpen((oldState) => !oldState);
  }

  const openModalDeleteTask = () => {
    setIsModalDeleteTaskOpen((oldState) => !oldState);
  }

  const context = {
    tasks,
    isModalNewTaskOpen,
    isModalDeleteTaskOpen,
    taskToDelete,
    setTaskToDelete,
    openModalNewTask,
    openModalDeleteTask,
    updateTasks,
    handleClickCheckTask 
  }
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const appContext = useContext(AppContext);

  return appContext
}