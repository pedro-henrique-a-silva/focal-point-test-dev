"use client"
import React, { useEffect } from 'react'
import style from '@/styles/tasks.module.scss'
import Tasks from '@/components/ui/Taks'
import { useAppContext } from './ContextProvider'
import NewTaskModal from './NewTaskModal'
import DeleteTaskModal from './DeleteTaskModal'

function TaskList() {
  const {
    tasks,
    isModalNewTaskOpen,
    isModalDeleteTaskOpen,
    handleClickCheckTask,
    updateTasks
  } = useAppContext()

  
  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks') || "[]")
    if (tasksFromLocalStorage) {
      updateTasks(tasksFromLocalStorage)
    }
  }, [])
  
  const tasksCompleted = tasks.filter((task) => task.completed)
  const tasksNotCompleted = tasks.filter((task) => !task.completed)

  return (
    <>
      <h1 className={style.tasksTitle}>Suas tarefas de hoje</h1>
      {tasksNotCompleted.map((task) => {
        return <Tasks 
          key={task.id} 
          taskId={task.id} 
          checked={task.completed} 
          description={task.description}
          handleClickCheckTask={handleClickCheckTask}
        />
      })}
      <h1 className={style.tasksTitleTasksFinished}>Tarefas finalizadas</h1>
      {tasksCompleted.map((task) => {
        return <Tasks 
          key={task.id} 
          taskId={task.id} 
          checked={task.completed} 
          description={task.description}
          handleClickCheckTask={handleClickCheckTask}
        />
      })}
     {isModalNewTaskOpen && <NewTaskModal />}
     {isModalDeleteTaskOpen && <DeleteTaskModal />}
    </>
  )
}

export default TaskList