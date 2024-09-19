"use client"
import React from 'react'
import style from '@/styles/tasks.module.scss'
import Tasks from '@/components/ui/Taks'
import { useTasksContext } from '@/components/ContextProvider'

function TaskList() {
  const { tasks } = useTasksContext();
  
  const tasksCompleted = tasks.filter((task) => task.completed)
  const tasksNotCompleted = tasks.filter((task) => !task.completed)

  return (
    <>
      <h1 className={style.tasksTitle}>Suas tarefas de hoje</h1>
      {tasksNotCompleted.map((task) => {
        return <Tasks key={task.id} checked={task.completed} description={task.description} />
      })}
      <h1 className={style.tasksTitleTasksFinished}>Tarefas finalizadas</h1>
      {tasksCompleted.map((task) => {
        return <Tasks key={task.id} checked={task.completed} description={task.description} />
      })}
     
    </>
  )
}

export default TaskList