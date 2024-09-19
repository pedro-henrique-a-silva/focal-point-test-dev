"use client"
import React from 'react'
import Button from './Button'
import useNavigateRoute from '@/hooks/useNavigateRoute';
import { useAppContext } from '../ContextProvider';

function NewTaskButton() {
  const { navigate } = useNavigateRoute()
  const { openModalNewTask } = useAppContext()

  const handleClick = () => {
    
    if (window.innerWidth > 768) {
      openModalNewTask();
    } else {
      navigate('/task/new');
    } 
  };

  return (
    <Button onClick={handleClick}>Adicionar Nova Tarefa</Button>
  )
}

export default NewTaskButton