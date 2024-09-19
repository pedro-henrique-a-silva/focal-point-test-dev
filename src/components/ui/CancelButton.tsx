"use client"
import useNavigateRoute from '@/hooks/useNavigateRoute';
import React from 'react'
import Button from './Button';

function CancelButton() {

  const { navigate } = useNavigateRoute()

  const handleClick = () => {
    navigate('/')
  };

  return (
    <Button buttonType='light' onClick={handleClick}>Cancelar</Button>
  )
}

export default CancelButton