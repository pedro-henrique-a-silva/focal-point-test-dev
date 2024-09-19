import Image from 'next/image'
import React from 'react'
import checkBox from "@/assets/checkbox.svg"
import checkBoxChecked from "@/assets/checkbox-checked.svg"
import trash from "@/assets/trash.svg"
import style from '@/styles/tasks.module.scss'

type TaskProps = {
  checked: boolean,
  description: string
}

function Taks(props: TaskProps) {
  const { checked, description } = props

  return (
    <div className={style.task}>
      <Image
        src={checked ? checkBoxChecked : checkBox}
        alt='Imagem de uma tarefa'
      />
      <p className={checked ? style.taskNameFinished : style.taskName}>{description}</p>
      <Image
        src={trash}
        alt='Imagem de uma tarefa'
      />
    </div>
  )
}

export default Taks