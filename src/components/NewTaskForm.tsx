"use client"
import React, { useState } from 'react'
import Button from './ui/Button'
import style from '@/styles/newTaskForm.module.scss'
import Input from './ui/Input'
import useNavigateRoute from '@/hooks/useNavigateRoute'
import CancelButton from './ui/CancelButton'
import { useAppContext } from './ContextProvider'

function NewTaskForm() {
  const [description, setDescription] = useState('');
  const { openModalNewTask, updateTasks } = useAppContext()

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

    if (window.innerWidth > 768) {
      openModalNewTask();
      updateTasks([...tasks, newTask])
    } else {
      navigate('/')
    } 
  }


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    insertNewTask(description);
  }

  const handleClick = () => {
    if (window.innerWidth > 768) {
      openModalNewTask();
    } else {
      navigate('/')
    } 
  };
  

  return (
    <>
    <h1 className={style.newTaskTitle}>Nova Tarefa</h1>
    <form className={style.formWrapper} onSubmit={handleSubmit}>
      <label className={style.inputLabel} htmlFor="new-task">Titulo</label>
      <Input 
        id='new-task' 
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder='Nova Tarefa'
      />
      <div className={style.buttonWrapper}>
        <Button type="submit">Adicionar</Button>
        <CancelButton onClick={handleClick} />
      </div>
    </form>
  </>
  )
}

export default NewTaskForm