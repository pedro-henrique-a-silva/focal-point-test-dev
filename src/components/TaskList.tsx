"use client"
import React, { useEffect, useState } from 'react'
import style from '@/styles/tasks.module.scss'
import Tasks from '@/components/ui/Taks'
import { TaskType } from '@/types/task'

function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const handleClickCheckTask = (taskId: string) => {
    tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed
      }
    })

    setTasks([...tasks])
  }
  
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || "[]")
    if (tasks) {
      setTasks(tasks)
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
     
    </>
  )
}

export default TaskList