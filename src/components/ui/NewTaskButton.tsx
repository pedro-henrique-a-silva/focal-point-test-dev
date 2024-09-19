"use client"
import React from 'react'
import Button from './Button'
import useNavigateRoute from '@/hooks/useNavigateRoute';

function NewTaskButton() {
  const { navigate } = useNavigateRoute()

  const handleClick = () => {
    navigate('/task/new');
  };

  return (
    <Button onClick={handleClick}>Adicionar Nova Tarefa</Button>
  )
}

export default NewTaskButton