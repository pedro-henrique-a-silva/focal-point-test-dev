import React from 'react'
import style from '@/styles/input.module.scss'

type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>

function Input(props: InputProps) {
  return (
    <input {...props} className={style.defaultInput} type="text" />
  )
}

export default Input