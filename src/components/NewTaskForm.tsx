"use client"
import React, { useState } from 'react'
import Button from './ui/Button'
import style from '@/styles/newTaskForm.module.scss'
import Input from './ui/Input'
import useNavigateRoute from '@/hooks/useNavigateRoute'
import CancelButton from './ui/CancelButton'

function NewTaskForm() {
  const [description, setDescription] = useState('');

  const { navigate } = useNavigateRoute()

  const insertNewTask = async (description: string) => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || "[]")

    const uuid = self.crypto.randomUUID();

    const newTask = {
      id: uuid,
      description,
      completed: false,
    }

    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]))

    navigate('/')
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    insertNewTask(description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className={style.inputLabel} htmlFor="new-task">Titulo</label>
      <Input 
        id='new-task' 
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder='Nova Tarefa'
      />
      <div className={style.buttonWrapper}>
        <Button type="submit">Adicionar</Button>
        <CancelButton />
      </div>
    </form>
  )
}

export default NewTaskForm