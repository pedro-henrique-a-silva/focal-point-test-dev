"use client"
import React from 'react'
import DeleteButton from './ui/DeleteButton'
import CancelButton from './ui/CancelButton'
import style from '../styles/delete.module.scss'
import useNavigateRoute from '@/hooks/useNavigateRoute';
import { useAppContext } from './ContextProvider';

type DeleteTaskProps = {
    id: string;
};

function DeleteTaskForm(props: DeleteTaskProps) {
  const { id } = props;
  const { navigate } = useNavigateRoute()
  const { openModalDeleteTask } = useAppContext()

  const handleClick = () => {
    if (window.innerWidth > 768) {
      openModalDeleteTask();
    } else {
      navigate('/')
    } 
  };
  
  return (
    <>
    <h1 className={style.newTaskTitle}>Deletar Tarefa</h1>
      <p className={style.textConfirmationDelete}>
        Tem certeza que você deseja deletar essa tarefa?
      </p>
      <div className={style.buttonWrapper}>
        <DeleteButton taskId={id} />
        <CancelButton onClick={handleClick} />
      </div>
    </>
  )
}

export default DeleteTaskForm