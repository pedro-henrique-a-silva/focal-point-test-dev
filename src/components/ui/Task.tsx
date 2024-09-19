"use client"
import Image from 'next/image'
import React from 'react'
import checkBox from "@/assets/checkbox.svg"
import checkBoxChecked from "@/assets/checkbox-checked.svg"
import trash from "@/assets/trash.svg"
import style from '@/styles/tasks.module.scss'
import { useRouter } from 'next/navigation'
import { useAppContext } from '../ContextProvider'

type TaskProps = {
  checked: boolean,
  description: string,
  taskId: string,
  handleClickCheckTask: (taskId: string) => void
}

function Task(props: TaskProps) {
  const { checked, description, taskId, handleClickCheckTask } = props
  const { openModalDeleteTask, setTaskToDelete } = useAppContext()

  const router = useRouter();

  const handleClickDeleteTask = () => {

    if (window.innerWidth > 768) {
      openModalDeleteTask();
      setTaskToDelete(taskId);
    } else {
      router.push(`/task/delete/${taskId}`);
    } 

  };

  const handleClickCheckboxTask = () => {
    handleClickCheckTask(taskId)
  }

  return (
    <div className={style.task}>
      <Image
        onClick={handleClickCheckboxTask}
        src={checked ? checkBoxChecked : checkBox}
        alt='Imagem de uma tarefa'
      />
      <p className={checked ? style.taskNameFinished : style.taskName}>{description}</p>
      <Image
        src={trash}
        onClick={handleClickDeleteTask}
        alt='Imagem de uma tarefa'
        />
    </div>
  )
}

export default Task