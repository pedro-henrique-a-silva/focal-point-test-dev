import React from 'react'
import style from "@/styles/button.module.scss"

const buttonsStyles = {
  normal: style.normalButton,
  light: style.lightButton,
  delete: style.deleteButton,
}

type ButtonProps = {
  buttonType?: 'normal' | 'light' | 'delete'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
  const { buttonType, children, ...restOfProps } = props

  const buttonStyle = buttonsStyles[buttonType || 'normal']

  return (
    <button
      {...restOfProps}
      className={`${style.button} ${buttonStyle}`}
    >
      {children}
    </button>
  )
}

export default Button