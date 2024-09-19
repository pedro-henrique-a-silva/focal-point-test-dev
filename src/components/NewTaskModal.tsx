"use client"

import React from 'react'
import Modal from './ui/Modal'
import NewTaskForm from './NewTaskForm'

function NewTaskModal() {

  return (
    <Modal>
        <NewTaskForm />
    </Modal>
  )
}

export default NewTaskModal