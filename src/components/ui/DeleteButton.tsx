"use client"
import React from 'react'
import Button from './Button'
import useNavigateRoute from '@/hooks/useNavigateRoute'

type DeleteButtonProps = {
  taskId: string
}

function DeleteButton(props: DeleteButtonProps) {
  const { taskId } = props
  const { navigate } = useNavigateRoute()

  const handleClick = () => {
    const tarks = JSON.parse(localStorage.getItem('tasks') || "[]")

    const newTasks = tarks.filter((task: { id: string }) => task.id !== taskId)

    localStorage.setItem('tasks', JSON.stringify(newTasks))

    navigate('/')
  };

  return (
    <Button buttonType='delete' onClick={handleClick}>Deletar</Button>
  )
}

export default DeleteButton