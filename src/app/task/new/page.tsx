import React from 'react'
import pageStyle from "@/styles/page.module.scss"
import style from '@/styles/newTask.module.scss'
import NewTaskForm from '@/components/NewTaskForm'

function page() {
  return (
    <div className={pageStyle.page}>
      <h1 className={style.newTaskTitle}>Nova Tarefa</h1>
      <NewTaskForm />
    </div>
  )
}

export default page