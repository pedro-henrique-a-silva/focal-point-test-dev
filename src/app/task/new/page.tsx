import React from 'react'
import pageStyle from "@/styles/page.module.scss"
import NewTaskForm from '@/components/NewTaskForm'

function page() {
  

  return (
    <div className={pageStyle.page}>
      <NewTaskForm />
    </div>
  )
}

export default page