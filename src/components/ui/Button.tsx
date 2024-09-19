'use client'
import React from 'react'
import style from "@/styles/button.module.scss"
import { useRouter } from 'next/navigation'

const buttonsStyles = {
  normal: style.normalButton,
  light: style.lightButton,
  cancel: style.cancelButton,
}

type ButtonProps = {
  buttonType?: 'normal' | 'light' | 'cancel'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
  const { buttonType } = props

  const buttonStyle = buttonsStyles[buttonType || 'normal']

  const router = useRouter();

  const handleClick = () => {
    router.push('/new-task');
  };

  return (
    <button
      {...props}
      className={`${style.button} ${buttonStyle}`}
      onClick={handleClick}
    >
      Adicionar nova Tarefa
    </button>
  )
}

export default Button