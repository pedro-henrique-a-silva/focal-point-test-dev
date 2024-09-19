"use client"
import React from 'react'
import Button from './Button'
import useNavigateRoute from '@/hooks/useNavigateRoute'
import { useAppContext } from '../ContextProvider'

type DeleteButtonProps = {
  taskId: string
}

function DeleteButton(props: DeleteButtonProps) {
  const { taskId } = props
  const { navigate } = useNavigateRoute()
  const { openModalDeleteTask, updateTasks } = useAppContext()

  const handleClick = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || "[]")

    const newTasks = tasks.filter((task: { id: string }) => task.id !== taskId)

    localStorage.setItem('tasks', JSON.stringify(newTasks))

    if (window.innerWidth > 768) {
      openModalDeleteTask();
      updateTasks([...newTasks])
    } else {
      navigate('/')
    } 
  };

  return (
    <Button buttonType='delete' onClick={handleClick}>Deletar</Button>
  )
}

export default DeleteButton