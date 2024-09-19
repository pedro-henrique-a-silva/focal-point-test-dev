"use client"
import React from 'react'
import Modal from './ui/Modal'
import DeleteTaskForm from './DeleteTaskForm'
import { useAppContext } from './ContextProvider'

function DeleteTaskModal() {
  const { taskToDelete } = useAppContext()
  return (
    <Modal>
        <DeleteTaskForm id={taskToDelete}/>
    </Modal>
  )
}

export default DeleteTaskModal