"use client"
import React from 'react'
import Button from './Button';

function CancelButton( props: React.ButtonHTMLAttributes<HTMLButtonElement> ) {

  return (
    <Button {...props} buttonType='light' type="button">Cancelar</Button>
  )
}

export default CancelButton